
// ref video: https://www.youtube.com/watch?v=9HcxHDS2w1s 
// tyvstjålet lol


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector('[data-slides]');

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    activeSlide.removeAttribute("data-active");
    slides.children[newIndex].setAttribute("data-active", "true");
  });
});

// det her er til burgeren :P //


// Vælg elementer med klasserne 'hamburger' og 'mobile-nav'
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

// Tilføj en klik-eventlistener til 'hamburger'-elementet
menu_btn.addEventListener('click', function(){
    // Skift tilstanden af klassen 'is-active' på 'hamburger'-elementet
    menu_btn.classList.toggle('is-active');
    
    // Skift tilstanden af klassen 'is-active' på 'mobile-nav'-elementet
    mobile_menu.classList.toggle('is-active');
});

// Variabel til at gemme den nuværende sektion (den initialiseres som en tom streng)
let currentSection = "";
