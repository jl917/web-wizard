import { loadScript } from "./utils";

let isFirst = true;
const checkHtml = () => {
  const urls = [
    "https://unpkg.com/htmlhint@latest/dist/htmlhint.js",
    "https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
  ];

  const cb = () => {
    console.log(window.HTMLHint.HTMLHint.verify(document.doctype + document.documentElement.outerHTML));
  };

  if (isFirst) {
    isFirst = false;
    loadScript(urls, cb);
  } else {
    cb();
  }
};

export { checkHtml };
