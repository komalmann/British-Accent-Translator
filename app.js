var button = document.querySelector("#btn")
var Input = document.querySelector("#input");
var Output = document.querySelector("#output")

var ServerURL = "https://api.funtranslations.com/translate/british.json";

function getTranslatedURL(itext)
{
  return ServerURL+"?"+"text="+itext;
}

function errorHandler(error) {
    console.log("Error Occurred: ", error)
    alert("Something went wrong! Please try again in some time.");
}

button.addEventListener("click",function clickEventHandler()
{
    var Inputtext = Input.value;

    if(Inputtext=="")
    {
        alert("Enter some text first");
    }

    fetch(getTranslatedURL(Inputtext))
    .then(response=>response.json())
    .then(json=>{
        var translatedtxt = json.contents.translated;
        Output.innerText = translatedtxt;
    }).catch(errorHandler);
});