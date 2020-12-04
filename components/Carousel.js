/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  // Creating Elements
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const firstImage = document.createElement("img");
  const secondImage = document.createElement("img");
  const thirdImage = document.createElement("img");
  const fourthImage = document.createElement("img");
  const rightButton = document.createElement("div");
  // Creating DOM Tree/Hierarchy
  carousel.appendChild(leftButton);
  carousel.appendChild(firstImage);
  carousel.appendChild(secondImage);
  carousel.appendChild(thirdImage);
  carousel.appendChild(fourthImage);
  carousel.appendChild(rightButton);
  // Adding classNames
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  // Adding Content
  leftButton.textContent = " < ";
  firstImage.setAttribute(
    "src",
    "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg"
  );
  secondImage.src =
    "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  thirdImage.src =
    "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  fourthImage.src =
    "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  rightButton.textContent = " > ";
  // Adding Event Listeners for the Buttons
  leftButton.addEventListener("click", () => {
    buttonChange(-1);
  });
  rightButton.addEventListener("click", () => {
    buttonChange(1);
  });
  // Return Statement
  console.log(carousel);
  return carousel;
}

// Appending the Carousel Component to the DOM
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(Carousel());

// Handling the Image Carousel
let imageIndex = 1;
showImages(imageIndex);

function buttonChange(number) {
  showImages((imageIndex += number));
}

function currentImage(number) {
  showImages((imageIndex = number));
}

function showImages(number) {
  const images = document.querySelectorAll("img");
  // console.log(images);
  if (number > images.length) {
    imageIndex = 1;
  } else if (number < 1) {
    imageIndex = images.length;
  }
  images.forEach((img) => {
    img.style.display = "none";
  });
  images[imageIndex - 1].style.display = "block";
}
