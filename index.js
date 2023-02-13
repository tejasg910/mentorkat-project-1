const images = document.querySelectorAll(".carousel img");

let currentIndex = 0;
images[currentIndex].classList.add("active");
function showNextImage() {
  images[currentIndex].classList.remove("active");

  images[currentIndex].style.transform = "translateX(-100%)";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
  setTimeout(function () {
    images[currentIndex].style.transform = "translateX(0)";
  }, 0);
}

setInterval(showNextImage, 3000);
