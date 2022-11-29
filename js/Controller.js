import {playerWins} from './stats.js'
import { AddToAllTime } from './cookies.js';


function DefineChoices() {
    const colButtons = [];
    for (let i = 0; i < 7; i++) {
        colButtons[i] = document.getElementsByClassName('choice')[i];
    }

    return colButtons;
}

function DefineSlots() {
    const slots = []

    for (let i = 0; i < 7*6; i++) {
        slots[i] = document.getElementsByClassName("Slot")[i];
    }

    return slots;
}


function SwitchPlayer(player) {
    if (player == 0) {
        return 1;
    }
    else if (player == 1) {
        return 0;
    }
    else {
        throw "Invalid value for player, check your code ma guy!"
    }
}



function CheckWin(colors, player) {
    let Check1 = CheckHorizontal(colors, player);
    let Check2 = CheckVertical(colors, player);
    let Check3 = CheckDiagnalRight(colors,player);
    let Check4 = CheckDiagnalLeft(colors,player);

    if (Check1 || Check2 || Check3 || Check4) {
        playerWins[player]++;
        AddToAllTime(player);
        return true;
    }

    return false;
    
}


// Checks 

function CheckHorizontal(colors, player) {
    for (let y = 0; y < 24; y = y +6) {
        for (let x = 0; x < 6; x++) {
            if (
                document.getElementsByClassName("Slot")[x+y].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y + 6 ].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y + 12].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y + 18].style.backgroundColor == colors[player]
                ) {
                alert(colors[player])
                return true;
            }
        }
    }
    return false;
}

function CheckVertical(colors,player) {
    for (let y = 0; y < 18; y = y +6) {
        for (let x = 0; x < 6; x++) {
            if (
                document.getElementsByClassName("Slot")[x+y].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y +1].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y + 2].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y + 3].style.backgroundColor == colors[player]
                ) {
                alert(colors[player])
                return true;
            }
        }
    }
    return false;
}

function CheckDiagnalRight(colors,player) {
    for (let y = 0; y < 24; y = y + 6) {
        for (let x = 5; x > 2; x--) {
            if (
                document.getElementsByClassName("Slot")[x+y].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y +5].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y +10].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y +15].style.backgroundColor == colors[player]
            ) {
                alert(colors[player])
                return true;
            }
        }
    }
    return false;
}

function CheckDiagnalLeft(colors,player) {
    for (let y = 36; y > 12; y = y -6) {
        for (let x = 5; x > 2; x--) {
            if (
                document.getElementsByClassName("Slot")[x+y].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y -7].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y -14].style.backgroundColor == colors[player] &&
                document.getElementsByClassName("Slot")[x+y -21].style.backgroundColor == colors[player]
            ) {
                alert(colors[player])
                return true;
            }
        }
    }
    return false;
}



export { DefineChoices , DefineSlots, SwitchPlayer, CheckWin};