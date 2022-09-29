window.onload = init;

function init() {
  let inputElement = document.querySelector("input");
  let counterElement = document.querySelector("#remaining-chars");

  let maxAllowedChars = inputElement.maxLength;

  inputElement.addEventListener("input", function () {
    let enteredText = inputElement.value;
    let enteredTextlength = enteredText.length;
    let result = maxAllowedChars - enteredTextlength;

    counterElement.textContent = result;
  });
}
