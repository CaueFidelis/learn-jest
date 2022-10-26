const { sum, subtract } = require('./calculator');

describe('Sum', () => {
  it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should sum 2 and 2 even if one of them is a string and result must be 4', () => {
    expect(sum('2', '2')).toBe(4);
  });

  it('should thow an erro if what is provided to the method cannot be summed', () => {
    expect(() => {
      sum('', '2');
    }).toThrowError();

    expect(() => {
      sum([2, 2]);
    }).toThrowError();

    expect(() => {
      sum({});
    }).toThrowError();

    expect(() => {
      sum();
    }).toThrowError();
  });
});

describe('Subtract', () => {
  it('should subtract 5 and 3 and the result must be 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should subtract 5 and 3 even if one of them is a string and result must be 2', () => {
    expect(subtract('5', '3')).toBe(2);
  });

  it('should throw an error if what is provided to the method cannot be subtracted', () => {
    expect(() => {
      subtract('', '2');
    }).toThrowError();
  });
});
