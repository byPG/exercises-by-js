const btn = document.querySelector('button');

const click = () => {
    console.log("Podwójne kliknięcie!");
}


btn.addEventListener('dblclick', click);