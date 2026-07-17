/* ============================================
   ROYAL KERALA HERITAGE WEDDING INVITATION
   JavaScript — Config, Cinematic Animation & Interactions
   ============================================ */

// ============================================
// CONFIGURATION — Edit all details here
// ============================================
const CONFIG = {
  bride: 'Anjana',
  groom: 'Ashin',
  weddingDate: '2026-08-30T10:00:00',
  venue: {
    name: 'Shri Kunjattukaavu Bagavathy Temple Auditorium',
    address: 'Pukkattupady, Kerala',
    mapsUrl: 'https://www.google.com/maps/search/Shri+Kunjattukaavu+Bagavathy+Temple+Auditorium+Pukkattupady'
  },
  musicUrl: 'wedding-music.mp3',
  musicVolume: 0.15,
  gallery: [],
  description: 'You are cordially invited to celebrate the Royal Kerala wedding of Anjana & Ashin.',
  previewImage: 'preview.jpg'
};

// ============================================
// DOM ELEMENTS
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const cinematicOpening = $('#cinematic-opening');
const mainContent = $('#main-content');
const scrollProgress = $('#scroll-progress');
const musicToggle = $('#music-toggle');
const musicStatus = $('#music-status');
const backToTop = $('#back-to-top');
const jasmineContainer = $('#jasmine-container');
const goldenParticles = $('#golden-particles');
const lightbox = $('#lightbox');
const lightboxImg = $('#lightbox-img');

// ============================================
// CINEMATIC OPENING ANIMATION
// ============================================
function initCinematicOpening() {
  createCinBgParticles();
  createCinPetals();

  var minTime = 1200;
  var start = Date.now();

  window.addEventListener('load', function () {
    var elapsed = Date.now() - start;
    var wait = Math.max(0, minTime - elapsed);
    setTimeout(function () {
      runCinematicSequence();
    }, wait);
  });
}

function runCinematicSequence() {
  var imageWrapper = $('#cin-image-wrapper');
  var families = $('#cin-families');
  var invite = $('#cin-invite');
  var weddingOf = $('#cin-wedding-of');
  var names = $('#cin-names');
  var heart = $('#cin-heart');
  var btnOpen = $('#cin-btn-open');

  // 0.4s: Image wrapper appears with scale animation
  setTimeout(function () {
    imageWrapper.classList.add('active');
  }, 400);

  // 0.8s: Sparkles appear around image
  setTimeout(function () {
    createImageSparkles();
  }, 800);

  // 1.2s: Text reveals
  setTimeout(function () { families.classList.add('visible'); }, 1200);
  setTimeout(function () { invite.classList.add('visible'); }, 1600);
  setTimeout(function () { weddingOf.classList.add('visible'); }, 2000);

  // 2.5s: Names + heart
  setTimeout(function () {
    names.classList.add('visible');
    heart.classList.add('visible');
  }, 2500);

  // 3s: Button
  setTimeout(function () { btnOpen.classList.add('visible'); }, 3000);
}

// ============================================
// IMAGE SPARKLES
// ============================================
function createImageSparkles() {
  var container = document.getElementById('cin-image-sparkles');
  if (!container) return;
  for (var i = 0; i < 12; i++) {
    var sparkle = document.createElement('div');
    sparkle.classList.add('cin-img-sparkle');
    sparkle.style.left = (Math.random() * 80 + 10) + '%';
    sparkle.style.top = (Math.random() * 80 + 10) + '%';
    sparkle.style.animationDelay = (Math.random() * 3) + 's';
    sparkle.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    var size = Math.random() * 2 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    container.appendChild(sparkle);
  }
}

// ============================================
// CINEMATIC BACKGROUND PARTICLES
// ============================================
function createCinBgParticles() {
  var container = document.getElementById('cin-bg-particles');
  if (!container) return;
  for (var i = 0; i < 25; i++) {
    var p = document.createElement('div');
    p.classList.add('cin-particle');
    var size = Math.random() * 2 + 1;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-10px';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.animationDuration = Math.random() * 8 + 10 + 's';
    container.appendChild(p);
  }
}

