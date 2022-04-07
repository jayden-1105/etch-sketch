mainContainer = document.querySelector('.grid');

for (let i = 0; i < 2500; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('div');
    mainContainer.appendChild(newDiv);
}



const pixels = document.querySelectorAll('.div');


pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', (e)=>{
        pixel.classList.add('drawn');
    });
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', (e)=> {
    pixels.forEach(pixel => { pixel.classList.remove('drawn')
    });
});
