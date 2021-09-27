
let input_text = document.getElementById("text_input");
let output_text = document.getElementById("output");
const btn = document.getElementById("btn-1");
let url="https://api.funtranslations.com/translate/yoda.json";


function getURL(input) {
  return url + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}


 btn.addEventListener('click', ()=>{
  console.log("clicked")
  let text = input_text.value;
  console.log(text)
  fetch(getURL(text))
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let translated_Text = json.contents.translated;
      output_text.innerText = translated_Text;
    })
    .catch(errorHandler);
 })
  