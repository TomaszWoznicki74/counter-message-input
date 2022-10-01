window.onload = init;

function init() {
  const inputElement = document.querySelector("input");
  const counterElement = document.querySelector("#remaining-chars");

  const maxAllowedChars = inputElement.maxLength;

  inputElement.addEventListener("input", function () {
    const enteredText = inputElement.value;
    const enteredTextlength = enteredText.length;
    const result = maxAllowedChars - enteredTextlength;

    counterElement.textContent = result;
  });
}
