const imageArray = [
  "./assets/randomPics/FirstTed.JPG",
  "./assets/randomPics/HappyTed.JPG",
  "./assets/randomPics/JetpackTed.JPG",
  "./assets/randomPics/SleepyTed.JPG",
  "./assets/randomPics/StretchTed.JPG",
  "./assets/randomPics/TeefTed.JPG",
];

const image = document.getElementById("rando");

const button = document.querySelector("button");

window.onload = () => getNextPicture(imageArray);

button.addEventListener("click", () => getNextPicture(imageArray));

let currentIndex = 0;

function getNextPicture() {
  document.getElementById("rando").src = imageArray[currentIndex];
  currentIndex++;
  if (currentIndex === imageArray.length) {
    currentIndex = 0;
  }
}

// CODE FOR RANDOM PICTURES FROM ARRAY

// window.onload = () => generateRandomPicture(imageArray);

// button.addEventListener("click", () => generateRandomPicture(imageArray));

// function generateRandomPicture(array) {
//   let randomNum = Math.floor(Math.random() * array.length);
//   image.setAttribute("src", array[randomNum]);
// }
