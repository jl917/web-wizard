import { loadScript } from "./utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let v: any;

function getVConsole() {
  const urls = [
    "https://unpkg.com/vconsole@latest/dist/vconsole.min.js",
    "https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js",
  ];
  loadScript(urls, () => {
    v = new window.VConsole();
  });
}

function destorVConsole() {
  v.destroy();
}

export { getVConsole, destorVConsole };
