const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "cj9qgyiRuHcBzqzMAwxhGQ==QAooVM0ACHJwwkJs";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke()
{
    try {
    jokeEl.innerText = "Generating!";
    btnEl.disabled = true;
    btnEl.innerText = "Loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error Happened, Try Again Later!";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }

    
}


btnEl.addEventListener("click",getJoke);