const btn = document.querySelector('button');
const liElements = document.querySelectorAll('li');

let size = 10;

const addElementsTolist = () => {
    size++;
    liElements.forEach(liElement => {
        liElement.style.display= 'block';
        liElement.style.fontSize = `${size}px`;
    })
}

btn.addEventListener('click', addElementsTolist)