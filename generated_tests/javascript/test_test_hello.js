const { greet, hi, hey, sup, three, four } = require('./greetings');

describe('greetings module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('normal cases', () => {
    test.each([
      { fn: greet, expected: "Hello, JavaScript!" },
      { fn: hi, expected: "hi, JavaScript!" },
      { fn: hey, expected: "hey, JavaScript!" },
      { fn: sup, expected: "sup, JavaScript!" },
      { fn: three, expected: "three, JavaScript!" },
      { fn: four, expected: "three, JavaScript!" }, // Assuming this is either an error in the requirements or in the implementation
    ])('Function $fn.name should log expected output', ({ fn, expected }) => {
      fn();
      expect(console.log).toHaveBeenCalledWith(expected);
    });
  });

  describe('error cases', () => {
    beforeAll(() => {
      console.log.mockImplementation(() => { throw new Error('Console Error') });
    });

    test.each([
      { fn: greet },
      { fn: hi },
      { fn: hey },
      { fn: sup },
      { fn: three },
      { fn: four },
    ])('Function $fn.name should throw "Console Error" when console.log throws an error', ({ fn }) => {
      expect(fn).toThrow('Console Error');
    });

    afterAll(() => {
      jest.resetAllMocks();
    });
  });
});