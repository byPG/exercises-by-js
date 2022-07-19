const square = document.createElement('div');
document.body.appendChild(square);
let size = 15;
let flag = true;

square.style.width = `${size}px`;
square.style.height = `${size}px`;

const changeSize = () => {
    if(flag){
        square.style.width = `${size++}px`;
        square.style.height =  `${size++}px`;
    }else{
        square.style.width = `${size--}px`;
        square.style.height =  `${size--}px`;
    }

    if(size < 0){
        flag = true;
    }else if(size > window.innerHeight/2) {
        flag = false;
    }
}

window.addEventListener('scroll', changeSize)