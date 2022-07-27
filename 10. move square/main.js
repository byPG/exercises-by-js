const square = document.querySelector("div");

let x = 100;
let y = 100;

square.style.top = `${y}px`;
square.style.left = `${x}px`;

let inSquareX;
let inSquareY;

let drawActive = false;

const squareDown = (e) => {
    square.style.backgroundColor = 'grey';
    drawActive = true;
    inSquareX = e.offsetX;
    inSquareY = e.offsetY;
};

const squareClicked = (e) => {
    if(drawActive){
        x = e.clientX - inSquareY;
        y = e.clientY - inSquareX;
        square.style.top = `${y}px`;
        square.style.left = `${x}px`;
    }
};

const squareUp = () => {
    square.style.backgroundColor = 'black';
    drawActive = false;
};

square.addEventListener('mousedown', squareDown);
square.addEventListener('mousemove', squareClicked);
square.addEventListener('mouseup', squareUp);