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
    this.boardLimit = size - 1;
  }

  solve() {
    let successfulPaths = 0;

    function walk(row, col, board, size){
      if(row > (size) || col > (size) || row < 0 || col < 0){
        return;
      }

      if(board.togglePiece(row,col)){
        return;
      }

      if(row === size || col === size){
        successfulPaths += 1;
        return;
      }

      board.togglePiece(row,col);


      let nextMoves = [[row+1, col],[row-1,col],[row,col+1],[row,col-1]];
      for(let coordinate of nextMoves){
        walk(coordinate[0], coordinate[1], board, size);
      }


      board.togglePiece(row,col);
      return;
      


    }

    walk(this.row, this.col, this.board, this.boardLimit)
    return successfulPaths;
  }
}

module.exports = { RobotPaths };
