class Grid {
   constructor(width, height) {
       this.grid = new Array(height);
       for (let i = 0; i < width; i++) {
           this.grid[i] = new Array(width);
       }
       this.width = width
       this.height = height;
   }
}

module.exports = {Grid};
