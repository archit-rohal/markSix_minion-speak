var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
function clickHandeler(){
    outputDiv.innerText = "blahblahblehbleh " + txtInput.value;
};
btnTranslate.addEventListener("click", clickHandeler)