// ============================================
// CINEMATIC FLOATING PETALS
// ============================================
function createCinPetals() {
  var container = document.getElementById('cin-petals-container');
  if (!container) return;
  for (var i = 0; i < 18; i++) {
    var petal = document.createElement('div');
    petal.classList.add('cin-petal');
    var size = Math.random() * 4 + 4;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.4 + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 12 + 's';
    petal.style.animationDuration = Math.random() * 8 + 10 + 's';
    container.appendChild(petal);
  }
}

// ============================================
// MASTER INIT AFTER CINEMATIC
// ============================================
function initAll() {
  createJasminePetals();
  createGoldenDust();
  createHeroPetals();
  createCouplePetals();
  initReveal();
  initCountdown();
  initScrollProgress();
  initBackToTop();
  initGallery();
  initLightbox();
  initScrollIndicator();
}

function initScrollIndicator() {
  var si = document.querySelector('.scroll-indicator');
  if (!si) return;
  si.addEventListener('click', function() {
    var about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  });
}

// ============================================
// OPEN INVITATION (from cinematic)
// ============================================
function initCinOpenButton() {
  var btnOpen = $('#cin-btn-open');
  if (!btnOpen) return;

  btnOpen.addEventListener('click', function (e) {
    // Ripple effect
    var ripple = document.createElement('span');
    ripple.classList.add('btn-ripple');
    var rect = btnOpen.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    btnOpen.appendChild(ripple);
    setTimeout(function () { ripple.remove(); }, 600);

    // Fade out cinematic, show main content
    setTimeout(function () {
      cinematicOpening.classList.add('fade-out');
      mainContent.classList.remove('hidden');
      mainContent.classList.add('visible');

      setTimeout(function () {
        cinematicOpening.style.display = 'none';
        initAll();
      }, 1200);
    }, 300);
  });
}

// ============================================
// JASMINE PETALS
// ============================================
function createJasminePetals() {
  var count = window.innerWidth < 768 ? 12 : 25;
  for (var i = 0; i < count; i++) {
    var petal = document.createElement('div');
    petal.classList.add('jasmine-petal');
    var size = Math.random() * 6 + 6;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.4 + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 20 + 's';
    petal.style.animationDuration = Math.random() * 12 + 16 + 's';
    jasmineContainer.appendChild(petal);
  }
}

// ============================================
// GOLDEN DUST
// ============================================
function createGoldenDust() {
  var count = window.innerWidth < 768 ? 8 : 18;
  for (var i = 0; i < count; i++) {
    var p = document.createElement('div');
    p.classList.add('gold-particle');
    var size = Math.random() * 2 + 1;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.animationDuration = Math.random() * 10 + 12 + 's';
    goldenParticles.appendChild(p);
  }
}

// ============================================
// HERO PETALS
// ============================================
function createHeroPetals() {
  var container = document.getElementById('hero-petals');
  if (!container) return;
  var count = window.innerWidth < 768 ? 8 : 16;
  for (var i = 0; i < count; i++) {
    var petal = document.createElement('div');
    petal.classList.add('hero-petal');
    var size = Math.random() * 4 + 4;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.4 + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 12 + 's';
    petal.style.animationDuration = Math.random() * 6 + 8 + 's';
    container.appendChild(petal);
  }
}

