const display = document.getElementById("display");

function fetchArtworks() {
    fetch("https://api.artic.edu/api/v1/artworks?limit=5")
        .then(response => response.json())
        .then(data => {
            let artworks = data.data;
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

function fetchGithub() {
  const container = document.getElementById('repo-list');

  fetch("https://api.github.com/users/ablubrry/repos")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(repos => {
      container.innerHTML = ''; 

      repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'repo-item';

        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.textContent = repo.name;

        const description = document.createElement('p');
        description.textContent = repo.description || 'Current and previous projects.';

        repoItem.appendChild(link);
        repoItem.appendChild(description);
        container.appendChild(repoItem);
      });
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
      container.textContent = 'Failed to load repositories.';
    });
}


fetchGithub();