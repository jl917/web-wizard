const domainParts = window.location.hostname.split(".");

function _deleteCookie(name: string, path: string, domain?: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${
    path || "/"
  }${domain ? `; domain=${domain}` : ""}`;
}

function getAllCookies() {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  return cookies.map((cookie) => {
    const [name, ...valueParts] = cookie.split("=");
    return { name, value: valueParts.join("=") };
  });
}

function deleteCookie(name: string) {
  const cookies = getAllCookies();
  for (const cookie of cookies) {
    if (cookie.name === name) {
      _deleteCookie(name, "/");
      _deleteCookie(name, "/", window.location.hostname);
      while (domainParts.length > 1) {
        domainParts.shift();
        _deleteCookie(name, "/", `.${domainParts.join(".")}`);
      }
    }
  }
}

function deleteAllCookie() {
  const cookies = getAllCookies();
  for (const cookie of cookies) {
    _deleteCookie(cookie.name, "/");
    _deleteCookie(cookie.name, "/", window.location.hostname);
    while (domainParts.length > 1) {
      domainParts.shift();
      _deleteCookie(cookie.name, "/", `.${domainParts.join(".")}`);
    }
  }
}

export { getAllCookies, deleteCookie, deleteAllCookie };
