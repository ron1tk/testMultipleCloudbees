const { jest } = require('@jest/globals');
const { greet, hi, hey, sup, three, four, five } = require('./greetingFunctions');

describe('Test greeting functions for correct console output', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
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

    test('four() should log "four, JavaScript!"', () => {
        four();
        expect(console.log).toHaveBeenCalledWith("four, JavaScript!");
    });

    test('four() should not log "three, JavaScript!" to demonstrate a failed test scenario', () => {
        four();
        expect(console.log).not.toHaveBeenCalledWith("three, JavaScript!");
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