const images = ["0.png", "1.png", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const main = document.querySelector("main");
main.style.backgroundImage = `url(img/${chosenImage})`;

// const bgImage = document.createElement("img");
// bgImage.src = `/img/${chosenImage}`;
// document.body.appendChild(bgImage);
