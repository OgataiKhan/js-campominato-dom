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
    console.log(index);
    cell.classList.add('cell-clicked');
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
            handleCellClick(this, i);
        });
        // Append cell to fragment
        fragment.appendChild(myCell);
    }
    // Append the whole fragment to the board
    board.appendChild(fragment);
}

// Difficulty setter
function setDifficulty(side) {
    sideLength = String(side);
    totalCells = side * side;
}

// VARIABLES
const board = document.querySelector('.board');
const playButtons = document.querySelectorAll('.play-btn');
const difficultySelector = document.getElementById('difficulty');
let sideLength = '9';
let totalCells = 81;

// EXECUTION
// Set grid size and cell number based on selected difficulty
difficultySelector.addEventListener('change', function() {
    const selectedDifficulty = this.value;
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