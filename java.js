const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.eraser');
const slider = document.querySelector('#sizeSlider');
const sliderNumber = document.querySelector('.sliderNumber');
let currentColor = "black";
let currentMode = "color"
let gridDimension = 30;

erase.onclick = () => {currentMode = 'erase'};
draw.onclick = () => {currentMode = 'color'};
clear.onclick = () => resetGrid(gridDimension);
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSlider(e.target.value);

//Creates the Grid 
function loadGrid(gridDimension) {
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`

    for (let i = 0; i < gridDimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', changeColor)
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
    // updateSlider(size);
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


window.onload = () => {
    loadGrid(gridDimension);
}




//listner function that will perform a certain action based on currentColor
// function listen() { 
//     if (currentColor === 'black') {
//         pixels.forEach(pixel => {
//             pixel.addEventListener('mouseover', (e) => {
//                 e.target.style.backgroundColor = "black";
//                 //pixel.classList.add('drawn');
//             });
//         });
//     }
//     if (currentColor === 'white') {
//         pixels.forEach(pixel => {
//             pixel.addEventListener('mouseover', (e) => {
//                 e.target.style.backgroundColor = "blue";
//             });
//         });
//     }
// }

