import { loadScript } from "./utils";

let isFirst = true;

const getDocType = () => {
  const node = document.doctype as DocumentType;
  var html = `<!DOCTYPE ${node.name}${node.publicId ? ` PUBLIC "${node.publicId}"` : ""}${
    !node.publicId && node.systemId ? " SYSTEM" : ""
  }${node.systemId ? ` "${node.systemId}"` : ""}>`;

  return html;
};

const checkHtml = () => {
  const urls = [
    "https://unpkg.com/htmlhint@latest/dist/htmlhint.js",
    "https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
  ];

  const cb = () => {
    console.log(window.HTMLHint.HTMLHint.verify(getDocType() + document.documentElement.outerHTML));
  };

  if (isFirst) {
    isFirst = false;
    loadScript(urls, cb);
  } else {
    cb();
  }
};

const getHtmlError = () => {
  window.HTMLHint.HTMLHint.verify(getDocType() + document.documentElement.outerHTML);
};

export { checkHtml, getHtmlError };
