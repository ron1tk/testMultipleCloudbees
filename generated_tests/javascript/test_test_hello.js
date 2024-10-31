const { jest } = require('@jest/globals');

// Assuming the implementation of the functions is provided elsewhere
const { greet, hi, hey, sup, three, four, five } = require('./greetingFunctions');

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
        expect(console.log).toHaveBeenCalledWith("three, JavaScript!");
    });

    test('five() should log "five, JavaScript!"', () => {
        five();
        expect(console.log).toHaveBeenCalledWith("five, JavaScript!");
    });

    test('Calling an undefined function should throw an error', () => {
        const someUndefinedFunction = jest.fn();
        expect(() => { someUndefinedFunction(); }).toThrow();
    });
});