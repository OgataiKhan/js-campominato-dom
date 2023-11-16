'use strict';

// FUNCTIONS
// Element creator
function myCreateElement(tag, classNames, content){
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    element.append(content);
    return element;
}

// Game functionality
function handleCellClick(cell, index) {
    // Exit the function if the game is over
    if (gameOver) return;
    console.log(index);
    // Loss condition
    if (bombArray.includes(index)) {
        cell.classList.add('cell-bomb');
        revealAllBombs();
        gameOver = true;
        gameEndMessage.innerHTML = `GAME OVER! Your final score is: ${scoreArray.length}`;
    } else {
        cell.classList.add('cell-clicked');
        // Score tracking
        if(!scoreArray.includes(index)) {
            scoreArray.push(index);
            score.innerHTML = scoreArray.length;
        }
        // Win condition
        if(scoreArray.length === (totalCells - totalBombs)) {
            gameOver = true;
            gameEndMessage.innerHTML = `YOU WIN! Your final score is: ${scoreArray.length}`;
        }
    }
}

// Play click handler
function handlePlayClick() {
    // Clear existing grid
    board.innerHTML = '';
    // Save wanted classes as an array
    const classArray = ['cell', `cell${sideLength}`];
    // Fragment
    const fragment = document.createDocumentFragment();
    // Grid creation
    for (let i = 1; i <= totalCells; i++) {
        const myCell = myCreateElement('div', classArray, i);
        // Cell event listener
        myCell.addEventListener('click', function() {
            handleCellClick(myCell, i);
        });
        // Append cell to fragment
        fragment.appendChild(myCell);
    }
    // Append the whole fragment to the board
    board.appendChild(fragment);
    //Generate bombs
    bombGenerator(totalBombs, totalCells);
    // Score reset
    scoreBox.classList.add('appear');
    score.innerHTML = '0';
    gameEndMessage.innerHTML = '';
    scoreArray = [];
    gameOver = false;
}

// Difficulty setter
function setDifficulty(side) {
    sideLength = String(side);
    totalCells = side * side;
}

// Bomb generator
function bombGenerator(totalBombsGen, totalCellsGen) {
    bombArray = [];
    while(bombArray.length < totalBombsGen){
        let bombCellNumber = Math.floor(Math.random() * totalCellsGen) + 1;
        if(!bombArray.includes(bombCellNumber)) bombArray.push(bombCellNumber);
    }
    console.log(bombArray);
    return bombArray;
}

// Bomb revealer
function revealAllBombs() {
    for (let k = 0; k < bombArray.length; k++) {
        const bombIndex = bombArray[k];
        const bombCell = board.children[bombIndex - 1];
        bombCell.classList.add('cell-bomb');
    }
}


// VARIABLES
const board = document.querySelector('.board');
const playButtons = document.querySelectorAll('.play-btn');
const difficultySelector = document.getElementById('difficulty');
const scoreBox = document.getElementById('score-box');
const score = document.getElementById('score');
const gameEndMessage = document.querySelector('.game-end');
let sideLength = '9';
let totalCells = 81;
const totalBombs = 16;
let bombArray = [];
let scoreArray = [];
let gameOver = false;

// EXECUTION
// Set grid size and cell number based on selected difficulty
difficultySelector.addEventListener('change', function() {
    const selectedDifficulty = difficultySelector.value;
    switch (selectedDifficulty) {
        case 'easy':
            setDifficulty(10);
            break;
        case 'hard':
            setDifficulty(7);
            break;
        case 'medium':
        default:
            setDifficulty(9);
            break;
    }
});

// Add event listeners to play buttons
for (let j = 0; j < playButtons.length; j++) {
    playButtons[j].addEventListener('click', handlePlayClick);
}