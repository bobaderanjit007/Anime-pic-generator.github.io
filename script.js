const btnEl = document.getElementById("btn");
const animeContainerEl = document.getElementById("anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

const url = "https://api.catboys.com/img";

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        animeNameEl.innerHTML = "Updating...";
        animeImgEl.src = "spinner5.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerHTML = data.artist;
        
    } catch (error) {

        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime";
        animeNameEl.innerHTML = "An error happened, please try again!";

        console.log(error);
    }
});