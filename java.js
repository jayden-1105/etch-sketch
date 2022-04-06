mainContainer = document.querySelector('.main');

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('div');
    mainContainer.appendChild(newDiv);
}