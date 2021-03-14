const hamburgerIcon = document.querySelector(".navigation__icon img");
const navigation = document.querySelector(".navigation__nav");
const img = document.querySelector(".navigation__icon img");
const preBTN = document.getElementById("preBtn");
const nextBTN = document.getElementById("nextBtn");
const carousel = document.getElementById("carouselImage");
const carouselQuality = document.getElementById("carouselImageQuality");

const carouselImageArray = [
  "/Assets/images/carousel/bee1-mobile.jpg",
  "/Assets/images/carousel/beekeeper1-mobile.jpg",
  "/Assets/images/carousel/beekeeper2-mobile.jpg",
  "/Assets/images/carousel/honey1-mobil.jpg",
  "/Assets/images/carousel/honey2-mobile.jpg",
];
let counter = 0;

//opening hamburger menu

hamburgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("show");
  img.classList.toggle("rotate");
});

// carousel previous button
preBTN.addEventListener("click", () => {
  if (counter === 0) {
    counter = 5;
  }
  counter--;
  carousel.setAttribute("src", carouselImageArray[counter]);
});

// carousel Next button
nextBTN.addEventListener("click", () => {
  if (counter === 4) {
    counter = -1;
  }
  counter++;
  carousel.setAttribute("src", carouselImageArray[counter]);
});
