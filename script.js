const container = document.querySelector('#container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    chooseNumberOfSquares();
})

const chooseNumberOfSquares = () => {
    const numberOfSquares = prompt('Choose a number between 1 and 100 for squares per side of the grid');

    return numberOfSquares > 100 ? alert('Choose a number between 1 and 100') : alert(numberOfSquares);
}

const divArr = [];

for (let i = 1; i < 256; i++) {
    divArr[i] = document.createElement('div');
    divArr[i].setAttribute('id', `pixel ${i}`);
    divArr[i].setAttribute('class', 'pixel');
    container.appendChild(divArr[i]);
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow';
    })
})