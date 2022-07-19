const btn = document.querySelector('button');
let number = 1;

const createDiv = () => {
    console.log('dziala');

    const newElement = document.createElement('div');
    document.body.appendChild(newElement);
    newElement.textContent = `${number}`;
    if(number%5 === 0){
        newElement.classList.add('circle');
    }
    number++;
}
btn.addEventListener('click', createDiv)