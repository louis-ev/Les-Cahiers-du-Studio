<template>
  <div
    class="m_importMedias"
    @mouseleave="/* show_addmedia_options = false */"
    :class="{ 'is--showing_options': show_addmedia_options }"
    v-if="can_edit_folder"
  >
    <div
      v-if="show_addmedia_options"
      class="_modalOverlay"
      @click="show_addmedia_options = false"
    />

    <div class="m_importMedias--options">
      <button
        key="add_text"
        type="button"
        class="button button-round button-round-small margin-bottom-small padding-none bg-noir c-blanc"
        @click="createTextMedia"
        :disabled="read_only"
      >
        <span class="text_label show_on_hover">{{ $t("text") }}</span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <path
            d="M26.51,12V28h-13V12h13m1-1h-15V29h15V11Z"
            style="fill: currentColor"
          />
          <line
            x1="15.21"
            y1="14.41"
            x2="24.71"
            y2="14.41"
            style="fill: none; stroke: currentColor; stroke-miterlimit: 10"
          />
          <line
            x1="15.21"
            y1="17.88"
            x2="24.71"
            y2="17.88"
            style="fill: none; stroke: currentColor; stroke-miterlimit: 10"
          />
          <line
            x1="15.21"
            y1="21.26"
            x2="24.71"
            y2="21.26"
            style="fill: none; stroke: currentColor; stroke-miterlimit: 10"
          />
          <line
            x1="15.21"
            y1="24.62"
            x2="22.88"
            y2="24.62"
            style="fill: none; stroke: currentColor; stroke-miterlimit: 10"
          />
        </svg>
      </button>

      <button
        key="add_marker"
        type="button"
        class="button button-round button-round-small margin-bottom-small bg-noir c-blanc padding-none"
        @click="createMarkerMedia"
        :disabled="read_only"
      >
        <span class="text_label show_on_hover">{{ $t("marker") }}</span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <path
            d="M20,11.59A8.41,8.41,0,1,1,11.59,20,8.42,8.42,0,0,1,20,11.59m0-1A9.41,9.41,0,1,0,29.41,20,9.41,9.41,0,0,0,20,10.59Z"
            style="fill: currentColor"
          />
          <circle cx="20" cy="20" r="4.74" style="fill: currentColor" />
        </svg>
      </button>

      <button
        key="add_embed"
        type="button"
        class="button button-round button-round-small margin-bottom-small bg-noir c-blanc padding-none"
        @click="createEmbedMedia"
        :disabled="read_only"
      >
        <span class="text_label show_on_hover">{{ $t("embed") }}</span>
      </button>

      <template>
        <div
          :key="`add_${field.key}`"
          class="button button-round button-round-small margin-bottom-small bg-noir c-blanc padding-none"
          v-for="field in input_file_fields"
          :disabled="read_only"
        >
          <label :for="`add_${field.key}`">
            <span class="text_label show_on_hover">{{ field.label }}</span>
            <div v-html="field.svg" />
          </label>
          <input
            type="file"
            multiple
            :id="`add_${field.key}`"
            :name="field.key"
            @change="updateInputFiles($event)"
            :accept="field.accept"
            :capture="field.capture"
            style="width: 1px; height: 1px; overflow: hidden"
          />
        </div>
      </template>
    </div>

    <button
      type="button"
      class="m_importMedias--button button button-round margin-bottom-small padding-none bg-noir c-blanc button_addMedia m_addMedias--buttons--openHideButton"
      :class="{
        'is--shown': show_addmedia_options,
        'is--dragover': show_drop_container,
      }"
      @click="show_addmedia_options = !show_addmedia_options"
      @drop="dropHandler($event)"
    >
      <span class="text_label always_show" v-if="show_drop_container">{{
        $t("drop_here_to_import")
      }}</span>
      <!-- TODO scroll to now au click -->
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 24 24"
        xml:space="preserve"
      >
        <path
          style="fill: currentColor"
          d="M0,10.5h10.5V0h2.9v10.5H24v2.9H13.5V24h-2.9V13.5H0V10.5z"
        />
      </svg>
    </button>

    <UploadFileModal
      v-if="selected_files.length > 0"
      :slugFolderName="slugFolderName"
      :type="'folders'"
      :selected_files.sync="selected_files"
      @insertMedias="(metaFileNames) => insertImportedMedias({ metaFileNames })"
      @close="selected_files = []"
    />
  </div>
</template>
<script>
import UploadFileModal from "../modals/UploadFileModal.vue";
import debounce from "debounce";

