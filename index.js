class Grid {
    constructor(width, height) {
        this.grid = new Array(height);
        for (let i = 0; i < height; i++)
            this.grid[i] = new Array(width);
    }

    getHeight() {
        return this.grid.length
    }

    getWidth() {
        return this.grid[0].length
    }

}

module.exports = {Grid};
