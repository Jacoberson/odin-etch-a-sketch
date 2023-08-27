const container = document.querySelector('#container');
const button = document.querySelector('button');
const divArr = [];

button.addEventListener('click', () => {
    chooseNumberOfSquares();
})

const chooseNumberOfSquares = () => {
    const numberOfSquares = prompt('Choose a number between 1 and 100 for squares per side of the grid');

    return numberOfSquares > 100 ? alert('Choose a number between 1 and 100') : removeAndDrawGrid(numberOfSquares);
}

const removeAndDrawGrid = numberOfSquares => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 1; i <= numberOfSquares ** 2; i++) {
        divArr[i] = document.createElement('div');
        divArr[i].setAttribute('id', `pixel-${i}`);
        divArr[i].setAttribute('class', 'pixel');
        container.appendChild(divArr[i]);
    }

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'yellow';
        })
    });
}

removeAndDrawGrid(16);





