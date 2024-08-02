export function loadScript(cdnUrls: string[], callback: () => void) {
  let i = 0;
  const runScript = (url: string) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      callback();
    };
    script.onerror = () => {
      if (i < cdnUrls.length - 1) {
        i++;
        runScript(cdnUrls[i]);
        return;
      }
      console.log("no script load");
    };
    document.body.appendChild(script);
  };
  runScript(cdnUrls[0]);
}
