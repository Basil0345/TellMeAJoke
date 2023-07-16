let jokeArray = [];
let jokeObj;

document.getElementById("setup").innerHTML = "Loading...";


let jokes = fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10").then((response) => {
    return response.json();
})



jokes.then((response) => {
    jokeArray = response.jokes;
    jokeObj = jokeArray[Math.floor(Math.random() * 10)]
    document.getElementById("setup").innerHTML = jokeObj.setup;
    document.getElementById("delivery").innerHTML = jokeObj.delivery;
    document.getElementsByClassName("btn")[0].style.display = "flex";
}).catch(error => {
    document.getElementById("setup").innerHTML = "Error Try again later...";
})


function selectRandomJoke() {
    if (jokeArray.length) {
        jokeObj = jokeArray[Math.floor(Math.random() * 10)]
        document.getElementById("setup").innerHTML = jokeObj.setup;
        document.getElementById("delivery").innerHTML = jokeObj.delivery;
    }
}

