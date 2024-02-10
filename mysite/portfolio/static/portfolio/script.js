const hamburger = document.querySelector(".hamburguer");

hamburger.addEventListener("click", () => {
    console.log("click");
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
    } else {
        hamburger.classList.add("open");
    }
});

