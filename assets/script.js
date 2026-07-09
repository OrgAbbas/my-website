// Animation on page load

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-text");
    const profile = document.querySelector(".profile");


    hero.classList.add("show");

    setTimeout(() => {

        profile.classList.add("show");

    }, 300);

});




// Scroll animation

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .about-box"
);



const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });



}, {

    threshold: 0.2

});




elements.forEach(element => {

    observer.observe(element);

});