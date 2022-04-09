const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const slider = document.querySelector('#sizeSlider');
const sliderNumber = document.querySelector('.sliderNumber');
const gridToggle = document.querySelector('.gridToggle');
const pixels = document.querySelectorAll('.pixel');
const body = document.querySelector('.body');

let currentColor = "black";
let currentMode = "color"
let gridDimension = 30;
let gridOn = false;
let mouseDown = false;

draw.onclick = () => {currentMode = 'color'};
erase.onclick = () => {currentMode = 'erase'};
rainbow.onclick = () => {currentMode = 'rainbow'};
clear.onclick = () => resetGrid(gridDimension);
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSlider(e.target.value);
gridToggle.onclick = () => toggleGrid();
body.onmousedown = (e) => {mouseDown = true
};
body.onmouseup = () => {mouseDown = false
};

//Creates the Grid 
function loadGrid(gridDimension) {
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`

    for (let i = 0; i < gridDimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.onmouseover = (e) => changeColor(e);
        if (gridOn) {
            pixel.style.outline = '1px solid black';    

        }   
        grid.appendChild(pixel);
    };
}


function changeColor(e) {
    if (currentMode === 'color' && mouseDown === true) {
        e.target.style.backgroundColor = 'black';
    }
    else if (currentMode === 'erase' && mouseDown === true) {
        e.target.style.backgroundColor = 'lightgoldenrodyellow';
    }
    else if (currentMode === 'rainbow' && mouseDown === true) {
        let rgbColor = randomColor();
        e.target.style.backgroundColor = `rgb${rgbColor}`;
    }
}

function changeSize(size) {
    gridDimension = size;
    resetGrid(gridDimension);
}

function resetGrid(gridDimension) {
    grid.innerHTML = '';
    loadGrid(gridDimension);
}

function updateSlider(size) {
    sliderNumber.innerHTML = `${size}x${size}`;
}


function toggleGrid() {
    loadGrid(gridDimension);
    let pixels = document.querySelectorAll('.pixel');
    if (gridOn === false) {
        pixels.forEach(pixel => {
            pixel.style.outline = '1px solid black';
        });
        gridOn = true;
    }
    else {
        pixels.forEach(pixel => {
            pixel.style.outline = 'none';
        });
        gridOn = false;
    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `(${r},${g},${b})`;
    return rgb;
}

window.onload = () => {
    loadGrid(gridDimension);
}