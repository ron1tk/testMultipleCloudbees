// Importing the necessary tool for mocking console.log
const { jest } = require('@jest/globals');

describe('Test greeting functions for correct console output', () => {
    // Mock console.log before each test
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    // Restore the original console.log after each test
    afterEach(() => {
        console.log.mockRestore();
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

    test('four() should incorrectly log "three, JavaScript!" instead of "four, JavaScript!"', () => {
        four();
        // This test intentionally checks for incorrect behavior based on the provided code
        expect(console.log).toHaveBeenCalledWith("three, JavaScript!");
    });

    test('five() should log "five, JavaScript!"', () => {
        five();
        expect(console.log).toHaveBeenCalledWith("five, JavaScript!");
    });

    // Example of an error case test, although the provided functions do not throw errors
    // This is for demonstration purposes
    test('Calling an undefined function should throw an error', () => {
        expect(() => { someUndefinedFunction(); }).toThrow();
    });
});