// Importing the necessary tool from Jest
const { toHaveBeenCalledWith } = require('@jest/globals');

// Mocking global console to test console.log outputs
global.console = { log: jest.fn() };

// Importing the functions to be tested
// Note: Assuming all functions are exported from a module named 'greetings.js'
const { greet, hi, hey, sup, three, four } = require('./greetings');

describe('Testing greeting functions', () => {
  // Clearing mocks before each test to ensure clean test environment
  beforeEach(() => {
    console.log.mockClear();
  });

  test('greet() should log "Hello, JavaScript!"', () => {
    greet();
    expect(console.log).toHaveBeenCalledWith("Hello, JavaScript!");
  });

  test('hi() should log "hi, JavaScript!"', () => {
    hi();
    expect(console.log).toHaveBeenCalledWith("hi, JavaScript!");
  });

  test('hey() should log "hey, JavaScript!"', () => {
    hey();
    expect(console.log).toHaveBeenCalledWith("hey, JavaScript!");
  });

  test('sup() should log "sup, JavaScript!"', () => {
    sup();
    expect(console.log).toHaveBeenCalledWith("sup, JavaScript!");
  });

  test('three() should log "three, JavaScript!"', () => {
    three();
    expect(console.log).toHaveBeenCalledWith("three, JavaScript!");
  });

  test('four() should log "three, JavaScript!"', () => {
    four();
    expect(console.log).toHaveBeenCalledWith("three, JavaScript!");
  });

  // Testing for potential error cases, though these functions don't explicitly throw errors
  // This section is more about demonstrating how you might handle error cases if they existed.
  describe('Error cases', () => {
    test('Mock implementation to simulate console.log error', () => {
      console.log.mockImplementation(() => { throw new Error('Console Error') });
      expect(() => greet()).toThrow('Console Error');
      expect(() => hi()).toThrow('Console Error');
      expect(() => hey()).toThrow('Console Error');
      expect(() => sup()).toThrow('Console Error');
      expect(() => three()).toThrow('Console Error');
      expect(() => four()).toThrow('Console Error');
    });
  });
});
```
Note: While the provided tests cover the example code's functionality, they operate under the assumption that these functions could potentially be refactored to include error handling or different behavior that might warrant more complex testing scenarios, including error cases.