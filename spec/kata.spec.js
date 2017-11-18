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
      expect(()=>new Grid(-2, 0)).toThrowError(Error);
      expect(()=>new Grid(2, -2)).toThrowError(Error);
      expect(()=>new Grid(-1, 0)).toThrowError(Error);
    });

   describe('getStatus', ()=>{
      let width = 2, height = 3;
      let g = new Grid(width, height);
      it('returns dead cells for uninited grid', ()=>{
         for (let i = 0; i < width; i++)
            for (let j = 0; j < height; j++)
               expect(g.getStatus(i, j)).toBeFalsy();
      });
   });
});
