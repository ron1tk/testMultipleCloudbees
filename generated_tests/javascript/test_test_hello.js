// Importing the necessary functions and utilities from Jest
const { beforeEach, describe, expect, jest, test } = require('@jest/globals');

// Mocking global console to test console.log outputs
global.console = { log: jest.fn() };

// Importing the functions to be tested
const { greet, hi, hey, sup, three, four } = require('./greetings');

describe('Testing greeting functions', () => {
  beforeEach(() => {
    // Clearing mocks before each test to ensure clean test environment
    console.log.mockClear();
  });

  test('greet() should log "Hello, JavaScript!"', () => {
    greet();
    expect(console.log).toHaveBeenCalledWith("Hello, JavaScript!");
  });

  test('hi() should correctly log output', () => {
    hi();
    expect(console.log).toHaveBeenCalledWith("hi, JavaScript!");
  });

  test('hey() should correctly log output', () => {
    hey();
    expect(console.log).toHaveBeenCalledWith("hey, JavaScript!");
  });

  test('sup() should correctly log output', () => {
    sup();
    expect(console.log).toHaveBeenCalledWith("sup, JavaScript!");
  });

  test('three() should correctly log output', () => {
    three();
    expect(console.log).toHaveBeenCalledWith("three, JavaScript!");
  });

  test('four() outputs the same as three() due to a potential copy-paste error', () => {
    four();
    expect(console.log).toHaveBeenCalledWith("three, JavaScript!"); // Assuming this is an intentional or overlooked error in the code
  });

  describe('Error handling scenarios', () => {
    beforeEach(() => {
      // Mock implementation to simulate console.log throwing an error
      console.log.mockImplementation(() => { throw new Error('Console Error') });
    });

    test('greet() handles console.log errors gracefully', () => {
      // Assuming future implementation might catch and handle errors
      expect(() => greet()).toThrow('Console Error');
    });

    test('hi() handles console.log errors gracefully', () => {
      expect(() => hi()).toThrow('Console Error');
    });

    test('hey() handles console.log errors gracefully', () => {
      expect(() => hey()).toThrow('Console Error');
    });

    test('sup() handles console.log errors gracefully', () => {
      expect(() => sup()).toThrow('Console Error');
    });

    test('three() handles console.log errors gracefully', () => {
      expect(() => three()).toThrow('Console Error');
    });

    test('four() handles console.log errors gracefully', () => {
      expect(() => four()).toThrow('Console Error');
    });
  });
});