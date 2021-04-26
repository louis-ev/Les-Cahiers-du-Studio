import Quill from "quill";
let BlockEmbed = Quill.import("blots/block/embed");

const humanTime = function ({ timestamp, duration }) {
  function dateString(date) {
    const _date = new Date(date);

    let day =
      new Date().toLocaleDateString() === _date.toLocaleDateString()
        ? "aujourd’hui"
        : _date.toLocaleDateString();

    return (
      day +
      " — " +
      _date.getHours() +
      ":" +
      (_date.getMinutes() < 10 ? "0" : "") +
      _date.getMinutes() +
      "." +
      (_date.getSeconds() < 10 ? "0" : "") +
      _date.getSeconds()
    );
  }

  let date_string = "";

  date_string += dateString(+timestamp);
  if (duration) {
    date_string += " → " + dateString(timestamp + duration);
  }

  return date_string;
};

class TimestampBlot extends BlockEmbed {
  static blotName = "timestamp";
  static tagName = "time";
  static className = "ql-timestamp";

  static create({ timestamp }) {
    console.log(`TimestampBlot create ${timestamp}`);
    let node = super.create();

    if (!timestamp) {
      alert(`No timestamp to use`);
      return;
    }
    node.setAttribute("contenteditable", false);
    node.dataset.timestamp = timestamp;

    return node;
  }

  constructor(node) {
    super(node);

    const timestamp = node.dataset.timestamp;
    node.innerHTML = "";

    console.log(`TimestampBlot constructor`);

    let content_button = window.document.createElement("button");
    content_button.setAttribute("type", "button");
    content_button.innerText = humanTime({ timestamp });
    content_button.classList.add("_edit_timestamp");

    content_button.addEventListener("click", ($event) => {
      const quill = Quill.find(node.parentElement.parentElement);
      quill.options._vm.setTimestampFilter({ node: node });

      // const input = window.document.createElement("input");
      // input.setAttribute("type", "text");
      // input.value = timestamp;
      // node.appendChild(input);
    });
    node.appendChild(content_button);

    let remove_button;
    remove_button = window.document.createElement("button");
    remove_button.innerHTML = "×";
    remove_button.setAttribute("type", "button");
    remove_button.classList.add("_button_removeTimestamp", "_onlyForEditors");
    remove_button.addEventListener("click", () => {
      const quill = Quill.find(node.parentElement.parentElement);
      quill.enable(true);
      node.style.animation = "scale-out 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
      node.addEventListener("animationend", () => {
        super.remove();
        // node.remove();
        // supprimer du bloc proprement
      });
    });
    node.appendChild(remove_button);
  }

  static value(node) {
    return {
      timestamp: node.dataset.timestamp,
    };
  }
}

module.exports = TimestampBlot;
