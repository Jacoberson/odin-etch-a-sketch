const container = document.querySelector('#container');
const button = document.querySelector('button');
const colArr = [];
const rowArr = [];

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

    for (let i = 1; i <= numberOfSquares; i++) {
            colArr[i] = document.createElement('div');
            colArr[i].setAttribute('id', `col-${i}`)
            colArr[i].setAttribute('class', 'pixel col');
            container.appendChild(colArr[i]);
        for (let j = 1; j <= numberOfSquares; j++) {
            rowArr[j] = document.createElement('div');
            rowArr[j].setAttribute('id', `row-${i}-col-${j}`)
            rowArr[j].setAttribute('class', 'pixel row');
            document.getElementById(`col-${i}`).appendChild(rowArr[j]);
        }
    }

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'yellow';
        })
    });
}

removeAndDrawGrid(16);





