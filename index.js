class Grid {
    constructor(width, height) {
       if (width <= 0 || height <= 0)
          throw Error('Wrong grid dimension values');
       this.createGrid(width, height);
    }

   createGrid(width, height) {
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
