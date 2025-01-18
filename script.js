// Load the games from the JSON file
async function loadGames() {
    const response = await fetch('games.json');
    const games = await response.json();
    return games;
}

// Display the games sorted by recent
async function displayRecentGames() {
    const games = await loadGames();

    // Sort games by recent (descending by date)
    games.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById('games-container');
    container.innerHTML = ''; // Clear the container

    // Create and append the HTML for each game
    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'col-lg-2 col-md-4 col-6 grid-3';
        gameElement.innerHTML = `
            <a href="${game.url}">
                <div class="game-item">
                    <div class="list-game">
                        <div class="list-thumbnail">
                            <img src="${game.image}" class="lazyload" alt="${game.name}" title="${game.name} Unblocked">
                            <div class="list-title" style="text-align:center;">${game.name}</div>
                        </div>
                    </div>
                </div>
            </a>
        `;
        container.appendChild(gameElement);
    });
}

// Automatically load recent games on page load
displayRecentGames();
console.log('Script loaded!');
