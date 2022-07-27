// Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });
    });
}
navSlide();

//Gallery
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change of text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./Full/${originalSrc}`;
        const altText = preview.alt;     
    });
});

modal.addEventListener('click', () => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});