class Grid {
    constructor(width, height, cols, rows) {
        this.width = width;
        this.height = height;
        this.cols = cols;
        this.rows = rows;
        this.cells = [];
        this.fillGrid();
    }

    fillGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j] = new Cell(false);
            }
        }

    }

    drawBoard() {
        const cellWidth = this.width / this.cols;
        const cellHeight = this.height / this.rows;

        for (let x = 0; x < this.cols; x++) {
            for (let y = 0; y < this.rows; y++) {
                const cell = this.cells[y][x];
                context.fillStyle = cell.color();
                context.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            }
        }
    }

    changeState() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const currCell = this.cells[i][j];

                if (currCell.alive !== currCell.aliveNext) {
                    currCell.alive = currCell.aliveNext;
                }
            }
        }
        this.drawBoard();
    }

    countAliveNeighbours(i, j) {
        let count = 0;

        const startX = (i > 0) ? i - 1 : i;
        const endX = (i < this.rows - 1) ? i + 1 : i;
        const startY = (j > 0) ? j - 1 : j;
        const endY = (j < this.cols - 1) ? j + 1 : j;

        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                if (x !== i || y !== j) {
                    if (this.cells[x][y].alive) {
                        count++;
                    }
                }
            }
        }

        return count;
    }

    move() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const currCell = this.cells[i][j];
                const aliveNeighbours = this.countAliveNeighbours(i, j);

                let aliveNext = false;
                if (currCell.alive) {
                    if (aliveNeighbours < 2) {
                        aliveNext = false;
                    } else aliveNext = aliveNeighbours < 4;
                } else {
                    aliveNext = aliveNeighbours === 3;
                }

                currCell.aliveNext = aliveNext;
            }
        }

        this.changeState();
    }
}