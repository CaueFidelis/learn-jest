const { queryString, parse } = require('./queryString');

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

describe('Query String to Object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Caue&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Caue',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=Caue';

    expect(parse(qs)).toEqual({
      name: 'Caue',
    });
  });
});
