const hamburger = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
        menu.classList.add("disable")
    } else {
        hamburger.classList.add("open");
        menu.classList.remove("disable")
    }
});

