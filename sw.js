// Ancrimo : service worker des notifications de la carte de fidélité.
// Il ne fait QUE recevoir et afficher les notifications : aucune mise en cache, le site fonctionne comme avant.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { texte: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.titre || "Ancrimo", {
    body: d.texte || "",
    tag: d.tag || undefined,
    data: { url: d.url || "/" },
    lang: "fr",
  }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "/", self.location.origin).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((fenetres) => {
    for (const f of fenetres) {
      if (f.url === url && "focus" in f) return f.focus();
    }
    return self.clients.openWindow(url);
  }));
});
