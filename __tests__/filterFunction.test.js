import filterFunction from '../lib/filterFunction';

describe('FilterFunction', () => {
  it('should return only element that have "bal" in it"', () => {
      const collection = [
          {name: 'iqbal', email: 'lalalen@mail.com'},
          {name: 'lenka', email: 'balen@mail.com'},
      ];
      const actualOutput = filterFunction('bal',collection);
      expect(actualOutput).toEqual(expect.arrayContaining([{name: 'iqbal', email: 'lalalen@mail.com'}]));
  });

  it('should return only element that have "len" in it"', () => {
      const collection = [
          {name: 'iqbal', email: 'lalalen@mail.com'},
          {name: 'lenka', email: 'balen@mail.com'},
      ];
      const actualOutput = filterFunction('len',collection);
      expect(actualOutput).toEqual(expect.arrayContaining([{name: 'lenka', email: 'balen@mail.com'}]));
  });
});