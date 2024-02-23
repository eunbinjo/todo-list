const images = ["0.png", "1.png", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const body = document.querySelector("body");
body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(img/${chosenImage})`;

// const bgImage = document.createElement("img");
// bgImage.src = `/img/${chosenImage}`;
// document.body.appendChild(bgImage);
