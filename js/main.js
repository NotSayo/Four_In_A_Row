import {DefineChoices, DefineSlots, SwitchPlayer, CheckWin} from './Controller.js'
import { ChangeTurn, InsertTurn, ColorChange, ResetStats, DisplayWins, AllTime } from './stats.js';

//#region variables

const width = 7;
const height = 6;
let player = 0; // 0 -> Blue | 1 -> Red
const colors = ["blue", "red"]
const restart = document.getElementById("Restart");

//#endregion

//#region Functions

function Restart(forced = false) {
    let confirmation
    if (!forced) {
        confirmation = confirm("Are you sure u want to restart?");
    }

    if (!confirmation && !forced){
        return;
    }

    const slots = document.getElementsByClassName("Slot")

    for (let i = 0; i < slots.length; i++) {
        slots[i].style.backgroundColor = "";
    }
    player = 0;
    AllTime();
    ResetStats();
    ColorChange(colors,player);
    InsertTurn();
    DisplayWins();

}

function AddEventListeners(array) {
    for (let i = 0; i < width; i++) {
        array[i].addEventListener('click', function() { Pressed(i+1)})
    }
    restart.addEventListener('click', function() {Restart()})
    
}

function Pressed(column) {
    column--;
    let passMain  = false;
    let passSlots = false;

    for (let i = 0; i < slots.length; i++) {
        if (slots[i].style.backgroundColor == "") {
            passSlots = true;
        }
    }
    if (!passSlots) {
        alert('No more avalible spaces! \nResetting the board...')
        Restart(true);
        return;
    }

    while(!passMain) {
        for (let i = height- 1; i >= 0; i--) {
            if (document.getElementsByClassName("Slot")[i + column*6].style.backgroundColor == "") {
                document.getElementsByClassName("Slot")[i + column*6].style.backgroundColor = colors[player];
                passMain = true;
                break;
            }
        }
        if (!passMain) {
            alert("There is no more space in that column, choose another one!")
            passMain = true;
        }
        else {
            let win = CheckWin(colors, player)
            if (win) {
                Restart(true);
                return;
            }

            player = SwitchPlayer(player);
            ChangeTurn();
            InsertTurn();
            ColorChange(colors, player);
        }
    }
    
}

//#endregion


// Main
const choices = DefineChoices()
const slots = DefineSlots();
AddEventListeners(choices)
InsertTurn();
ColorChange(colors,player);
DisplayWins();
AllTime();



