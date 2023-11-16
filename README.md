# Campo Minato

This is a simplified version of the Minesweeper game. Click on the cells to score points, you lose if you reveal a bomb (red cell).

1. Create a function that generates an array of 16 unique integers between 1 and the total number of cells. These represent the bombs.    
2. Handle the cell event listener so that on click of a cell whose number matches a bomb the cell becomes red and the game terminates.  
3. Keep track of the current score (number of revealed non-bomb cells) and print it into the html.  
4. Add a game win condition if the player reveals "total number of cells" - "number of bombs" non-bomb cells.  

## Bonus 1

Prevent the user from clicking on other cells after the end of the game.

1. Add a game state variable that keeps track of when a game is over.  
2. End the handleCellClick function before it does anything if the game is over.

## Bonus 2

When a bomb is clicked, reveal all bombs.

1. Create a bomb revealer function that cycles through all bomb cells and adds the cell-bomb css class.  
2. Call the function when a bomb is clicked.