const getPath = require('platform-folders');
const path = require('path');
const fs = require('fs-extra');
const portscanner = require('portscanner');

const server = require('./server');

const dev = require('./dev-log'),
  api = require('./api'),
  cache = require('./cache');

module.exports = function({ router }) {
  const is_electron = process.versions.hasOwnProperty('electron');

  console.log(`App is electron : ${is_electron}`);

  if (is_electron) {
    require('./electron')
      .init()
      .then(win => {
        setupApp().then(() => {
          server(router);
          win.loadURL(global.appInfos.homeURL);
        });
      })
      .catch(err => {
        dev.error(`Error code: ${err}`);
      });
  } else {
    setupApp()
      .then(() => {
        server(router);
      })
      .catch(err => {
        dev.error(`Error code: ${err}`);
      });
  }

  function setupApp() {
    return new Promise(function(resolve, reject) {
      console.log(`Starting app ${global.appInfos.name}`);
      console.log(process.versions);

      const debug =
        process.argv.length >= 4 ? process.argv[3] === '--debug' : false;
      const verbose =
        process.argv.length >= 5 ? process.argv[4] === '--verbose' : false;
      const logToFile = false;

      dev.init(debug, verbose, logToFile);

      if (dev.isDebug()) {
        process.traceDeprecation = true;
      }

      global.tempStorage = getPath.getCacheFolder();

      if (
        global.settings.hasOwnProperty('cache_content') &&
        global.settings.cache_content === true
      ) {
        cache.enable();
      }

      dev.log(`——— Starting dodoc2 app version ${global.appInfos.version}`);

      cleanCacheFolder().then(
        () => {
          copyAndRenameUserFolder().then(
            function(pathToUserContent) {
              global.pathToUserContent = pathToUserContent;
              dev.log('Will store contents in: ' + global.pathToUserContent);

              readSessionMetaFile().then(sessionMeta => {
                if (
                  !!sessionMeta &&
                  sessionMeta.hasOwnProperty('session_password') &&
                  sessionMeta.session_password !== '' &&
                  typeof sessionMeta.session_password === 'string'
                ) {
                  function hashCode(s) {
                    return s.split('').reduce(function(a, b) {
                      a = (a << 5) - a + b.charCodeAt(0);
                      return a & a;
                    }, 0);
                  }

                  const pass = sessionMeta.session_password.trim();

                  dev.log('Found session password in meta.txt set to: ' + pass);

                  global.session_password = hashCode(pass);
                }
                portscanner
                  .findAPortNotInUse(
                    global.settings.desired_port,
                    global.settings.desired_port + 20
                  )
                  .then(
                    port => {
                      global.appInfos.port = port;
                      global.appInfos.homeURL = `${
                        global.settings.protocol
                      }://${global.settings.host}:${global.appInfos.port}`;

                      dev.log(`main.js - Found available port: ${port}`);
                      return resolve();
                    },
                    function(err) {
                      dev.error('Failed to find available port: ' + err);
                      return reject(err);
                    }
                  )
                  .catch(err => {
                    dev.error(`err ${err}`);
                    if (is_electron)
                      dev.showErrorBox(
                        `The app ${app.getName()} wasn’t able to start`,
                        `Error code: ${err}`
                      );
                  });
              });
            },
            function(err) {
              dev.error('Failed to check existing content folder: ' + err);
              return reject(err);
            }
          );
        },
        function(err) {
          dev.error('Failed to clean cache folder: ' + err);
          return reject(err);
        }
      );
    });
  }

  function copyAndRenameUserFolder() {
    return new Promise(function(resolve, reject) {
      const userDirPath = getPath.getDocumentsFolder();

      const pathToUserContent = path.join(
        userDirPath,
        global.settings.userDirname
      );
      fs.access(pathToUserContent, fs.F_OK, function(err) {
        // if userDir folder doesn't exist yet at destination
        if (err) {
          dev.log(
            `Content folder ${
              global.settings.userDirname
            } does not already exists in ${userDirPath}`
          );
          dev.log(
            `->duplicating ${
              global.settings.contentDirname
            } to create a new one`
          );

          let sourcePathInApp;
          if (is_electron) {
            sourcePathInApp = path.join(
              `${global.appRoot.replace(`${path.sep}app.asar`, '')}`,
              `${global.settings.contentDirname}`
            );
          } else {
            sourcePathInApp = path.join(
              `${global.appRoot}`,
              `${global.settings.contentDirname}`
            );
          }
          fs.copy(sourcePathInApp, pathToUserContent, function(err) {
            if (err) {
              dev.error(`Failed to copy: ${err}`);
              reject(err);
            }
            resolve(pathToUserContent);
          });
        } else {
          dev.log(
            `Content folder ${
              global.settings.userDirname
            } already exists in ${userDirPath}`
          );
          dev.log(`-> not creating a new one`);
          resolve(pathToUserContent);
        }
      });
    });
  }

  function cleanCacheFolder() {
    return new Promise(function(resolve, reject) {
      let cachePath = path.join(
        global.tempStorage,
        global.settings.cacheDirname
      );
      fs.emptyDir(cachePath)
        .then(() => {
          resolve();
        })
        .catch(err => {
          dev.error(err);
          return reject(err);
        });
    });
  }

  function readSessionMetaFile() {
    return new Promise(function(resolve, reject) {
      var pathToSessionMeta = api.getFolderPath('meta.txt');
      try {
        var metaFileContent = fs.readFileSync(
          pathToSessionMeta,
          global.settings.textEncoding
        );
        return resolve(api.parseData(metaFileContent));
      } catch (err) {
        return resolve();
      }
    });
  }
};
