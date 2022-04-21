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
const buttons = document.querySelectorAll('.button');
const color = document.querySelector('.color-picker');

let currentColor = "black";
let currentMode = "color"
let gridDimension = 30;
let gridOn = false;
let mouseDown = false;

draw.onclick = (e) => {
    currentMode = 'color';
    inactivateButton();
    e.target.classList.add('active');
};
erase.onclick = (e) => {
    currentMode = 'erase'
    inactivateButton();
    e.target.classList.add('active');
};
rainbow.onclick = (e) => {
    currentMode = 'rainbow'
    inactivateButton();
    e.target.classList.add('active');
};
clear.onclick = () => resetGrid(gridDimension);
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSlider(e.target.value);
gridToggle.onclick = () => toggleGrid();
document.body.onmousedown = (e) => {
    mouseDown = true;
    document.body.onmouseup = (e) => {
        mouseDown =false;
    };
};

color.onchange = (e) => {
    currentColor = e.target.value;
    changeColor(e);
}


//Creates the Grid 
function loadGrid(gridDimension) {
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`

    for (let i = 0; i < gridDimension ** 2; i++) {
        let pixel = document.createElement('div');
        if (gridOn) {
            pixel.style.outline = '.1px solid gray';  
        }
        pixel.classList.add('pixel');
        pixel.setAttribute('draggable', 'false');
        pixel.onmouseover = (e) => changeColor(e);
        grid.appendChild(pixel);
    };
}


function changeColor(e) {
    if (currentMode === 'color' && mouseDown === true) {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === 'erase' && mouseDown === true) {
        e.target.style.backgroundColor = 'rgb(225,225,225)';
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
            pixel.style.outline = '.1px solid gray';
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

function inactivateButton() {
    buttons.forEach(button => {
        button.classList.remove('active');
        console.log('hi');
    });
}

window.onload = () => {
    loadGrid(gridDimension);
}