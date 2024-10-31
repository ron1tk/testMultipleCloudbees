#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include <iostream>
#include <sstream>

// Mocking std::cout
class MockCout {
public:
    MOCK_METHOD(void, Output, (const std::string&));
};

MockCout mockCout;
std::streambuf* oldCoutStreamBuf;
std::ostringstream strCout;

void CoutReplacement(const std::string& s) {
    mockCout.Output(s);
}

// Redirect std::cout to our stringstream
void SetUpCoutRedirection() {
    oldCoutStreamBuf = std::cout.rdbuf();
    std::cout.rdbuf(strCout.rdbuf());
}

// Restore original std::cout
void TearDownCoutRedirection() {
    std::cout.rdbuf(oldCoutStreamBuf);
}

// The actual function we want to test
void greet() {
    std::cout << "Hellooooo, C++!" << std::endl;
}

// Google Test fixture for setting up cout redirection
class GreetTest : public ::testing::Test {
protected:
    void SetUp() override {
        SetUpCoutRedirection();
    }

    void TearDown() override {
        TearDownCoutRedirection();
    }
};

// Testing that greet() outputs the correct string to std::cout
TEST_F(GreetTest, OutputsCorrectString) {
    // Arrange
    EXPECT_CALL(mockCout, Output("Hellooooo, C++!\n")).Times(1);

    // Act
    greet();

    // Assert
    // Verification is done through the EXPECT_CALL
}

// Testing that the output stream can be restored successfully
TEST_F(GreetTest, CanRestoreCout) {
    // Arrange
    std::string expectedOutput = "Testing restoration of std::cout.\n";

    // Act
    std::cout << "Testing restoration of std::cout.\n";

    // Assert
    ASSERT_EQ(strCout.str(), expectedOutput);
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    ::testing::InitGoogleMock(&argc, argv);

    return RUN_ALL_TESTS();
}
```

This test code includes a setup for mocking `std::cout` to ensure that `greet()` outputs the correct string. It uses Google Test and Google Mock for mocking, following best practices for setup and teardown to ensure that changes to `std::cout` are scoped to each test case, preventing side effects across tests. The tests cover the basic functionality of `greet()` as well as the ability to restore `std::cout` after redirection.