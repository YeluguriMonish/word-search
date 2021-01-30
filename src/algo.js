export default class WordSearch {
  constructor(grid, wordBank) {
    this.grid = grid;
    this.wordBank = wordBank;
    this.rows = grid.length
    this.cols = grid[0][0].length
    this.directions = [
      [-1, 0],
      [1, 0],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
      [0, 1],
      [0, -1]
    ]
    this.wordCoordinates = [];
  }
  patternSearch(word) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.search2D(i, j, word)
      }
    }
    return this.wordCoordinates;
  }

  search2D(row, col, word) {
    if (this.grid[row][0][col] != word[0]) {
      return false;
    }

    for (let i = 0; i < this.directions.length; i++) {
      let rd = row + this.directions[i][0];
      let cd = col + this.directions[i][1];
      let k;
      let temp = [[row, col],];
      for (k = 1; k < word.length; k++) {
        if (rd >= this.rows || rd < 0 || cd >= this.cols || cd < 0) {
          break; // out of bounds -> reset
        }
        if (this.grid[rd][0][cd] != word[k]) {
          break; // letter not matched in word -> reset
        }
        temp.push([rd, cd]); // add coordinate of letter
        rd += this.directions[i][0];
        cd += this.directions[i][1];
      }
      if (k == word.length) { // if all characters matched, value of k must equal length of word
        this.wordCoordinates = this.wordCoordinates.concat(temp);
        return true;
      }
    }
    return false;
  }

}
