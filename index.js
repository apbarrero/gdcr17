class Grid {
    constructor(width, height) {
        if (width <= 0 || height <= 0)
            throw Error('Wrong grid dimension values');
        this.createGrid(width, height);
    }

    createGrid(width, height) {
        this.grid = new Array(height);
        this.grid.fill(new Array(width));
    }

    initGrid() {
        for (let i = 0; i < this.grid.length; i++)
            this.grid[i].fill(false);
    }

    initRandomGrid() {

    }

    getHeight() {
        return this.grid.length
    }

    getWidth() {
        return this.grid[0].length
    }

    getStatus(x, y) {
        return this.grid[x][y];
    }

}

module.exports = {Grid};
