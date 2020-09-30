class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve(row, col) {
    let successfulPaths = 0;

    function walk(row, col){
      this.board.togglePiece(row,col);
      if(this.board[row+1][col] === this.board[-1][-1] || this.board[row][col+1] === this.board[-1][-1]){
        successfulPaths += 1;
        return;
      }

      this.board.togglePiece(row,col);
      


    }

    walk(row, col)
    return successfulPaths;
  }
}

module.exports = { RobotPaths };
