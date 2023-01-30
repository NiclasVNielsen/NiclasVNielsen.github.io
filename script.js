const apiUrl = "https://api.chucknorris.io/jokes/random";

const jokes = [];

let index = 0;

const getJoke = async () => {
    await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => jokes.push(data.value))

    console.log(jokes);

    index = jokes.length - 1;

    showJoke();
}

getJoke();


const jokeZone = document.querySelector("#jokeZone");

const showJoke = () => {
    jokeZone.innerHTML=`${jokes[index]}`;
}


const prev = () => {
    if(index > 0){
        index--
        showJoke()
    }
}

const next = () => {
    if(index < jokes.length - 1){
        index++
        showJoke()
    }
}
