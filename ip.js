fetch("https://freegeoip.app/json/")
.then(data =>data.json())
.then(jokeData=>{
    const Text = jokeData.ip;
    const Element = document.getElementById("element");
    Element.innerHTML = Text;
})