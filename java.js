const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.eraser');

function loadGrid() {
    for (let i = 0; i < 400; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        grid.appendChild(pixel);
    }
}

loadGrid();
const pixels = document.querySelectorAll('.pixel');

function listen() {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            pixel.classList.add('drawn');
        });
    });
}

listen();