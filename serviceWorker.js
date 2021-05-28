const joyPracticesApp = 'joy-practices-app-v1'
const assets = [
  '/',
  '/index.html',
  '/assets/styles/bootstrap-extended.min.css',
  '/assets/styles/bootstrap-timepicker.min.css',
  '/assets/styles/bootstrap.min.css',
  '/assets/styles/bs-stepper.min.css',
  '/assets/styles/colors.min.css',
  '/assets/styles/google-fonts.css',
  '/assets/styles/style.min.css',
  '/assets/styles/styles.css',
  '/assets/js/bootstrap-timepicker.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/bs-stepper.min.js',
  '/assets/js/jquery.js',
  '/assets/js/popper.min.js',
  '/scripts/description.js',
  '/assets/images/acceptance.svg',
  '/assets/images/compassion.svg',
  '/assets/images/daily_joy.svg',
  '/assets/images/favicon.svg',
  '/assets/images/forgiveness.svg',
  '/assets/images/generosity.svg',
  '/assets/images/gratitude.svg',
  '/assets/images/humor.svg',
  '/assets/images/modesty.svg',
  '/assets/images/perspective.svg',
  '/assets/images/coffee1.svg',
  '/assets/audios/acceptance.mp3',
  '/assets/audios/backgroundSound.mp3',
  '/assets/audios/compassion.mp3',
  '/assets/audios/daily_joy.mp3',
  '/assets/audios/forgiveness.mp3',
  '/assets/audios/gratitude.mp3',
  '/assets/audios/humor.mp3',
  '/assets/audios/modesty.mp3',
  '/assets/audios/perspective.mp3'
]

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(joyPracticesApp).then(cache => {
      cache.addAll(assets)
    })
  )
});