// ============================================
// COUPLE PETALS
// ============================================
function createCouplePetals() {
  var container = document.querySelector('.couple-petals');
  if (!container) return;
  for (var i = 0; i < 10; i++) {
    var petal = document.createElement('div');
    petal.classList.add('couple-petal');
    var size = Math.random() * 3 + 3;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.3 + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.bottom = Math.random() * 30 + '%';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.animationDuration = Math.random() * 5 + 6 + 's';
    container.appendChild(petal);
  }
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
        setTimeout(function () { entry.target.classList.add('revealed'); }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(function (el) { observer.observe(el); });
}

// ============================================
// COUNTDOWN
// ============================================
function initCountdown() {
  var target = new Date(CONFIG.weddingDate).getTime();
  function update() {
    var diff = target - Date.now();
    if (diff <= 0) {
      ['countdown-days','hero-days'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent='0'; });
      ['countdown-hours','hero-hours'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent='00'; });
      ['countdown-minutes','hero-minutes'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent='00'; });
      ['countdown-seconds','hero-seconds'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent='00'; });
      return;
    }
    var days = Math.floor(diff / 86400000); diff %= 86400000;
    var hours = Math.floor(diff / 3600000); diff %= 3600000;
    var minutes = Math.floor(diff / 60000); diff %= 60000;
    var seconds = Math.floor(diff / 1000);
    var daysStr = String(days);
    var hoursStr = String(hours).padStart(2, '0');
    var minutesStr = String(minutes).padStart(2, '0');
    var secondsStr = String(seconds).padStart(2, '0');
    ['countdown-days','hero-days'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent=daysStr; });
    ['countdown-hours','hero-hours'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent=hoursStr; });
    ['countdown-minutes','hero-minutes'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent=minutesStr; });
    ['countdown-seconds','hero-seconds'].forEach(function(id){ var el=$('#'+id); if(el) el.textContent=secondsStr; });
  }
  update();
  setInterval(update, 1000);
}

// ============================================
// SCROLL PROGRESS
// ============================================
function initScrollProgress() {
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  }, { passive: true });
}

// ============================================
// MUSIC
// ============================================
var audio = null;
var playing = false;

function initMusic() {
  musicToggle.addEventListener('click', function () {
    if (!CONFIG.musicUrl) { playing = !playing; updateMusicUI(); return; }
    if (!audio) { audio = new Audio(CONFIG.musicUrl); audio.loop = true; audio.volume = CONFIG.musicVolume; }
    if (playing) { audio.pause(); playing = false; updateMusicUI(); }
    else { audio.play().then(function () { playing = true; updateMusicUI(); }).catch(function () { playing = false; updateMusicUI(); }); }
  });
}

function updateMusicUI() {
  if (playing) { musicToggle.classList.add('playing'); musicStatus.textContent = 'Pause'; }
  else { musicToggle.classList.remove('playing'); musicStatus.textContent = 'Play'; }
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  }, { passive: true });
  backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

// ============================================
// GALLERY
// ============================================
function initGallery() {
  if (!CONFIG.gallery || CONFIG.gallery.length === 0) return;
  $$('.gallery-placeholder').forEach(function (ph, i) {
    if (i < CONFIG.gallery.length && CONFIG.gallery[i]) {
      var frame = ph.closest('.gallery-frame');
      if (frame) {
        var img = document.createElement('img');
        img.src = CONFIG.gallery[i];
        img.alt = 'Wedding photo ' + (i + 1);
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0;';
        frame.appendChild(img);
        ph.style.display = 'none';
      }
    }
  });
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
  if (!lightbox) return;
  $$('.gallery-frame').forEach(function (frame) {
    frame.addEventListener('click', function () {
      var img = frame.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// DYNAMIC META TAGS
// ============================================
function updateMeta() {
  var title = CONFIG.bride + ' & ' + CONFIG.groom + ' | Kerala Wedding Invitation';
  document.title = '\uD83D\uDC8D ' + title;
  var setMeta = function (sel, attr, val) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };
  setMeta('meta[name="description"]', 'content', CONFIG.description);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', CONFIG.description);
  setMeta('meta[property="og:image"]', 'content', CONFIG.previewImage);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', CONFIG.description);
  setMeta('meta[name="twitter:image"]', 'content', CONFIG.previewImage);
}

// ============================================
// INIT
// ============================================
updateMeta();
initMusic();
initCinematicOpening();
initCinOpenButton();
