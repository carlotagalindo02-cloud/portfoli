document.addEventListener("DOMContentLoaded", () => {

    // Formulari contacte
    const form = document.querySelector(".contact-form");
    const successMessage = document.querySelector(".success-message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            form.style.display = "none";
            successMessage.classList.add("show");
        });
    }

    // Menú mòbil
    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Galeries de projectes
    document.querySelectorAll("article").forEach(article => {

        const gallery = article.querySelector(".project-gallery");
        const arrows = article.querySelectorAll(".gallery-arrow");

        if (gallery && arrows.length >= 2) {

            arrows[0].addEventListener("click", () => {
                gallery.scrollBy({
                    left: -gallery.clientWidth,
                    behavior: "smooth"
                });
            });

            arrows[1].addEventListener("click", () => {
                gallery.scrollBy({
                    left: gallery.clientWidth,
                    behavior: "smooth"
                });
            });
        }
    });

    // Botó Llegir més
    document.querySelectorAll(".read-more-btn").forEach(button => {

        button.addEventListener("click", () => {

            const moreText = button.parentElement.querySelector(".more-text");

            if (!moreText) return;

            moreText.classList.toggle("show");
            button.textContent = moreText.classList.contains("show")
                ? "Llegir menys"
                : "Llegir més";
        });
    });

    // Punts PROJECTES
    const grid = document.querySelector(".grid");
    const cards = document.querySelectorAll(".grid article");
    const dots = document.querySelectorAll(".dot");

    if (grid && cards.length && dots.length) {

        grid.addEventListener("scroll", () => {

            const index = Math.round(
                grid.scrollLeft / cards[0].offsetWidth
            );

            dots.forEach(dot => dot.classList.remove("active"));

            if (dots[index]) {
                dots[index].classList.add("active");
            }
        });
    }

    // Punts ESTUDIS
    const services = document.querySelector(".services-content");
    const items = document.querySelectorAll(".services-content .item");
    const serviceDots = document.querySelectorAll(".services-dot");

    if (services && items.length && serviceDots.length) {

        services.addEventListener("scroll", () => {

            const index = Math.round(
                services.scrollLeft / items[0].offsetWidth
            );

            serviceDots.forEach(dot =>
                dot.classList.remove("active")
            );

            if (serviceDots[index]) {
                serviceDots[index].classList.add("active");
            }
        });
    }
    
    document.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
            // Safari i iPhone
            video.webkitEnterFullscreen();
        }
    });
});

});