const btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = 'Create new elements - click!';
const ul = document.createElement('ul');
document.body.appendChild(ul);

let number = 1;

const addNewElement = () => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${number}`;

    if(number%3 === 0){
        li.style.fontSize = 40 + 'px';}
    number+=2;
}

btn.addEventListener('click', addNewElement)