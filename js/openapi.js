const display = document.getElementById("display");

function fetchArtworks() {
    fetch("https://api.artic.edu/api/v1/artworks?limit=5")
        .then(response => response.json())
        .then(data => {
            let artworks = data.data;
            display.innerHTML = "";
            artworks.forEach(art => {
                display.innerHTML += `<p>${art.title}</p>`;
            });
        })
        .catch(error => {
            display.innerHTML = "<p>Something went wrong.</p>";
        });
}

function fetchArtists() {
    fetch("https://api.artic.edu/api/v1/agents?limit=5")
        .then(response => response.json())
        .then(data => {
            let artists = data.data;
            display.innerHTML = "";
            artists.forEach(artist => {
                display.innerHTML += `<p>${artist.title}</p>`;
            });
        })
        .catch(error => {
            display.innerHTML = "<p>Something went wrong.</p>";
        })
}
document
    .getElementById("btn-artworks")
    .addEventListener("click", fetchArtworks);

document
    .getElementById("btn-artists")
    .addEventListener("click", fetchArtists);