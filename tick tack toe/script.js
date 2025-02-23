/* script.js */
window.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('status');
    const restartButton = document.getElementById('restart');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let running = true;

    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    initializeGame();

    function initializeGame() {
        cells.forEach(cell => cell.addEventListener('click', cellClicked));
        restartButton.addEventListener('click', restartGame);
        statusText.textContent = `Your turn!`;
    }

    function cellClicked() {
        const cellIndex = this.getAttribute('data-index');

        if (board[cellIndex] !== '' || !running) {
            return;
        }

        updateCell(this, cellIndex, currentPlayer);
        if (checkWin(currentPlayer)) {
            statusText.textContent = `You win! 🎉`;
            running = false;
        } else if (isBoardFull()) {
            statusText.textContent = `It's a draw! 🤝`;
            running = false;
        } else {
            statusText.textContent = `Computer's turn...`;
            setTimeout(computerTurn, 500);
        }
    }

    function updateCell(cell, index, player) {
        board[index] = player;
        cell.textContent = player;
    }

    function checkWin(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    function isBoardFull() {
        return board.every(cell => cell !== '');
    }

    function computerTurn() {
        currentPlayer = 'O';

        // Try to win
        let moveMade = tryToWinOrBlock('O');

        // Block player's win
        if (!moveMade) {
            moveMade = tryToWinOrBlock('X');
        }

        // Take center if available
        if (!moveMade && board[4] === '') {
            makeMove(4);
            moveMade = true;
        }

        // Take a random corner
        if (!moveMade) {
            moveMade = takeRandomCell([0, 2, 6, 8]);
        }

        // Take any available cell
        if (!moveMade) {
            moveMade = takeRandomCell([1, 3, 5, 7]);
        }

        if (checkWin(currentPlayer)) {
            statusText.textContent = `Computer wins! 💻`;
            running = false;
        } else if (isBoardFull()) {
            statusText.textContent = `It's a draw! 🤝`;
            running = false;
        } else {
            currentPlayer = 'X';
            statusText.textContent = `Your turn!`;
        }
    }

    function tryToWinOrBlock(player) {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = player;
                if (checkWin(player)) {
                    makeMove(i);
                    return true;
                }
                board[i] = '';
            }
        }
        return false;
    }

    function takeRandomCell(indices) {
        const availableIndices = indices.filter(index => board[index] === '');
        if (availableIndices.length > 0) {
            const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            makeMove(randomIndex);
            return true;
        }
        return false;
    }

    function makeMove(index) {
        const cell = document.querySelector(`.cell[data-index='${index}']`);
        updateCell(cell, index, currentPlayer);
    }

    function restartGame() {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        running = true;
        cells.forEach(cell => {
            cell.textContent = '';
        });
        statusText.textContent = `Your turn!`;
    }
});
