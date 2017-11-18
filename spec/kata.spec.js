require('jasmine')
const gol = require('../index.js')

describe('Grid', ()=>{
   const Grid = gol.Grid;
   it('should create grid', ()=>{
      let g = new Grid(2, 3);
      expect(g.getWidth()).toBe(2);
      expect(g.getHeight()).toBe(3);
   });
});
