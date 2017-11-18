require('jasmine');
const gol = require('../index.js');
const Grid = gol.Grid;

describe("Grid", function() {
   it('should create a properly sized grid', function() {
      let g = new Grid(2, 3);
      expect(g.width).toBe(2);
      expect(g.height).toBe(3);
   });
});
