const joyPracticesApp = "joy-practices-app-v1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(joyPracticesApp).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/perspective/description.html",
        "/perspective/text.html",
        "/modesty/description.html",
        "/modesty/text.html",
        "/humor/description.html",
        "/humor/text.html",
        "/acceptance/description.html",
        "/acceptance/text.html",
        "/forgiveness/description.html",
        "/forgiveness/text.html",
        "/gratitude/description.html",
        "/gratitude/text.html",
        "/compassion/description.html",
        "/compassion/text.html",
        "/generosity/description.html",
        "/daily_joy/description.html",
        "/daily_joy/text.html",
        "/settings.html",
        "/assets/images/acceptance.svg",
        "/assets/images/compassion.svg",
        "/assets/images/daily_joy.svg",
        "/assets/images/favicon.svg",
        "/assets/images/forgiveness.svg",
        "/assets/images/generosity.svg",
        "/assets/images/gratitude.svg",
        "/assets/images/humor.svg",
        "/assets/images/modesty.svg",
        "/assets/images/perspective.svg",
        "/assets/styles/bootstrap-extended.min.css",
        "/assets/styles/bootstrap-timepicker.min.css",
        "/assets/styles/bootstrap.min.css",
        "/assets/styles/bs-stepper.min.css",
        "/assets/styles/colors.min.css",
        "/assets/styles/google-fonts.css",
        "/assets/styles/style.min.css",
        "/assets/styles/styles.css",
        "/assets/js/bootstrap-timepicker.min.js",
        "/assets/js/bootstrap.min.js",
        "/assets/js/bs-stepper.min.js",
        "/assets/js/jquery.js",
        "/assets/js/popper.min.js",
        "/scripts/description.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

// create push notification
self.addEventListener('message', event => {
    // event is an ExtendableMessageEvent object
    // console.log(`The client sent me a message: ${event.data}`);
    self.registration.getNotifications().then(function(notifications) {
      notifications.forEach(function(notification) {
        notification.close();
      });
    });
});
