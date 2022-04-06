mainContainer = document.querySelector('.main');

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
