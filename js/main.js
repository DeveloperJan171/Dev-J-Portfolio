const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));

/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu .nav-link");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

}