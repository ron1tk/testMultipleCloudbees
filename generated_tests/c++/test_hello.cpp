#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include <iostream>
#include <sstream>

using ::testing::_;
using ::testing::Invoke;

// Mock class for std::cout
class MockCout {
public:
    MOCK_METHOD(void, Output, (const std::string&));
};

MockCout* mockCoutPtr;
std::streambuf* oldCoutStreamBuf;
std::ostringstream strCout;

void CoutReplacement(const std::string& s) {
    if (mockCoutPtr) {
        mockCoutPtr->Output(s);
    } else {
        std::cout << s; // Fallback to the actual cout
    }
}

// Redirect std::cout to our stringstream or mock
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
    MockCout mockCout;

    void SetUp() override {
        SetUpCoutRedirection();
        mockCoutPtr = &mockCout;
        ON_CALL(mockCout, Output(_)).WillByDefault(Invoke(CoutReplacement));
    }

    void TearDown() override {
        TearDownCoutRedirection();
        mockCoutPtr = nullptr;
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

// Additional Tests

// Testing greet() without mocking to verify actual output
TEST(GreetTestNoMock, VerifyActualOutput) {
    // Arrange
    std::ostringstream localStrCout;
    std::streambuf* oldCoutBuf = std::cout.rdbuf(localStrCout.rdbuf());

    // Act
    greet();

    // Restore std::cout
    std::cout.rdbuf(oldCoutBuf);

    // Assert
    ASSERT_EQ(localStrCout.str(), "Hellooooo, C++!\n");
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    ::testing::InitGoogleMock(&argc, argv);
    return RUN_ALL_TESTS();
}