/* ===========================
   AOS INITIALIZE
=========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ===========================
   TYPING EFFECT
=========================== */

const words = [
    "Python Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Open to Internships"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    } else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex === words.length)
            wordIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   PROGRESS BAR
=========================== */

window.addEventListener("scroll", () => {

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.background = "#161B22";
        nav.style.padding = "20px";
        nav.style.borderRadius = "12px";
        nav.style.gap = "20px";
    }

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   CONTACT FORM
=========================== */

/*
EmailJS Setup

1. https://www.emailjs.com

2. Create Account

3. Email Service Add

4. Email Template

5. Replace values below

*/

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();
});

/* ===========================
   IMAGE HOVER
=========================== */

const profile =
document.querySelector(".image-box img");

profile.addEventListener("mousemove", () => {

profile.style.transform =
"scale(1.05)";

});

profile.addEventListener("mouseleave", () => {

profile.style.transform =
"scale(1)";

});

/* ===========================
   YEAR AUTO UPDATE
=========================== */

const year =
new Date().getFullYear();

const copy =
document.querySelector(".copyright");

if(copy){

copy.innerHTML =
`© ${year} Sameer Kushwaha. All Rights Reserved.`;

}

/* ===========================
   END
=========================== */