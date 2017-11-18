require('jasmine');
const gol = require('../index.js');
const Grid = gol.Grid;

describe("Grid", function() {
   it('should create a properly sized grid', function() {
      let g = new Grid(2, 3);
      expect(g.width).toBe(2);
      expect(g.height).toBe(3);
   });


   it('show print grid', function() {
       const width = 2;
       const height = 3;
       let g = new Grid(width, height);
       const length = (width + 1) * height
      expect(g.toString().length).toBe(length);
   });

});
