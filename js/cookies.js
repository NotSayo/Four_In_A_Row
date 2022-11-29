import { playerWins } from "./stats.js";
import Cookies from "./js.cookie.min.mjs"

$("#ResetAllTime").click(ResetAllTime)

function SetAllTime() {
    CheckCookie();

    let cookie = Cookies.get("wins");
    let wins = cookie.split(':');

    DisplayAllTime(wins);
}


function DisplayAllTime(wins = []) {
    $("#Player1All").html(`Blue: ${parseInt(wins[0])}`);
    $("#Player2All").html(`Red:  ${parseInt(wins[1])}`);
}

function AddToAllTime(player) {
    let cookie = Cookies.get("wins");
    let wins = cookie.split(':');
    for (let i = 0; i < wins.length; i++) {
        wins[i] = parseInt(wins[i]);
    }

    if (player ==0) {
        wins[0] += 1;
    }
    else if (player == 1) {
        wins[1] += 1;
    }

    Cookies.set("wins", `${wins[0]}:${wins[1]}`);
}

function CheckCookie() {
    if (Cookies.get("wins") == null) {
        Cookies.set("wins", "0:0");
    }
}

function ResetAllTime() {
    let confirmation = confirm("Are you sure?\nThis cannot be undone!");
    if (!confirmation) {
        return;
    }
    Cookies.set("wins", "0:0");
    SetAllTime();
}

export { SetAllTime, AddToAllTime };

