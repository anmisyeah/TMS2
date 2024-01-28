let scrollingElement = document.querySelector(".header");
function handleScroll() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) scrollingElement.classList.add("scrolled");
    else scrollingElement.classList.remove("scrolled");
}
window.addEventListener("scroll", handleScroll);
let burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(this);
    document.querySelector(".header__nav").classList.toggle("open");
});
let headerLinks = document.querySelectorAll(".header__link");
headerLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Закрываем меню
        burgerButton.classList.remove("active");
        document.querySelector(".header__nav").classList.remove("open");
    });
});
var swiper = new Swiper(".sliderSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
console.log("123");

//# sourceMappingURL=index.09d9d7db.js.map
