const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.eraser');
let currentColor = "black";
let currentMode = "color"

erase.onclick = () => {currentMode = 'erase'};
draw.onclick = () => {currentMode = 'color'};
clear.onclick = () => resetGrid();

//Creates the Grid 
function loadGrid() {
    for (let i = 0; i < 400; i++) {
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

function resetGrid() {
    grid.innerHTML = '';
    loadGrid();
}

window.onload = () => {
    loadGrid();
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

