const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const colorBox = document.getElementById("color-box");


redSlider.addEventListener("change", () => {
    colorBox.style.backgroundColor = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
});

greenSlider.addEventListener("change", () => {
    colorBox.style.backgroundColor = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
});

blueSlider.addEventListener("change", () => {
    colorBox.style.backgroundColor = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
});