export default {
  props: {
    can_edit_folder: Boolean,
    read_only: Boolean,
    show_addmedia_options: Boolean,
    slugFolderName: String,
  },
  components: {
    UploadFileModal,
  },
  data() {
    return {
      show_drop_container: false,
      selected_files: [],

      input_file_fields: [
        {
          key: "audio",
          label: this.$t("audio"),
          accept: "audio/*",
          capture: true,
          svg: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <line x1="5.83" y1="21.69" x2="5.83" y2="18.31" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="8.41" y1="16.52" x2="8.41" y2="23.48" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="10.99" y1="17.83" x2="10.99" y2="22.17" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="13.56" y1="24.94" x2="13.56" y2="15.06" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="16.14" y1="22.53" x2="16.14" y2="17.47" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="18.71" y1="16.9" x2="18.71" y2="23.1" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="21.29" y1="18.06" x2="21.29" y2="21.94" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="23.86" y1="22.67" x2="23.86" y2="17.33" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="26.44" y1="26.02" x2="26.44" y2="13.98" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="29.01" y1="22.73" x2="29.01" y2="17.27" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="31.59" y1="23.73" x2="31.59" y2="16.27" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            <line x1="34.17" y1="21.43" x2="34.17" y2="18.57" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            </svg>
          `,
        },
        {
          key: "file",
          label: this.$t("file"),
          accept: "",
          capture: false,
          svg: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <path d="M20.89,12v4.63a1,1,0,0,0,1,1h4.63V28h-13V12h7.4m1-1H12.5V29h15V16.62H21.88V11Z" style="fill: currentColor"/>
              <line x1="27" y1="17.12" x2="21.38" y2="11.5" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.9900837817656861px"/>
            </svg>
          `,
        },
        {
          key: "video",
          label: this.$t("video"),
          accept: "video/*",
          capture: true,
          svg: `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px"
              height="40px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
              <rect style="fill:none;stroke:currentColor" x="12.3" y="11" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 40 3.552714e-15)" style="fill:none;stroke:currentColor" width="15.3" height="18"/>
              <polygon  style="fill:none;stroke:currentColor" style="fill:none;stroke:currentColor" points="23.8,20 17.4,23.6 17.4,16.4 "/>
            </svg>
          `,
        },
        {
          key: "image",
          label: this.$t("image"),
          accept: "image/*",
          capture: true,
          svg: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <path d="M28,13.35v13.3H12V13.35H28m1-1H11v15.3H29V12.35Z" style="fill: currentColor"/>
              <line x1="13.85" y1="14.99" x2="26.48" y2="25.12" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
              <line x1="13.85" y1="25.12" x2="26.48" y2="14.99" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
            </svg>
          `,
        },
      ],
    };
  },
  created() {},
  mounted() {
    document.addEventListener("dragover", this.ondragover);
    this.cancelDragOver = debounce(this.cancelDragOver, 300);
  },
  beforeDestroy() {
    document.removeEventListener("dragover", this.ondragover);
  },
  watch: {},
  computed: {},
  methods: {
    ondragover(e) {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • AddMedia / ondragover`);
      }

      var dt = e.dataTransfer;
      if (
        dt.types &&
        (dt.types.indexOf
          ? dt.types.indexOf("Files") != -1
          : dt.types.contains("Files"))
      ) {
        console.log(`is file`);
        this.show_drop_container = true;
        this.cancelDragOver();
      }
    },
    cancelDragOver() {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • AddMedia / cancelDragOver`);
      }
      this.show_drop_container = false;
    },
    dropHandler($event) {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • AddMedia / dropHandler`);
      }

      // Prevent default behavior (Prevent file from being opened)
      $event.preventDefault();

      if ($event.dataTransfer.items) {
        let files = [];
        for (var i = 0; i < $event.dataTransfer.items.length; i++) {
          if ($event.dataTransfer.items[i].kind === "file") {
            files.push($event.dataTransfer.items[i].getAsFile());
          }
        }
        this.selected_files = files;
      } else {
        for (var i = 0; i < $event.dataTransfer.files.length; i++) {
          this.selected_files = Array.from($event.dataTransfer.files);
        }
      }
    },

    createMedia({ additionalMeta }) {
      return new Promise((resolve, reject) => {
        this.$root
          .createMedia({
            slugFolderName: this.slugFolderName,
            type: "folders",
            additionalMeta,
          })
          .then((mdata) => {
            this.$eventHub.$emit("scrollToMedia", mdata.metaFileName);
            return resolve(mdata);
          });
      });
    },
    createTextMedia() {
      if (window.state.dev_mode === "debug") {
        console.log("METHODS • AddMediaButton: createTextMedia");
      }
      this.show_addmedia_options = false;
      const additionalMeta = {
        type: "text",
        w: 4,
        h: 4,
      };
      this.createMedia({ additionalMeta }).then((mdata) => {
        setTimeout(() => {
          this.$eventHub.$emit("timeline.openMediaModal", mdata.metaFileName);
        }, 500);
      });
    },
    createMarkerMedia() {
      if (window.state.dev_mode === "debug")
        console.log("METHODS • AddMediaButton: createMarkerMedia");

      this.show_addmedia_options = false;
      const additionalMeta = {
        type: "marker",
      };
      this.createMedia({ additionalMeta }).then((mdata) => {
        setTimeout(() => {
          this.$eventHub.$emit("timeline.openMediaModal", mdata.metaFileName);
        }, 500);
      });
    },
    createEmbedMedia() {
      if (window.state.dev_mode === "debug")
        console.log("METHODS • AddMediaButton: createMarkerMedia");

      this.show_addmedia_options = false;

      const additionalMeta = {
        type: "embed",
      };
      this.createMedia({ additionalMeta }).then((mdata) => {
        setTimeout(() => {
          this.$eventHub.$emit("timeline.openMediaModal", mdata.metaFileName);
        }, 500);
      });
    },

    insertImportedMedias({ metaFileNames }) {
      // get last media

      if (metaFileNames.length === 0) return false;

      const last_media_meta = metaFileNames[metaFileNames.length - 1];
      this.show_addmedia_options = false;

      this.$eventHub.$once(`socketio.folders.media_listed`, () => {
        this.selected_files = [];
        setTimeout(() => {
          this.$eventHub.$emit("scrollToMedia", last_media_meta);
        }, 500);
      });
    },

    updateInputFiles($event) {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • AddMedia / updateSelectedFiles`);
      }
      this.selected_files = Array.from($event.target.files);
      $event.target.value = "";
    },
  },
};
</script>
<style lang="less" scoped>
.m_importMedias {
  pointer-events: none;
  margin: 0 var(--spacing-verysmall);
  // --c-author: white;
  // --c-author: var(--c-noir);

  .m_importMedias--options {
    flex: 1 1 auto;
    min-width: 70px;
    padding: var(--spacing-medium) var(--spacing-small) 0;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    // pointer-events: none;
    > * {
      display: block;
      position: relative;
      cursor: pointer;
      opacity: 0;
      transform: translateY(5px) scale(0.8);
      background-color: var(--c-author);
      color: var(--c-text_on_author_color);
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);

      label {
        cursor: inherit;
      }

      .delay_transition_up(@max, @counter) when (@counter < @max) {
        .delay_transition_up(@max, (@counter + 1));
        &:nth-child(@{counter}) {
          transition-delay: ((@max - @counter) * 0.035s);
        }
      }
      .delay_transition_up(6, 0);
    }
  }
  &.is--showing_options {
    pointer-events: auto;

    .m_importMedias--options > * {
      opacity: 1;
      transform: translateY(0px) scale(1);

      &[disabled] {
        // opacity: 0.4;
        cursor: not-allowed;
        background-color: #999;
      }
    }
  }

  .m_importMedias--button {
    // height: 2em;
    flex: 0 0 auto;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    display: block;
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 22px;
    text-transform: initial;
    pointer-events: auto;
    background-color: var(--c-author);
    color: var(--c-text_on_author_color);

    svg {
      width: 24px;
      height: 24px;
      transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
      transform: rotate(0);
    }
    &.is--dragover {
      width: 256px;
      height: 256px;
    }
  }

  &.is--showing_options {
    // background-color: #999;

    .m_importMedias--button svg {
      transform: rotate(225deg);
    }
  }
}

.button_addMedia {
  width: 64px;
  height: 64px;
  padding: 0 ~"calc(var(--spacing)/4)";
  margin: 0 auto !important;
  background-color: var(--c-author);
}

button,
.button {
  position: relative;
  box-shadow: -0.1em 0.2em 1em rgba(0, 0, 0, 0.15);
  // margin: .3em;

  &:active {
    background-color: var(--c-vert_vif);
  }

  label {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
  }

  span {
    margin-top: 0;
  }

  .text_label:not(.always_show) {
    // opacity: 0;
    transition: opacity 0.08s;

    html.touchevents & {
      opacity: 1;
    }
  }

  &:hover .text_label {
    opacity: 1;
  }
}

.text_label {
  position: absolute;
  right: ~"calc(100% + 15px)";

  text-transform: initial;
  padding: 3px 4px;
  line-height: 1;

  border-radius: 3px;
  background-color: var(--c-author);
  color: var(--c-text_on_author_color);
  // color: --c-noir;

  // background-color: white;
  // color: black;
  box-shadow: 2px 4px 13px #bbb;

  top: 50%;
  transform: translate(0, -50%);
  white-space: nowrap;
}
</style>
