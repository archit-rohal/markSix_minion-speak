var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("Sorry! Something is wrong with the server. Try again after some time")
}
function clickHandeler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText)) //Here getTranslation is first called and the program - flow has shifted upwards to the function
        .then(json => {                 
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

};
btnTranslate.addEventListener("click", clickHandeler)