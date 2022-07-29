function currentTime(){
    // console.log(date);
    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

setInterval(currentTime, 1000);