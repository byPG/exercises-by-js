const btn = document.querySelector('button');
const liElements = document.querySelectorAll('li');
let size = 10;

const addElements = () => {
    size++;
    for(let i=0; i<= liElements.length; i++){
        liElements[i].style.display = 'block';
        liElements[i].style.fontSize = `${size}px`;
    }
}
btn.addEventListener('click', addElements)