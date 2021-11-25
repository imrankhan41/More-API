const loadQuotes = ()=>{
    fetch("https://api.kanye.rest/")
    .then (res => res.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = data =>{
const quoteElement = document.getElementById("quotes");
quoteElement.innerText = data.quote;

}
