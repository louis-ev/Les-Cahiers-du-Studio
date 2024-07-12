module.exports = (function () {
  // Ready translated locale messages
  const messages = {
    fr: {
      ascending: "Croissant",
      descending: "Décroissant",
      create_a_folder: "Créer une timeline",
      more_informations: "Plus d’informations",
      "connected_as:": "Connecté avec le compte&nbsp;:",
      login_after_creation: "S’identifier avec ce compte",

      login_to_access_project:
        "Connectez-vous avec un compte autorisé pour accéder à ce projet",
      login_to_edit_project: "Identifiez-vous pour contribuer",

      admin: "Administrateur",
      contributor: "Contributeur",
      participant: "Participant",
      presentation: "Présentation",
      create_introduction: "Créer un texte d’introduction",
      forget_password_and_close: "Oublier le mot de passe et fermer",

      bytes: "octets",
      kb: "ko",
      mb: "Mo",
      gb: "Go",

      audio: "Audio",
      video: "Vidéo",
      image: "Image",
      file: "Fichier",
      marker: "Marqueur",
      text: "Texte",
      embed: "Intégration",

      list_of_folders: "Liste des timelines",
      list_of_authors: "Liste des auteurs",
      search_among_timeline: "Chercher par nom",
      folder_name_to_find: "Nom à trouver",
      quality: "Qualité",
      adjust_infos:
        "Vous pourrez toujours revenir au média d’origine si nécessaire.",
      unread_messages: "Messages non-lus",
      show_older_messages: "Voir les messages plus anciens",
      drop_here_to_import: "Déposez les médias ici pour les importer",
      tile_options: "Options de la tuile",
      show_chat_bubble:
        "Afficher le raccourci vers la discussion correspondante",
      action_on_tile_click_for_visitors:
        "Action lorsqu’un visiteur non-contributeur clique sur la tuile dans la timeline",
      open_modal: "Ouvrir cette fenêtre",
      open_external_link: "Ouvrir un lien externe vers…",
      do_nothing: "Ne rien faire",
      link_to_open_in_a_new_tab:
        "URL de la page à ouvrir dans un nouvel onglet",
      url_to_page: "URL vers la page web",

      timestamp:
        "EXPÉRIMENTAL : pastilles d’horodatage en appuyant sur entrée à la dernière ligne",
      active: "Actif",
      timestamp_instructions:
        "La création de pastilles d’horodatage se fait en plaçant son curseur à la dernière ligne et en ajoutant un retour à la ligne avec ENTRÉE. Pour ne pas créer de pastilles en dernière ligne utilisez SHIFT+ENTRÉE.",

      name: "Nom",
      custom: "Personnalisée",
      created_date: "Date de création",
      start_date: "Date de début",
      end_date: "Date de fin",
      sent_date: "Date d’envoi",
      for_the_placement_on_timeline: "(pour le placement sur la timeline)",
      type: "Type",
      color: "Couleur",
      keywords: "Mot-clés",
      author: "Auteur(s)",
      share: "Partager",
      zoom: "Zoom",

      very_high: "Très élevée",
      high: "Élevée",
      medium: "Moyenne",
      low: "Basse",
      draft: "Ébauche",
      reveal_password: "Révéler le mot de passe",
      hide_password: "Masquer le mot de passe",

      download: "Télécharger",
      caption: "Légende",
      connect_to_les_cahiers: "Se connecter à Les Cahiers du Studio",
      remember_password_on_this_device: "Sauvegarder pour cet appareil",
      date: "Date",
      and: "Et",
      logout: "Se déconnecter",
      send: "Envoyer",
      action: "Action",
      "active_filter:": "Filtre(s) actif(s)&nbsp;:",
      "medias_shown:": "Médias affichés&nbsp;:",
      "file:": "Fichier&nbsp;:",
      change_color: "Modifier la couleur",
      connect: "Se connecter",
      disconnect: "Se déconnecter",
      login: "S’identifier",
      options: "Options",
      show_all_keywords: "Afficher l’ensemble des mots-clés",
      hide_all_keywords: "Masquer l’ensemble des mots-clés",
      show_all_authors: "Afficher l’ensemble des auteurs",
      hide_all_authors: "Masquer l’ensemble des auteurs",

      when_logged_as_author_content_will_be_tagged:
        "Lorsque vous êtes identifié comme auteur toutes les timelines que vous créez porteront votre nom. Vous seul pourrez les modifier ou les supprimez.",
      more_informations_on_authors:
        "Vous pourrez ajouter d’autres co-auteurs aux timelines pour pouvoir les modifier à plusieurs. Si vous supprimez un auteur, toutes les timelines et médias conserveront le nom d’auteur et ne seront pas supprimées.",

      creation_of_the_timeline: "Création de la timeline",
      author_name: "Nom de l’auteur associé",
      key: "Touche du clavier",
      none: "Aucun",
      untitled_document: "Document sans-titre",
      back_to_list: "Retour à la liste",
      back_to_home: "Retourner à l’accueil",
      close_sidebar: "Fermer la barre latérale",

      journal: "Journal",
      chats: "Discussions",
      no_message_yet: "Aucun message à afficher pour l’instant…",

      informations: "Informations",
      show_instructions: "Comment utiliser cet outil ?",

      "error:": "Erreur&nbsp;:",

      optimize: "Optimiser",
      optimize_instructions:
        "Convertir le média vidéo ou audio pour optimiser la compatibilité avec tous les appareils et réduire le poids (codec vidéo mp4/h264, codec audio mp3).",
      trim: "Raccourcir",
      trim_instructions:
        "Indiquez le début et la fin souhaités.\nVous pouvez lire et mettre la vidéo en pause puis utiliser les boutons en bas de la vidéo pour copier le temps de lecture.",
      playback: "Lecture",
      trim_help: "Modification du début et de la fin de la coupe",
      beginning: "Début",
      end: "Fin",
      play_video_from_this_moment: "Lire la vidéo à partir de ce moment là",
      use_current_time: "Copier le temps du lecteur",
      set_as_beginning: "placer le début",
      set_as_end: "placer la fin",
      replace: "Remplacer",
      test: "Tester",
      interval: "Interval",

      revert_to_original: "Revenir à l’original",

      filters: "Filtres",
      on_import_place_media_on_the_date_they_were_created:
        "À l’importation de médias, le placement se fait selon la date de création du fichier et non la date d’importation",
      author_instructions:
        "Pour créer un auteur, fermez cette fenêtre et cliquez sur le bouton <i>s’identifier</i>.",
      name_or_pseudo: "Nom ou pseudonyme",
      create_account: "Créer un compte",

      loading: "chargement",
      comments: "Commentaires",
      advanced_options: "Options avancées",
      edit_introduction_text: "Modifier le texte d’introduction",
      close: "Fermer",
      open: "Ouvrir",
      save: "Enregistrer",
      save_and_close: "Enregistrer + fermer",
      edit: "Éditer",
      submit: "Valider",

      print: "Imprimer",
      create: "Créer",
      remove: "Suppr.",
      rename: "Renommer",
      password: "Mot de passe",
      change_password: "Modifier le mot de passe",
      protected_by_pass: "protégé par mot de passe",
      add_password: "Protéger par un mot de passe",

      password_instructions:
        "Seuls les utilisateurs possédant ce mot de passe pourront éditer cette timeline, y ajouter du contenu et consulter les médias non publics.",

      last_read_message: "Dernier message lu",
      post_a_message: "Envoyer un message",
      edit_timeline: "Contribuer à la timeline",
      label: "Étiquette",
      unfold: "Déplier",
      fold: "Replier",

      all_tags: "Liste des mots-clés disponibles",
      sort_by: "Organiser par",
      in_the_order: "Dans l’ordre",
      public: "Public",
      show_only_public: "Afficher uniquement les médias publics",

      content: "Contenu",
      writeup: "Compte-rendu",
      add_author: "Ajouter un auteur",
      not_connected: "Non connecté(s)",
      author_connected: "Auteurs connectés",
      no_medias_sent_yet: "Aucun média à afficher",
      show: "Afficher",
      hide: "Masquer",
      stop_playback: "arrêter la lecture",

      "lang:": "Changer la langue&nbsp;:",
      lang: "Changer la langue",

      keyboard_shortcuts: "Raccourcis clavier",
      keyboard_shortcuts_instructions:
        "Associez ici l’appui sur des touches du clavier (ou d’un boîtier do•doc) à la création de markers colorés à ce moment précis dans la timeline.",

      credits:
        'Un outil libre et open-source créé par l’<a href="https://latelier-des-chercheurs.fr" class="js--openInBrowser" target="_blank">Atelier des Chercheurs</a> avec et pour le <a href="https://www.studiotheatre.fr/" class="js--openInBrowser" target="_blank">Studio-Théâtre de Vitry-sur-Seine</a>.',
      authors_list: "Inscrits",

      toconnectwithanotherdevice:
        "Pour accéder aux Cahiers avec un autre appareil, connectez-vous au même réseau wifi puis entrez l’url suivante dans un navigateur web&nbsp;: ",
      toconnectwithanotherdevicetothisfolder:
        "Pour accéder à cette timeline avec un autre appareil, connectez vous au même réseau wifi puis entrez l’url suivante dans un navigateur web&nbsp;: ",
      sureToRemoveFolder: "Êtes-vous sûr de vouloir supprimer cette timeline ?",
      sureToRemoveMedia: "Êtes-vous sûr de vouloir supprimer ce média ?",
      sureToRemoveAuthor: "Êtes-vous sûr de vouloir supprimer cet auteur ?",
      sureToCloseModal: "Êtes-vous sûr de vouloir fermer cette fenêtre ?",

      edit_the_media: "Éditer le média",
      edit_folder: "Éditer la timeline",

      capture_start: "Début de la capture",
      capture_end: "Fin de la capture",
      currently: "Actuellement",
      archive_this_folder: "Archiver cette timeline",
      archive_instructions:
        "En activant cette option, tous les contenus de cette timeline ne pourront plus être modifiés.",

      more_information:
        'Pour plus d’information, consultez la <a href="https://latelier-des-chercheurs.fr/docs/manuel-les-cahiers-du-studio" class="js--openInBrowser" target="_blank">documentation</a> ou <a href="mailto:info@latelier-des-chercheurs.fr?subject=Les Cahiers du Studio" class="js--openInBrowser" target="_blank">contactez</a> les auteurs de ce logiciel.',
      no_media_in_folder: "Aucun média dans cette timeline.",
      no_public_media_in_folder: "Aucun média public dans cette timeline.",
      auto_scroll: "défilement<br>automatique",
      scale: "échelle&nbsp;:",
      scale_items: {
        second: "sec",
        minute: "min",
        hour: "h",
        half_day: "½j",
        day: "j",
      },
      one_week_later: "1 semaine plus tard…",
      weeks_later: "&nbsp;semaines plus tard…",
      months_later: "&nbsp;mois plus tard…",
      years_later: "&nbsp;ans plus tard…",
      contents_are_stored:
        "Les contenus de cette timeline sont enregistrés dans ",
      folder_information: "Informations sur la timeline",
      calendar: "Calendrier",
      now: "en ce moment",
      today: "aujourd’hui",
      list: "Liste",
      fullscreen: "Plein écran",
      preview: "Aperçu",
      filter: "Filtre",
      add_keyword: "Ajouter un mot-clé",
      old_password: "Ancien mot de passe",
      new_password: "Nouveau mot de passe",
      login_to_create_channel: "Identifiez-vous pour créer un sujet",
      only_authors_can_open: "Accès limité aux auteurs",
      cancel: "annuler",
      login_to_post: "Identifiez-vous pour envoyer un message",
      login_or_create_account: "Créer un compte ou s’identifier",

      export_folder: "Exporter en format WEB",
      export: "Exporter",
      only_public_medias: "Inclure uniquement les médias <em>publics</em>",
      import: "Importer",
      import_all_files: "Importer tous les fichiers",
      import_medias: "Importer des médias",
      select_type_of_export:
        "Sélectionnez ici le type d’export. Il est possible d’exporter tous les médias d’une timeline ou uniquement ceux indiqués comme Public.",
      password_protect: "Protéger l’accès par un mot de passe",
      allow_media_download: "Permettre le téléchargement des médias originaux",
      password_required_to_open: "Mot de passe requis",
      password_required_to_edit: "Mot de passe requis pour contribuer",
      only_password_can_open: "Accès limité par mot de passe",
      access_with_other_devices: "Connecter d’autres appareils",
      show_password: "Afficher le mot de passe",
      who_can_edit: "Qui peut contribuer",
      consultation: "Consultation",
      visible_to_all: "Visible par tout le monde",
      only_authors: "Seulement les auteurs",
      protected_by_authors: "Protégé par les auteurs",
      with_password: "Avec un mot de passe",
      everybody: "Tout le monde",
      nobody: "Personne",

      "with_all_medias:": "Avec tous les médias",

      last_modified: "Dernière modification",
      save_changes: "Enregistrer",
      last_saved_on: "Enregistré le",

      channels_instructions:
        "Espaces de discussion : échangez avec les autres utilisateurs en créant un sujet !",
      filters_instructions: "Filtrer les contenus par mot-clé",
      manage_access: "Gérer l’accès au contenu",
      last_message: "Dernier message",
      pinned: "Discussions épinglés",
      channels_list: "Liste des discussions",
      sure_to_remove_message: "Êtes-vous sûr de vouloir supprimer ce message ?",

      notifications: {
        file_was_sent: "Le fichier a été envoyé.",
        file_upload_not_allowed:
          "Votre navigateur web ne prend pas en charge l’envoi de fichiers.",
        creating_video: "En cours de création de la vidéo…",
        connection_active: "La connexion au serveur est active.",
        connection_lost: "La connexion au serveur a été perdue.",
        contents_wont_be_editable:
          "Les modifications et ajouts ne seront plus pris en compte.",
        connection_error: "La connexion au serveur n’a pu se faire.",
        "wrong_password_for_folder:":
          "Le password n’est pas le bon pour la timeline&nbsp;:",
        "created_edited_media:":
          "Création ou édition d’un média pour la timeline&nbsp;:",
        author_name_exists: "Ce nom d’auteur existe déjà.",
        document_name_exists:
          "Ce nom de document existe déjà, utilisez-en un autre.",
        folder_name_exists:
          "Ce nom de timeline existe déjà, utilisez-en un autre.",
        folder_name_needs_alphanumeric_characters:
          "Les noms de timeline doivent contenir au moins un caractère alphanumérique.",
        "failed_to_get_folder:": "La timeline suivante n’a pas été trouvé:",
        folder_export_started: "Préparation du fichier à exporter en cours…",
        connected_to_lescahiers: "Connection aux Cahiers active",
        media_type_not_handled:
          "Impossible d’insérer le média dans le journal : ce type n’est pas pris en charge.",
        action_not_allowed:
          "Cette action n’est pas permise. Cette timeline est peut-être protégée par un mot de passe.",
        password_is_valid: "Mot de passe accepté",
        connecting_using_saved_account:
          "Identification automatique en tant que ",
        connected_as: "Connecté avec le compte ",
        "account_does_not_exist:": "Le compte demandé n’existe pas&nbsp;:",
        wrong_password: "Mot de passe erroné",
      },
    },
    en: {
      ascending: "Ascending",
      descending: "Descending",
      create_a_folder: "Create a timeline",
      more_informations: "More informations",
      "connected_as:": "Connected as:",
      login_after_creation: "Login with this account",

      admin: "Administrator",
      contributor: "Contributor",
      participant: "Participant",
      presentation: "Presentation",

      create_introduction: "Create introduction text",
      forget_password_and_close: "Forget password and close",

      login_to_access_project:
        "Connect with an authorized account to access project",
      login_to_edit_project: "Login to contribute",

      audio: "Audio",
      video: "Video",
      image: "Image",
      file: "File",
      marker: "Marker",
      text: "Text",
      embed: "Embed",

      list_of_folders: "List of timelines",
      list_of_authors: "List of authos",
      search_among_timeline: "Search by name",
      folder_name_to_find: "Name to find",
      show_chat_bubble: "Show chat bubble",
      action_on_tile_click_for_visitors:
        "What happens when a non-contributing visitors clicks on this tile in the timeline",

      name: "Name",
      created_date: "Created date",
      start_date: "Start date",
      end_date: "End date",
      sent_date: "Sent date",
      for_the_placement_on_timeline: "(used for the position on the timeline)",
      type: "Type",
      color: "Color",
      keywords: "Keywords",
      author: "Author(s)",
      share: "Share",
      zoom: "Zoom",
      download: "Download",
      caption: "Caption",
      date: "Date",
      and: "And",
      logout: "Log-out",

      send: "Send",
      action: "Action",
      "active_filter:": "Active filter:",
      "medias_shown:": "Medias shown:",
      "file:": "File:",
      change_color: "Change color",
      connect: "Se connecter",
      disconnect: "Disconnect",
      login: "Login",
      options: "Options",
      show_all_keywords: "Show all keywords",
      hide_all_keywords: "Hide all keywords",
      show_all_authors: "Show all authors",
      hide_all_authors: "Hide all authors",
      creation_of_the_timeline: "Creation of the timeline",
      author_name: "Associated author",
      key: "Key",
      none: "None",
      untitled_document: "Untitled document",
      back_to_list: "Back to list",
      back_to_home: "Back to home",
      close_sidebar: "Close sidebar",
      journal: "Journal",
      chats: "Chats",
      no_message_yet: "No message to display yet…",

      informations: "Informations",
      filters: "Filters",

      on_import_place_media_on_the_date_they_were_created:
        "On media import, place them according to the file creation date and not the importation date",
      author_instructions:
        "To create authors, close this window and click on <i>login</i>.",
      name_or_pseudo: "Name or nickname",
      create_account: "Create account",

      loading: "loading",
      comments: "Comments",
      open: "Open",
      save: "Save",
      save_and_close: "Save + close",
      edit: "Edit",
      submit: "Submit",
      print: "Print",
      create: "Create",
      remove: "Remove",
      rename: "Rename",
      password: "Password",
      change_password: "Change password",

      when_logged_as_author_content_will_be_tagged:
        "When logged in as an author all projects, medias and recipes you create will be tagged with your name.",
      more_informations_on_authors:
        "You can add co-authors in the projects, medias and recipes. If you remove an author, all the projects, medias and recipes will keep this author name and won’t be removed.",

      only_password_can_open: "Access limited with password",
      access_with_other_devices: "Access with other devices",
      password_required_to_open: "Password required",
      password_required_to_edit: "Password required to contribute",
      show_password: "Show password",

      protected_by_pass: "protected by password",
      password_instructions:
        "If set, only users with the password will be able to edit this folder and access the content that’s not public.",

      post_a_message: "Post a message",

      edit_timeline: "Contribute to timeline",
      label: "Label",
      unfold: "Unfold",
      fold: "Fold",

      all_tags: "List of keywords available",
      sort_by: "Sort by",
      in_the_order: "In the order",
      public: "Public",
      content: "Content",
      writeup: "Write-up",
      add_author: "Add author",
      not_connected: "Not connected",
      author_connected: "Connected author",
      no_medias_sent_yet: "No media to show",
      show: "Show",
      hide: "Hide",

      stop_playback: "stop playback",

      "lang:": "Select lang:",
      lang: "Select lang",

      keyboard_shortcuts: "Keyboard shortcuts",
      keyboard_shortcuts_instructions:
        "Setup keyboard shortcuts that trigger the creation of colored time markers when a key is pressed on a keyboard.",

      credits:
        'A free and open-source app made by l’<a href="https://latelier-des-chercheurs.fr" class="js--openInBrowser" target="_blank">Atelier des Chercheurs</a> with and for the <a href="https://www.studiotheatre.fr/" class="js--openInBrowser" target="_blank">Studio-Théâtre de Vitry-sur-Seine</a> in France.',

      toconnectwithanotherdevice:
        "To access Les Cahiers with another device, connect to the same wifi network and type this adress in your browser:",
      toconnectwithanotherdevicetothisfolder:
        "To access this folder in Les Cahiers with another device, connect to the same wifi network and type this adress in your browser:",
      sureToRemoveFolder: "Do you really want to delete this folder?",
      sureToRemoveMedia: "Do you really want to delete this media?",
      sureToRemoveAuthor: "Do you really want to delete this author?",
      sureToCloseModal: "Do you really want to close this window?",

      edit_the_media: "Edit media",
      edit_folder: "Edit folder",
      unread_messages: "Unread messages",
      show_older_messages: "See older messages",
      drop_here_to_import: "Drop medias here to import",
      tile_options: "Tile options",

      capture_start: "Start of the capture",
      capture_end: "End of the capture",
      currently: "Now",
      archive_this_folder: "Archive this folder",
      archive_instructions:
        "If checked, no new media can be added to this folder and existing media can’t be edited or removed. This option can be changed at all time in this modal.",

      more_information:
        'For more informations, read the <a href="https://latelier-des-chercheurs.fr/docs/manuel-les-cahiers-du-studio" class="js--openInBrowser" target="_blank">documentation (in french)</a> or <a href="mailto:info@latelier-des-chercheurs.fr?subject=Les Cahiers du Studio" class="js--openInBrowser" target="_blank">contact</a> the creators of this app.',

      who_can_edit: "Who can contribute",
      consultation: "Consultation",
      visible_to_all: "Visible for everyone",
      only_authors: "Only authors",
      protected_by_authors: "Protected by authors",
      with_password: "With a password",
      everybody: "Everybody",
      nobody: "Nobody",

      no_media_in_folder: "No media in this folder.",
      no_public_media_in_folder: "No public media in this folder.",
      auto_scroll: "autoscroll",
      scale: "scale:",
      scale_items: {
        second: "sec",
        minute: "min",
        hour: "h",
        half_day: "½d",
        day: "d",
      },
      one_week_later: "1 week later…",
      weeks_later: "&nbsp;weeks later…",
      months_later: "&nbsp;months later…",
      months: "&nbsp;months ",
      years_later: "&nbsp;years later…",
      contents_are_stored: "Contents for this folder are stored in ",
      folder_information: "Folder information",
      calendar: "Calendar",
      now: "now",
      today: "today",
      login_to_create_channel: "Login to create a topic",
      only_authors_can_open: "Access limited to authors",
      cancel: "cancel",
      login_to_post: "Login to send a message",
      login_or_create_account: "Create an account or login",

      list: "List",
      fullscreen: "Fullscreen",
      preview: "Preview",
      filter: "Filter",
      add_keyword: "Add a keyword",

      export_folder: "Export timeline as a webpage",
      export: "Export",
      only_public_medias: "Only include medias marked <em>public</em>",
      select_type_of_export:
        'Select here the type of web export to get. It is possible to either export all medias of a timeline, or only the medias marked as "Public"',
      password_protect: "Protect access with a password",
      allow_media_download: "Allow download of original medias",
      import_medias: "Import medias",
      import_all_files: "Import all files",
      select_files_to_import: "Select files to import",

      last_modified: "Last modified",
      save_changes: "Save changes",

      notifications: {
        file_was_sent: "The file was sent.",
        file_upload_not_allowed: "File upload is not allowed by this browser.",
        connection_active: "The connection to the server is active.",
        connection_lost: "The connection to the server was lost.",
        contents_wont_be_editable: "Content editing is disabled.",
        connection_error:
          "The connection to the server could not be established.",
        "wrong_password_for_folder:": "Wrong password or folder missing for:",
        "created_edited_media:":
          "A media has been created or edited in folder:",
        author_name_exists: "This name is already created.",
        document_name_exists:
          "This document name already exists, please use another one.",
        folder_name_exists: "Folder name already exists. Please use another.",
        folder_name_needs_alphanumeric_characters:
          "Folder names need to contain at least one alphanumeric character.",
        "failed_to_get_folder:": "Failed to get the requested folder:",
        folder_export_started: "Export requested…",
        connected_to_lescahiers: "Connection active",
        media_type_not_handled: "Media type not handled in the journal.",
        action_not_allowed:
          "This action was blocked. You may need the password to do that.",
        password_is_valid: "Password is valid",
        connecting_using_saved_account: "Automatic login as ",
        connected_as: "Connected as ",
        "account_does_not_exist:": "The requested account does not exist:",
        wrong_password: "Wrong password",
      },
    },
  };

  return messages;
})();
