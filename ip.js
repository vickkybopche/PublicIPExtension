fetch("https://freegeoip.app/json/")
.then(data =>data.json())
.then(jokeData=>{
    const jokeText = jokeData.ip;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;
})