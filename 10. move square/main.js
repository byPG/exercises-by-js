const div = document.querySelector('div');

const inWidth = window.innerWidth;
const inHeight = window.innerHeight;

let drawX = 150;
let drawY = 150;

div.style.left = `${drawX}px`;
div.style.top =  `${drawY}px`;

let insertDivX;
let insertDivY;

let drawActive = false;

const mDown = (e) => {
    div.style.backgroundColor = 'grey';
    drawActive = !drawActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);
};

const mMove = (e) => {
    if(drawActive){
    drawX = e.clientX - insertDivX;
    drawY = e.clientY - insertDivY;
    div.style.left = `${drawX}px`;
    div.style.top =  `${drawY}px`;
    }};

const mUp = () => {
    div.style.backgroundColor = 'black';
    drawActive = !drawActive;
};

div.addEventListener('mousedown', mDown);
div.addEventListener('mouseup', mUp);
div.addEventListener('mousemove', mMove);