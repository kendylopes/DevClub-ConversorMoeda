const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const currencyData = {
  real: {name: "Real brasileiro", img: "./assets/real.png", valueToday: "1", locale: "pt-BR",currencyType: "BRL"},
  dolar: { name: "Dólar americano", img: "./assets/dolar.png", valueToday: "5.2",locale: "en-US",currencyType: "USD" },
  euro: { name: "Euro", img: "./assets/euro.png", valueToday: "6.2",locale: "de-DE",currencyType: "EUR" },
  libra: { name: "Libra", img: "./assets/libra.png", valueToday: "7.31", locale: "en-GB",currencyType: "GBP" },
  bitcoin: { name: "Bitcoin", img: "./assets/btc.png", valueToday: "527.502", locale: "en-US",currencyType: "BTC" },
};

function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  const selectedCurrency = currencySelect.value;
  
  currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyData[selectedCurrency].locale, {
    style: "currency",
    currency: currencyData[selectedCurrency].currencyType,
  }).format(inputCurrencyValue / currencyData[selectedCurrency].valueToday);
  
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name"); 
  const currencyImage = document.querySelector(".currency-img");
  const selectedCurrency = currencySelect.value;

  currencyName.innerHTML = currencyData[selectedCurrency].name;
  currencyImage.src = currencyData[selectedCurrency].img;
 
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
