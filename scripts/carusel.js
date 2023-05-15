document.addEventListener("DOMContentLoaded", function () {
    var carouselContainer = document.querySelector(".carousel-container");
    var carouselSlide = document.querySelector(".carousel-slide");
    var carouselImages = document.querySelectorAll(".carousel-image");

    var currentIndex = 0;
    var imageWidth;

    function setSlideWidth() {
        var windowWidth = window.innerWidth;
        if (windowWidth <= 576) {
            imageWidth = carouselContainer.clientWidth + 4;
        } else {
            imageWidth = (carouselContainer.clientWidth + 12) / 3;
        }
    }

    function updateSlide() {
        carouselSlide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        if (currentIndex >= carouselImages.length) {
            currentIndex = 0;
            carouselSlide.style.transition = "none";
            carouselSlide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
            setTimeout(function () {
                carouselSlide.style.transition = "transform 1s ease-in-out";
            }, 0);
        }
    }

    function nextSlide() {
        currentIndex++;
        updateSlide();
    }


    setSlideWidth();


    window.addEventListener("resize", setSlideWidth);

    setInterval(nextSlide, 4000);
});
