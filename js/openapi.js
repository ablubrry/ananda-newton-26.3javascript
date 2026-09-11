const display = document.getElementById("display");

function fetchArtworks() {
    fetch("https://api.artic.edu/api/v1/artworks?limit=5")
        .then(response => response.json())
        .then(data => {
            let artworks = data.data;
            // Build the HTML string first, then update DOM once
            display.innerHTML = artworks
                .map(art => `<p>${art.title || "Untitled"}</p>`)
                .join("");
        })
        .catch(error => {
            console.error("Artworks fetch error:", error);
            display.innerHTML = "<p>Something went wrong loading artworks.</p>";
        });
}

function fetchArtists() {
    fetch("https://api.artic.edu/api/v1/agents?limit=5")
        .then(response => response.json())
        .then(data => {
            let artists = data.data;
            // Use artist.title with artist.name fallback in case records vary
            display.innerHTML = artists
                .map(artist => `<p>${artist.title || artist.name || "Unknown Artist"}</p>`)
                .join("");
        })
        .catch(error => {
            console.error("Artists fetch error:", error);
            display.innerHTML = "<p>Something went wrong loading artists.</p>";
        });
}

document
    .getElementById("btn-artworks")
    .addEventListener("click", fetchArtworks);

document
    .getElementById("btn-artists")
    .addEventListener("click", fetchArtists);