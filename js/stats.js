import Cookies from "./js.cookie.min.mjs"

let turn = 1;
const playerWins = [0,0]


function AllTime() {
    let cookie = Cookies.get("wins");
    if (Cookies.get("wins") == null) {
        Cookies.set("wins", `${playerWins[0]}:${playerWins[1]}`);
        return;
    }
    let wins = cookie.split(':');
    let newValue1 = playerWins[0] + parseInt(wins[0]);
    let newValue2 = playerWins[1] + parseInt(wins[1]);
    $("#Player1All").html(`Player1: ${newValue1}`);
    $("#Player2All").html(`Player1: ${newValue2}`);

    Cookies.set("wins", `${newValue1}:${newValue2}`);
}

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

function DisplayAllTimeScore() {
    // TO BE IMPLEMENTED
}
 
export { ChangeTurn, InsertTurn, ColorChange, ResetStats, DisplayWins, playerWins, AllTime };

