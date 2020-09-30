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

  solve(row, column) {
    let successfulPaths = 0;
    //let board = this.board
    let possibleMoves = [];

    if (row > this.board.length - 1 || column > this.board.length - 1) {
      return;
    }

    if (row === this.board.length - 1 && col === this.board.length - 1) {
      //stop case
      successfulPaths += 1;
      return;
    }

    this.board.togglePiece(row, column);

    if (this.board.hasBeenVisited(row + 1, column) === false) {
      possibleMoves.push([row + 1, column]);
    }

    if (this.board.hasBeenVisited(row, column + 1) === false) {
      possibleMoves.push([row, column + 1]);
    }
    if (this.board.hasBeenVisited(row - 1, column) === false) {
      possibleMoves.push([row - 1, column]);
    }
    if (this.board.hasBeenVisited(row, column - 1) === false) {
      possibleMoves.push([row, column - 1]);
    }

    for (let coordinate of possibleMoves) {
      //recursive case
      solve(coordinate[0], coordinate[1]);
    }

    solve(this.row, this.column);
    return successfulPaths;
  }
}

module.exports = { RobotPaths };
