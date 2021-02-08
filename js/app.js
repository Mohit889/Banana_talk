var inputText = document.querySelector("#txtInput");
var buttonTranslate = document.querySelector("#btnTranslate");
var outputText = document.querySelector("#outputDiv");
var serverurl = "https://api.funtranslations.com/translate/minion.json";


function getTranslatedURL(inputText){
    return serverurl + "?" + "text=" + inputText.value;
}

function errorHandler(error){
    console.log("Error occurred",error);
}
buttonTranslate.addEventListener("click",function ClickEventHandler(){
    //console.log("Clicked");
    //console.log(inputText.value);
    
    //outputText.innerText = inputText.value;
    
    fetch(getTranslatedURL(inputText))
        .then(response => (response.json()))
        .then(json => outputText.innerText= (json.contents.translated))
        .catch(errorHandler);
});
