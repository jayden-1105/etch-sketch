const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.eraser');
const slider = document.querySelector('#sizeSlider');
const sliderNumber = document.querySelector('.sliderNumber');
const gridToggle = document.querySelector('.gridToggle');
const pixels = document.querySelectorAll('.pixel');

let currentColor = "black";
let currentMode = "color"
let gridDimension = 30;
let gridOn = false;

erase.onclick = () => {currentMode = 'erase'};
draw.onclick = () => {currentMode = 'color'};
clear.onclick = () => resetGrid(gridDimension);
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSlider(e.target.value);
gridToggle.onclick = () => toggleGrid();

//Creates the Grid 
function loadGrid(gridDimension) {
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`

    for (let i = 0; i < gridDimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', changeColor)
        if (gridOn) {
            pixel.style.outline = '1px solid black';
        }
        grid.appendChild(pixel);
    };
}


function changeColor(e) {
    if (currentMode === 'color') {
        e.target.style.backgroundColor = 'black';
    }
    else if (currentMode === 'erase') {
        e.target.style.backgroundColor = 'white';
    }
}

function changeSize(size) {
    gridDimension = size;
    resetGrid(gridDimension);
}

function resetGrid(gridDimension) {
    currentMode = 'color';
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


window.onload = () => {
    loadGrid(gridDimension);
}