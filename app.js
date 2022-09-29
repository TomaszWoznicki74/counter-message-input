window.onload = init;

function init() {

let inputElement = document.querySelector('input');

inputElement.addEventListener('input',function(){
    let enteredText = inputElement.value;
    let counterElement = document.querySelector('#remaining-chars');
    let result = 60 - enteredText.length;

    counterElement.textContent = result;

})

}
