const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right"
})
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".header_content .section_descrption", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1500,
})
ScrollReveal().reveal(".header_stats", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left"
})
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".about_content .section_descrption", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
})
ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".program_card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".service_image img", {
    ...scrollRevealOption,
    origin: "right"
})
ScrollReveal().reveal(".service_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".service_list li", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500
})
ScrollReveal().reveal(".service_btn", {
    ...scrollRevealOption,
    delay: 2500,
})

const swiper = new swiper(".swiper",{
    loop:true  
  })