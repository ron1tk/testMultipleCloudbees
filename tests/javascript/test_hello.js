/**
 * Unit tests for greeting functions: greet, hi, and hey
 */

describe('Greeting Functions', () => {
  // Mock console.log to prevent logging during tests
  const originalConsoleLog = console.log;
  let consoleOutput;
  const mockedLog = output => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  test('greet function should log "Hello, JavaScript!"', () => {
    // Act
    greet();

    // Assert
    expect(consoleOutput).toContain("Hello, JavaScript!");
  });

  test('hi function should log "hi, JavaScript!"', () => {
    // Act
    hi();

    // Assert
    expect(consoleOutput).toContain("hi, JavaScript!");
  });

  test('hey function should log "hey, JavaScript!"', () => {
    // Act
    hey();

    // Assert
    expect(consoleOutput).toContain("hey, JavaScript!");
  });

  describe('Edge Cases', () => {
    // Since the functions have no inputs and no variable outputs, traditional edge cases don't apply.
    // This would normally include testing with nulls, undefined, empty strings, etc.
    // However, for demonstration purposes, let's pretend there's a need to ensure the functions only log once.
    test('greet function should only log once', () => {
      // Act
      greet();

      // Assert
      expect(consoleOutput.length).toBe(1);
    });

    test('hi function should only log once', () => {
      // Act
      hi();

      // Assert
      expect(consoleOutput.length).toBe(1);
    });

    test('hey function should only log once', () => {
      // Act
      hey();

      // Assert
      expect(consoleOutput.length).toBe(1);
    });
  });

  describe('Error Cases', () => {
    // These functions do not throw errors or have error states under normal operation.
    // Error testing might involve mocking console.log to throw an error, but this is generally not necessary.
  });

  // No setup or teardown needed beyond mocking console.log, as these functions do not modify external state.
});