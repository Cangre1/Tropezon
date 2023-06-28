"use strict";
const $toursMap = document.getElementById("toursMap");
const $contactMap = document.getElementById("contactMap");
const $destinationsMap = document.getElementById("destinationsMap");
const $contactForm = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("contact-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: $contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        $contactForm.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
$contactForm.addEventListener("submit", handleSubmit);

//let headerNav = document.getElementById("header-nav");
//let headerNavAltura = headerNav.offsetHeight;

// MENÚ MOBILE START //
let menuHambur = document.getElementById("menu-hambur");
let menumobile = document.getElementById("menu-mobile");
let menuclose = document.getElementById("menu-close");
let btnWhat = document.getElementById("btn-whatsapp");
let body = document.body;

menuHambur.addEventListener("click", () => {
  menumobile.classList.remove("-translate-x-full");
  body.style.overflow = "hidden"; // Bloquear el scroll
});

menuclose.addEventListener("click", () => {
  menumobile.classList.add("-translate-x-full");
  body.style.overflow = "auto"; // Desbloquear el scroll
});

//Cierre automatico de menu//

let navLinks = document.querySelectorAll("#menu-mobile a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menumobile.classList.add("-translate-x-full");
    body.style.overflow = "auto"; // Desbloquear el scroll
  });
});

// Obtén todos los enlaces con anclas
let anchorLinks = document.querySelectorAll('a[href^="#"]');

// Agrega un controlador de eventos a cada enlace
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    let targetId = link.getAttribute("href"); // Obtiene el ID del objetivo

    if (targetId !== "#") {
      let targetElement = document.querySelector(targetId); // Obtiene el elemento objetivo

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave hacia el objetivo
      }
    }
  });
});
// MENÚ MOBILE END //

//--------------------------------//

// SWIPPER CARACTERISTICAS HOME START //
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container-caracteristicas", {
    // Opciones de Swiper.js
    // Por ejemplo:
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
// SWIPPER CARACTERISTICAS HOME //

//--------------------------------//

//SWIPERS TROPEZON//
var swiperTropezon = new Swiper(".swiper-container-galeria-tropezon", {
  slidesPerView: 1, // Mostrar 1 imagen a la vez por defecto
  loop: true,
  grabcursor: true,
  spaceBetween: 40, // Espacio entre diapositivas en píxeles (ajusta el valor según tu necesidad)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Mostrar 3 imágenes a la vez a partir de 768px
    },
  },
});

// SWIPERS CULTURA ARECO//
var swiperCultura = new Swiper(".swiper-containers-cultura-areco", {
  slidesPerView: 1, // Mostrar 1 imágenes a la vez
  loop: true,
  grabcursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPERS CULTURA ARECO//
var swiperTradicion = new Swiper(".swiper-containers-tradicion-areco", {
  slidesPerView: 1, // Mostrar 1 imágenes a la vez
  loop: true,
  grabcursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPERS GASTRONOMIA ARECO//
var swiperGastronomia = new Swiper(".swiper-containers-gastronomia-areco", {
  slidesPerView: 1, // Mostrar 1 imágenes a la vez
  loop: true,
  grabcursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//VIDEOS//

//Poda//
const bgVideoPoda = document.getElementById("bg-video-poda");
const videoPoda = document.getElementById("video-poda");
const playButtonPoda = document.getElementById("play-button-poda");

// Agrega un evento de clic al botón de reproducción
playButtonPoda.addEventListener("click", function (e) {
  e.preventDefault();
  // Oculta el elemento del fondo del video
  bgVideoPoda.classList.add("hidden");
  // Muestra el elemento del video
  videoPoda.classList.remove("hidden");
  // Reproduce automáticamente el video
  videoPoda.querySelector("iframe").src += "?autoplay=1";
});

//Caseari//
const bgVideoCuentos = document.getElementById("bg-video-cuentos");
const videoCuentos = document.getElementById("video-cuentos");
const playButtonCuentos = document.getElementById("play-button-cuentos");

// Agrega un evento de clic al botón de reproducción
playButtonCuentos.addEventListener("click", function (e) {
  e.preventDefault();
  // Oculta el elemento del fondo del video
  bgVideoCuentos.classList.add("hidden");
  // Muestra el elemento del video
  videoCuentos.classList.remove("hidden");
  // Reproduce automáticamente el video
  videoCuentos.querySelector("iframe").src += "?autoplay=1";
});

//Carruajes//
function toggleVideoCarruajes(e) {
  e.preventDefault();
  var bgVideo = document.getElementById("bg-video-carruajes");
  var videoContainer = document.getElementById("video-carruajes");
  var videoIframe = videoContainer.querySelector("iframe");

  bgVideo.classList.add("hidden");
  videoContainer.classList.remove("hidden");

  // Agregar reproducción automática al video
  var videoUrl = videoIframe.src;
  videoIframe.src = videoUrl + "&autoplay=1";
}

var bgVideoCarruajes = document.getElementById("bg-video-carruajes");
bgVideoCarruajes.addEventListener("click", toggleVideoCarruajes);

//Lanzamiento//
function toggleVideoLanzamiento(e) {
  e.preventDefault();
  var bgVideo = document.getElementById("bg-video-lanzamiento");
  var videoContainer = document.getElementById("video-lanzamiento");
  var videoIframe = videoContainer.querySelector("iframe");

  bgVideo.classList.add("hidden");
  videoContainer.classList.remove("hidden");

  // Agregar reproducción automática al video
  var videoUrl = videoIframe.src;
  videoIframe.src = videoUrl + "&autoplay=1";
}

var bgVideoLanzamiento = document.getElementById("bg-video-lanzamiento");
bgVideoLanzamiento.addEventListener("click", toggleVideoLanzamiento);
