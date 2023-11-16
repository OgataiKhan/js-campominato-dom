# Campo Minato

This is a simplified version of the Minesweeper game. Click on the cells to score points, you lose if you reveal a bomb (red cell).

1. Create a function that generates an array of 16 unique integers between 1 and the total number of cells. These represent the bombs.    
2. Handle the cell event listener so that on click of a cell whose number matches a bomb the cell becomes red and the game terminates.  
3. Keep track of the current score (number of revealed non-bomb cells) and print it into the html.  
4. Add a game win condition if the player reveals "total number of cells" - "number of bombs" non-bomb cells.  