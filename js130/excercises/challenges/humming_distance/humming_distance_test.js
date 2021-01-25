const DNA = require('./humming_distance.js');

describe('DNA', () => {

  test('both strings have same length and same characters', () => {
    let dna = new DNA('ABCDABCD');
    expect(dna.hammingDistance('ABCDABCD')).toBe(0);
  });

  test('both strings have same length but characters', () => {
    let dna = new DNA('ABCDABCD');
    expect(dna.hammingDistance('ERTYUHJL')).toBe(8);
  });

  test('both strings have same characters, different length, the second is shorter', () => {
    let dna = new DNA('ABCDABCDABCD');
    expect(dna.hammingDistance('ABCDABCD')).toBe(4);
  });

  test('both strings have same characters, different length, the first is shorter', () => {
    let dna = new DNA('ABCDABCD');
    expect(dna.hammingDistance('ABCDABCDABCD')).toBe(4);
  });

  test('two empty strings as inputs', () => {
    let dna = new DNA('');
    expect(dna.hammingDistance('')).toBe(0);
  });

  test('one empty strings as inputs', () => {
    let dna = new DNA('');
    expect(dna.hammingDistance('ABCD')).toBe(4);
  });

  test('input is not capital letters or different data type', () => {
    let dna = new DNA('__$%#');
    expect(dna.hammingDistance('ABCDE')).toThrow();
  });

  test('input is not capital letters or different data type', () => {
    expect(new DNA('__$%#').toThrow();
  });

  test("doesn't shorten original string", () => {
    let dna = new DNA('ABCDABCDABCD');
    dna.hammingDistance('ABCD');
    expect(dna.dnaStrand).toBe('ABCDABCDABCD');
  });

});

