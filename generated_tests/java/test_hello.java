import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HelloTest {

    @Before
    public void setUp() throws Exception {
        // Setup can be used to initialize common objects required across tests
    }

    @After
    public void tearDown() throws Exception {
        // Teardown can be used to clean up resources after tests are done
    }

    /**
     * Test the greet method returns the correct greeting message.
     */
    @Test
    public void testGreet_ReturnsCorrectGreeting() {
        String expected = "Hello, Java!";
        String actual = hello.greet();
        assertEquals("greet method should return 'Hello, Java!'", expected, actual);
    }

    /**
     * Test the greet method to ensure it consistently returns the same value.
     */
    @Test
    public void testGreet_ReturnsConsistentValue() {
        String firstCall = hello.greet();
        String secondCall = hello.greet();
        assertEquals("greet method should return a consistent value across multiple calls", firstCall, secondCall);
    }

    // Since the main method does not return any value and just prints to the console,
    // we generally do not write unit tests for such methods. However, if it's absolutely necessary,
    // one could redirect the System.out PrintStream to a custom PrintStream and verify the outputs.
    // This falls outside the scope of normal unit testing practices due to its side effects and lack of return value.
}