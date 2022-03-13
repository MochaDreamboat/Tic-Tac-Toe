// Create a player constructor and assign relevant functions to its prototype.

const player = (name, marker, wins) => {
    return {name, marker, wins};
};

// Facilitates game's UI and records positions of markers.
const gameBoard = (() => {
    'use strict';

    const gameboard = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    const spots = document.querySelectorAll('.spot');
    const spotsArray = [...spots]

    const O = document.createElement('img');
    O.setAttribute('src', 'images/O.svg');

    const setMarker = function () {
        if (gameFlow.currentPlayer == gameFlow.playerOne) {
            const X = document.createElement('img');
            X.setAttribute('src', 'images/X.svg');
            return X
        } else {
            const O = document.createElement('img');
            O.setAttribute('src', 'images/O.svg');
            return O
        }

    }

    const updateBoardArray = function (position) {
        gameboard[position] = gameFlow.currentPlayer.marker
    }

    const placeMarker = function () {
        spotsArray.forEach((spot) => {
            const position = spot.getAttribute('data-index-number');
            spot.addEventListener('click', () => {
                if (gameboard[position] != null) {
                    alert('Please choose an empty spot.');
                    return
                }
                updateBoardArray(position)
                let marker = setMarker()
                spot.appendChild(marker);
                gameFlow.checkWin()
            });
        });
    }
    
    return {
        gameboard, 
        placeMarker,
    };
})();

gameBoard.placeMarker()

// Facilitates 
const gameFlow = (() => {
    // Create functions for game flow
    'use strict';
    const playerOne = player('Player One', 'X', 0);
    const playerTwo = player('Player Two', 'O', 0);

    const winConditions = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const gameStatus = document.querySelector('#game-status')

    let currentPlayer = playerOne;

    const switchPlayer = () => (gameFlow.currentPlayer == playerOne ? gameFlow.currentPlayer = playerTwo : gameFlow.currentPlayer = playerOne) 
    const checkWin = function () {
        let currentBoard = gameBoard.gameboard
        for (let i = 0; i <= winConditions.length - 1; i++) {
            console.log(winConditions[i]);
            const check = (spot) => (currentBoard[spot] ==  gameFlow.currentPlayer.marker)
            let win = winConditions[i].every(check)
            if (win == true) {
                console.log(`${gameFlow.currentPlayer.name} wins!`)
                gameStatus.innerHTML = `${gameFlow.currentPlayer.name} wins!`
                return win
            }
        }
        switchPlayer()
        gameStatus.innerHTML = `${gameFlow.currentPlayer.name}'s turn.`
        return
    }

    return {
        playerOne,
        playerTwo,
        currentPlayer,
        switchPlayer,
        checkWin,
    }
})();