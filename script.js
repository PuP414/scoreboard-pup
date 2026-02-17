let scores = { home: 0, away: 0 };
let sets = { home: 0, away: 0 };

function updateScore(team, value) {
    scores[team] += value;
    if (scores[team] < 0) scores[team] = 0;
    document.getElementById(`score-${team}`).innerText = scores[team];
}

function updateSet(team, value) {
    sets[team] += value;
    document.getElementById(`sets-${team}`).innerText = sets[team];
}

function setSport(type) {
    const title = document.getElementById('sport-title');
    const setHome = document.getElementById('sets-home-container');
    const setAway = document.getElementById('sets-away-container');
    
    resetBoard();
    
    if (type === 'football') {
        title.innerText = 'ฟุตบอล';
        setHome.style.display = 'none';
        setAway.style.display = 'none';
    } else if (type === 'volleyball') {
        title.innerText = 'วอลเลย์บอล';
        setHome.style.display = 'block';
        setAway.style.display = 'block';
    }
}

function resetBoard() {
    scores = { home: 0, away: 0 };
    sets = { home: 0, away: 0 };
    document.getElementById('score-home').innerText = 0;
    document.getElementById('score-away').innerText = 0;
    document.getElementById('sets-home').innerText = 0;
    document.getElementById('sets-away').innerText = 0;
}