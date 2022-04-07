const mainContainer = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.draw');
const erase = document.querySelector('.erase');

function loadGrid() {
    for (let i = 0; i < 2500; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('div');
        mainContainer.appendChild(newDiv);
    }
}

loadGrid();
const pixels = document.querySelectorAll('.div');

draw.addEventListener('click', (e)=> {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e)=>{
            pixel.classList.add('drawn');
        });
    });
});

clear.addEventListener('click', (e)=> {
    pixels.forEach(pixel => { pixel.classList.remove('drawn')
    });
});

erase.addEventListener('click', (e) => {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e)=>{
            pixel.classList.remove('drawn');
        });
    });
});



