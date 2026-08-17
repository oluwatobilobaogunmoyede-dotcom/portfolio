// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu-toggle");

const links = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    links.classList.toggle("open");

});


// Close mobile menu after clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            links.classList.remove("open");

        });

    });


// ===============================
// DARK / LIGHT MODE
// ===============================

const theme = document.querySelector(".theme-toggle");


theme.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        theme.textContent = "☾";

    } else {

        theme.textContent = "☼";

    }

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        if (
            window.scrollY >=
            section.offsetTop - 180
        ) {

            current = section.id;

        }

    });


    navItems.forEach(item => {

        item.classList.toggle(

            "active",

            item.getAttribute("href") ===
            "#" + current

        );

    });

});


// ===============================
// MOUSE GLOW EFFECT
// ===============================

const glow =
    document.querySelector(".cursor-glow");


window.addEventListener("pointermove", event => {

    glow.style.left =
        event.clientX + "px";

    glow.style.top =
        event.clientY + "px";

});