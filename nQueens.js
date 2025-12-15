function solveNQueens(n) {
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    const solutions = [];

    function isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function placeQueen(row) {
        // Base case: all queens placed
        if (row === n) {
            const copy = board.map(r => r.join("  "));
            solutions.push(copy);
            return;
        }

        // Try all columns in this row
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';   // Place queen
                placeQueen(row + 1);     // Recur
                board[row][col] = '.';   // Backtrack
            }
        }
    }

    placeQueen(0);
    return solutions;
}

// Example usage:
console.log(solveNQueens(4));
