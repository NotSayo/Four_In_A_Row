let turn = 1;
const playerWins = [0,0]

function InsertTurn() {
    const turnCounter = document.getElementById("turn");
    turnCounter.innerHTML = `Turn: ${turn}`;
}

function ChangeTurn() {
    turn++;
}

function ColorChange(colors, player) {
    const ColorStat = document.getElementById("colorTurn");
    ColorStat.innerHTML = `It's ${colors[player]}'s turn`;

    const ColorCircle = document.getElementById("colorT").style.backgroundColor = colors[player];
}

function ResetStats() {
    turn = 1;
}

function DisplayWins() {
    const player1Wins = document.getElementById('Player1Wins');
    const player2Wins = document.getElementById('Player2Wins');

    player1Wins.innerHTML = `Player 1: ${playerWins[0]}`
    player2Wins.innerHTML = `Player 2: ${playerWins[1]}`
}
 
export { ChangeTurn, InsertTurn, ColorChange, ResetStats, DisplayWins, playerWins };