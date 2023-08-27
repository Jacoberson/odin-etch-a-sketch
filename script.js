const container = document.querySelector('#container');

const divArr = [];

for (let i = 1; i <= 256; i++) {
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