const h1 = document.createElement('h1');
document.body.appendChild(h1);

const changeColorBgc = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x,y)

    if(x%2 == 0 && y%2 == 0){
        document.body.style.backgroundColor = 'red';
        h1.textContent = 'Parzyste x i y'
    } else if( x%3 == 0 && y%3 == 0){
        document.body.style.backgroundColor = 'blue';
        h1.textContent = 'Nieparzyste x i y'
    } else{
        document.body.style.backgroundColor = 'green';
        h1.textContent = 'Albo x albo y jest parzyste'
    }
}

window.addEventListener('click', changeColorBgc)