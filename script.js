const container = document.querySelector('#container');

const divArr = [];

for (let i = 1; i <= 256; i++) {
    divArr[i] = document.createElement('div');
    divArr[i].setAttribute('id', `div ${i}`);
    divArr[i].setAttribute('class', 'inner-div');
    container.appendChild(divArr[i]);
}