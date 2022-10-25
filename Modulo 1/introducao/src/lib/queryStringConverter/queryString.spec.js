const { queryString } = require("./queryString");

describe('Object to query string', () => {
  it('create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe(
      'name=Fabio&profession=developer'
    );
  });
});