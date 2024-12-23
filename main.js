function toggleMenu (){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
            }

    // Initialize ScrollReveal
    ScrollReveal().reveal('*',{
        duration: 2000,   // Animation duration (in ms)
        distance: '150px',  // Distance the element will move
        origin: 'bottom',  // Direction of the animation (top, right, bottom, left)
        opacity: 0,        // Initial opacity before animation
        scale: 0.9,        // Scale of the element before animation
        reset: true,       // Reset animation when scrolling back up
    });
    document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.getElementById('christmas-animation');

    // Remove the animation after 10 seconds
    setTimeout(() => {
        animationContainer.style.display = 'none';
    }, 10000);
    });

