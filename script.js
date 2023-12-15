
/* *** Det her er til blog billede karousellen **
**********references *******************
 video: https://www.youtube.com/watch?v=9HcxHDS2w1s  */


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
 
 
 
 
 // ------det her er til burgeren ------ //
 
 /* ******* references  ************
 JavaScript 1 - ANKT - 23-08-2023
 og Nippon UX / UI gruppeprojekt */
 
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
 
 
 // Tilføj en klik-eventlistener til lukning af mobilmenuen ved klik udenfor
 document.addEventListener('click', function (event) {
     const isMenuOpen = mobile_menu.classList.contains('is-active');
     const isClickInsideMenu = mobile_menu.contains(event.target);
     const isClickOnHamburger = menu_btn.contains(event.target);
 
     if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
         // Luk mobilmenuen
         menu_btn.classList.remove('is-active');
         mobile_menu.classList.remove('is-active');
     }
 });
 
 
 
 
 
 
 /* ------- det her er til drop down --------------- 
 *************** references ***************
 w3schools: https://www.w3schools.com/howto/howto_js_dropdown.asp 
 */
 
   // Function to toggle dropdown visibility
     function toggleDropdown(dropdownId) {
         var dropdown = document.getElementById(dropdownId);
         if (dropdown) {
             dropdown.classList.toggle("show");
         }
     }
 
     // Close the dropdown if the user clicks outside of it
     window.onclick = function(event) {
         if (!event.target.matches('.dropbtn')) {
             var dropdowns = document.getElementsByClassName("dropdown-content");
             var i;
             for (i = 0; i < dropdowns.length; i++) {
                 var openDropdown = dropdowns[i];
                 if (openDropdown.classList.contains('show')) {
                     openDropdown.classList.remove('show');
                 }
             }
         }
     }
 
 
 
 
 
 
 
 
 
 
 
 
 // ------- det her er til billedkunst med de to elever man kan hover på //
 // men det virker ikke....
 
 /* ******* references  ************
 Programmering 8: - ANKT - 25-10-2023 + det kode vi øvede den dag 
 
 document.addEventListener("DOMContentLoaded", function() {
 
 
 // her er til den første elev
 // først en variable med lydfilen
 const audio1 = new Audio('comic5-25269.mp3'); 
 // så en som henter info om hvilket div der skal lyd til 
 const divElement1 = document.getElementById("#kunstElevEn");
 
 
 // en funktion som siger at når musen er i diven skal lyden afspilles
     divElement1.addEventListener("mouseenter", function() {
         audio1.play();
     });
 
 
 // og en funktion som siger hvis musen forlader diven skal lyden stoppes
     divElement1.addEventListener("mouseleave", function() {
         audio1.pause();
         audio1.currentTime = 0; /* her gør vi så lyden starter fra begyndelsen,
         hver gang musen kommer ind på billedet 
     });
 
 /* her er til den næste elev - vi gør bare det samme som ovenover,
 men variablerne audio1 og divElement1 bliver til audio2 etc. 
 
 
 const audio2 = new Audio('comic5-25269.mp3'); 
 const divElement2 = document.getElementById("#kunstElevTo");
 
 
 // en funktion som siger at når musen er i diven skal lyden afspilles
     divElement2.addEventListener("mouseenter", function() {
         audio2.play();
     });
 
 
 // og en funktion som siger hvis musen forlader diven skal lyden stoppes
     divElement2.addEventListener("mouseleave", function() {
         audio2.pause();
         audio2.currentTime = 0; 
     });
 
 
   }); */
 