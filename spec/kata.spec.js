require('jasmine')
const gol = require('../index.js')

describe('Grid', ()=>{
   const Grid = gol.Grid;
   it('should create grid', ()=>{
      let g = new Grid(2, 3);
      expect(g.width).toBe(2);
      expect(g.height).toBe(3);
   });
});
