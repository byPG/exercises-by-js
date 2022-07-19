const h1 = document.querySelector('h1');

let red = 100;
let green = 100;
let blue = 100;

const changeColors = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    h1.textContent = `${e.clientX}, ${e.clientY}`;
    
    red = e.clientX * 0.3;
    green = e.clientX/e.clientY * 0.1;
    blue = e.clientX*0.6;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(x,y)
}


window.addEventListener('mousemove', changeColors)