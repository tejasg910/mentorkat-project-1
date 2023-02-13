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

const courseItemsContainer = document.getElementById("courseitem");
const rightButton = document.getElementById("right-button");
const leftButton = document.getElementById("left-button");

rightButton.addEventListener("click", () => {
  courseItemsContainer.scroll({
    left: (courseItemsContainer.scrollLeft += 200),
    behavior: "smooth",
  });
});

leftButton.addEventListener("click", () => {
  courseItemsContainer.scroll({
    left: (courseItemsContainer.scrollLeft -= 200),
    behavior: "smooth",
  });
});
