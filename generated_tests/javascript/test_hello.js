/**
 * @jest-environment jsdom
 */
const { greet, hi, hey, sup, three, four, five, six, seven } = require('./pathToYourFile');

describe('Test greeting functions', () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('greet() should log "Hello, JavaScript!"', () => {
    greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, JavaScript!');
  });

  test('hi() should log "hi, JavaScript!"', () => {
    hi();
    expect(consoleSpy).toHaveBeenCalledWith('hi, JavaScript!');
  });

  test('hey() should log "hey, JavaScript!"', () => {
    hey();
    expect(consoleSpy).toHaveBeenCalledWith('hey, JavaScript!');
  });

  test('sup() should log "sup, JavaScript!"', () => {
    sup();
    expect(consoleSpy).toHaveBeenCalledWith('sup, JavaScript!');
  });

  test('three() should log "three, JavaScript!"', () => {
    three();
    expect(consoleSpy).toHaveBeenCalledWith('three, JavaScript!');
  });

  test('four() should log "three, JavaScript!"', () => {
    four();
    expect(consoleSpy).toHaveBeenCalledWith('three, JavaScript!');
  });

  test('five() should log "five, JavaScript!"', () => {
    five();
    expect(consoleSpy).toHaveBeenCalledWith('five, JavaScript!');
  });

  test('six() should log "six, JavaScript!"', () => {
    six();
    expect(consoleSpy).toHaveBeenCalledWith('six, JavaScript!');
  });

  test('seven() should log "seven, JavaScript!"', () => {
    seven();
    expect(consoleSpy).toHaveBeenCalledWith('seven, JavaScript!');
  });

  // Example of a failure scenario, assuming an error should be thrown for a specific case
  // For these functions, since they're simple console.log wrappers, there's no direct failure scenario
  // unless you modify the function to throw an error under certain conditions.
});