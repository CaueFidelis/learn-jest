const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Fabio&profession=developer');
  });

  it('create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Caue',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Caue&abilities=JS,TDD');
  });

  it('should thow an erro when an object is passid as value', () => {
    const obj = {
      name: 'Caue',
      abilities: { first: 'JS', second: 'TDD' },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
