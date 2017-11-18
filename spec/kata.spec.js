require('jasmine')
const gol = require('../index.js')

describe('Grid', ()=>{
   const Grid = gol.Grid;
   it('should create grid', ()=>{
      let g = new Grid(2, 3);
      expect(g.getWidth()).toBe(2);
      expect(g.getHeight()).toBe(3);
   });

    it('should throw exception with invalid size', ()=>{
      let g = new Grid(0, 0);
      expect(g.getWidth()).toThrowError();
    });

});
