startApp();

async function startApp(){ //zawsze gdy używamy 'await' w funkcji musimy dodać 'async'
    const apiUrl = "https://api.nbp.pl/api/exchangerates/tables/a?format=json";
    const response = await fetch(apiUrl); //pobranie danych z serwera; działa asynchronicznie, działa w tle; 'await' wskazuje JavaScriptowi aby poczekał aż wykona się funkcja fetch (czekamy na odpowiedź serwera)
    const data = await response.json(); //przerobiony json na faktyczny obiekt JavaScript
    //console.log(data);

    processData(data[0]);
}

function processData(data){
    console.log(data);
    const code = data.effectiveDate;
    const table = data.table; // nazwa tabela A
    const tableNum = data.no;
    const ratesArr = data.rates;


    //pobranie elementów z html
    const dataTableDiv = document.getElementById("data-table");
    document.getElementById("date").innerHTML = tableNum;

    ratesArr.forEach(function(el){
        // console.log(el);
        const code = el.code; //USD
        const currency = el.currency; //dolar amerykański
        const price = el.mid; // 3.98

        addRateContent(code, currency, price, dataTableDiv);
    });
}

function addRateContent(code, currency, price, dataTableDiv){
    const el = document.createElement("div");
    el.classList.add("rate");
    el.innerHTML = `
        <div> ${code}</div>
        <div> ${currency}</div>
        <div> ${price} zł</div>
    `;

    dataTableDiv.append(el);
}

