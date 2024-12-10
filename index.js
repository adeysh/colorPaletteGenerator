const paletteContainer = document.getElementById('paletteContainer');
const color1El = document.getElementById('color1');
const color2El = document.getElementById('color2');
const color3El = document.getElementById('color3');
const color4El = document.getElementById('color4');

const generateColorBtn = document.getElementById('generate_colors_button');
const color1Tag = document.getElementById('color1Tag');
const color2Tag = document.getElementById('color2Tag');
const color3Tag = document.getElementById('color3Tag');
const color4Tag = document.getElementById('color4Tag');
const hexCodeEl = document.querySelectorAll(".hexCode");
console.log(hexCodeEl);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}).join('');

function generateRndColor() {
    const red = getRndInteger(0, 255);
    const green = getRndInteger(0, 255);
    const blue = getRndInteger(0, 255);
    // console.log(red, blue, green);

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);
    // console.log(rgbColor, hexColor);
    return {
        "rgbColor": rgbColor,
        "hexColor": hexColor
    };
}



function addColorsToPalette() {
    const color1 = generateRndColor();
    const color2 = generateRndColor();
    const color3 = generateRndColor();
    const color4 = generateRndColor();

    color1El.style.backgroundColor = color1.rgbColor;
    color2El.style.backgroundColor = color2.rgbColor;
    color3El.style.backgroundColor = color3.rgbColor;
    color4El.style.backgroundColor = color4.rgbColor;
    console.log(color1);
    color1Tag.innerText = color1.hexColor;
    color2Tag.innerText = color2.hexColor;
    color3Tag.innerText = color3.hexColor;
    color4Tag.innerText = color4.hexColor;
}
// generateRndColor();
// addColorsToPalette();
generateColorBtn.addEventListener("click", addColorsToPalette);


document.addEventListener("DOMContentLoaded", () => {
    addColorsToPalette();
    for (let i = 0; i < hexCodeEl.length; i++) {
        hexCodeEl[i].addEventListener("click", function () {
            console.log(hexCodeEl[i].innerText);
            navigator.clipboard.writeText(hexCodeEl[i].innerText);
            alert("Copied to Clipboard: " + hexCodeEl[i].innerText);
        });
    }
});

