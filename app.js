const jokeElement = document.querySelector(".joke")


fetch("https://icanhazdadjoke.com", {
    headers: {
        Accept: "application/json"
    }
})
    .then(response => {
        console.log(response);

        if (!response.ok) {
            throw new Error("Kunne ikke hente data")
        }

        return response.json()


    }).then(data => {
        console.log(data);
        jokeElement.innerHTML = data.joke
    })