function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var unit = document.getElementById("unitSelector").value;
  var resultElement = document.getElementById("result");
  var convertedResultElement = document.getElementById("convertedResult");
  var result;

  if (isNaN(temperatureInput)) {
    resultElement.innerText = "Please enter a valid number.";
    convertedResultElement.innerText = "";
    return;
  }

  if (unit === "celsius") {
    result = parseFloat(temperatureInput);
    convertedResultElement.innerText = "Converted temperature: " + result.toFixed(2) + " Celsius";
  } else if (unit === "fahrenheit") {
    result = (parseFloat(temperatureInput) - 32) * (5 / 9);
    convertedResultElement.innerText = "Converted temperature: " + result.toFixed(2) + " Celsius";
  } else if (unit === "kelvin") {
    result = parseFloat(temperatureInput) - 273.15;
    convertedResultElement.innerText = "Converted temperature: " + result.toFixed(2) + " Celsius";
  }
}
