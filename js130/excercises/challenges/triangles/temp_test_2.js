let Triangle = require('./triangles.js');

console.log(Triangle);
describe('The Car class', () => {

  test('throws error if invalid input', () => {
    expect(new Triangle(0, 0, 0)).toThrow();
  })
});