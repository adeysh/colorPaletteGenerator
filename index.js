const paletteContainer = document.getElementById('paletteContainer');
const colorBoxEl = document.querySelectorAll(".colorBox");
const generateColorBtn = document.getElementById('generate_colors_button');
const colorTagEl = document.querySelectorAll(".hexCode");

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

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);

    return {
        "rgbColor": rgbColor,
        "hexColor": hexColor
    };
}

function addColorsToPalette() {
    colorBoxEl.forEach((colorBox, index) => {
        const color = generateRndColor();
        colorBox.style.backgroundColor = color.rgbColor;
        colorTagEl[index].innerText = color.hexColor;
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = 'toast';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

function copyText(event) {
    if (event.target.classList.contains("hexCode")) {
        try {
            navigator.clipboard.writeText(event.target.innerText);
            showToast(`Copied: ${event.target.innerText}`);
        } catch (error) {
            showToast("Error Copying to Clipboard!");
        }
    }
}

generateColorBtn.addEventListener("click", addColorsToPalette);

document.addEventListener("DOMContentLoaded", () => {
    addColorsToPalette();
    paletteContainer.addEventListener("click", copyText);
});

