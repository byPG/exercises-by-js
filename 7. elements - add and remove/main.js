const btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = 'Utwórz elementy';
const btnClear = document.createElement('button');
document.body.appendChild(btnClear);
btnClear.textContent = 'Wyczyść elementy';
const ul = document.createElement('ul');
document.body.appendChild(ul);

let size = 10;
let number = 1;

const createLiElements = () => {
    for(let i = 1; i<10 ;i++){
    const li = document.createElement('li');
    ul.appendChild(li);
    li.style.fontSize = `${size++}px`
    li.textContent = `Element nr ${number++}`;
    }
}
const cleanLiElements = () => {
    ul.textContent= '';
    number = 1;
    size = 10;
}

btn.addEventListener('click', createLiElements);
btnClear.addEventListener('click', cleanLiElements);
