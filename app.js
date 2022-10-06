window.onload = init;

function init() {
  const inputElement = document.querySelector("input");
  const counterElement = document.querySelector("#remaining-chars");

  const maxAllowedChars = inputElement.maxLength;

  function addWarningClass() {
    inputElement.classList.add("warning");
    counterElement.classList.add("warning");
  }

  function removeWarningClass() {
    inputElement.classList.remove("warning");
    counterElement.classList.remove("warning");
  }

  function addGreenClass() {
    inputElement.classList.add("green");
    counterElement.classList.add("green");
  }

  function removeGreenClass() {
    inputElement.classList.remove("green");
    counterElement.classList.remove("green");
  }

  function addErrorClass() {
    inputElement.classList.add("error");
    counterElement.classList.add("error");
  }

  function removeErrorClass() {
    inputElement.classList.remove("error");
    counterElement.classList.remove("error");
  }

  inputElement.addEventListener("input", function () {
    const enteredText = inputElement.value;
    const enteredTextlength = enteredText.length;
    const result = maxAllowedChars - enteredTextlength;

    counterElement.textContent = result;

    if (result === 0) {
      addErrorClass();
    } else if (result <= 10) {
      addWarningClass();
      removeErrorClass();
      removeGreenClass();
    } else if (result <= 59) {
      addGreenClass();
      removeWarningClass();
    } else {
      removeErrorClass();
      removeGreenClass();
      removeWarningClass();
    }
  });
}
