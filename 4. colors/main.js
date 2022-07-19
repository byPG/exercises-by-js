document.body.style.height = 1000 + 'vh';
let height = 10;
let flag = true;

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
newDiv.style.width = 100;
newDiv.style.position = 'fixed';
newDiv.style.top = 0;
newDiv.style.left = 0;
newDiv.style.right = 0;

const changeHeight = () => {
    if(flag){
    height+=10;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = 'pink';
}
    else{
        height-=10;
        newDiv.style.height = `${height}px`;
        newDiv.style.backgroundColor = 'blue';
    }

    if(height <= 0){
        flag = true;
    }else if(height >= window.innerHeight/2){
        flag = false;
    }
}

window.document.addEventListener('scroll', changeHeight);
