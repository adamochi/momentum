const images = [
    "1.png", "25640.jpg", "clouds-1920.png", "untitled.png",
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bkgImage = document.createElement("img");

bkgImage.src = `img/${chosenImage}`;

document.body.appendChild(bkgImage);
// append is at the end, prepend is at the top.