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






// hjælp fra steen
// const baseUrl = "https://icanhazdadjoke.com"
// async function getData(url) {
//     const res = await fetch(url, {
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     console.log(res);

//     console.log(await res.json());

// }
// getData(baseUrl)