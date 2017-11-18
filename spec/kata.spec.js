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
      expect(new Grid(-2, 0)).toThrowError(Error);
      expect(new Grid(2, -2)).toThrowError(Error);
      expect(new Grid(-1, 0)).toThrowError(Error);
    });

});
