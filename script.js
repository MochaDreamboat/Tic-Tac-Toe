// Create a player constructor and assign relevant functions to its prototype.

function Player (name, marker) {
    this.name = name,
    this.marker = marker,
    this.wins = wins

};

// Store the board as an array inside a gameboard object (Use a module!)
const gameBoard = (() => {
    'use strict';
    const gameboard = [null, null, null, null, null, null, null, null, null];
    const spot = document.querySelectorAll('.spot');
    const X = document.createElement('img');
    const O = document.createElement('img');

    for (let i = 0; i < gameboard.length; i++) {
        spot[i].addEventListener = () => {
            let playerMarker = currentPlayer.marker;
            spot[i].appendChild(`${playerMarker}`)

            gameFlow.checkWin()
        };
    }
    return {gameboard};
})();

// Create an object for controlling game flow.

const gameFlow = (() => {
    // Create functions for game flow
    const winConditions = {
        horizontal: [[0, 1 ,2], [3, 4, 5], [6, 7, 8]],
        vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
        diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    let currentPlayer = null;

    return {
        winConditions
    }
})();