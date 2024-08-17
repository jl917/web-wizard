import { loadScript } from "./utils";

const checkHtml = () => {
  const urls = [
    "https://unpkg.com/htmlhint@latest/dist/htmlhint.js",
    "https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
  ];
  loadScript(urls, () => {
    window.HTMLHint.HTMLHint.verify(
      document.doctype + document.documentElement.outerHTML
    );
  });
};

export { checkHtml };
