// wzór na procent składany - capital * Math.pow( (1 + (0.04/12)), (12*5) );
const inputCapital = document.getElementById("capital");
const inputRate = document.getElementById("rate");
const inputN = document.getElementById("n");
const inputYears = document.getElementById("num-years");
const inputResult = document.getElementById("result-value");
const btn = document.getElementById("calculate");

//console.log(Math.floor(finalMoney)); // zaokrąglenie w dół, Math.ceil() - zaokrąglenie w górę

function calculateCompoundUnterest(capital, rate, n, t){
    return capital * Math.pow((1 + (rate/n)), n * t);
}

btn.addEventListener('click', function(){
    let capital = inputCapital.value; //kapitał
    let rate = inputRate.value; //%
    let n = inputN.value; //co ile kapitalizacja, 12 co rok
    let t = inputResult.value //na ile lokata

    let result = calculateCompoundUnterest(capital, rate, n, t);
    inputResult.value = result.toFixed(2);

})