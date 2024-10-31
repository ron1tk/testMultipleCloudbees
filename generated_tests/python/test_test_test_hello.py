import pytest
from unittest.mock import patch
from example import greet, hi, three, two, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, external_dependency, function_with_external_dependency, setup_environment, teardown_environment, environment_dependent_feature

def test_greet_normal_case():
    """Ensure greet function returns the correct greeting message."""
    expected_output = "Hello, Python!"
    assert greet() == expected_output

@patch('example.print')
def test_greet_prints_correctly(mock_print):
    """Verify greet function prints the expected message."""
    greet()
    mock_print.assert_called_with("Hello, Python!")

@pytest.mark.parametrize("func,expected_output", [
    (hi, "hey"),
    (three, "three"),
    (two, "two"),
    (four, "four"),
    (five, "four"),  # Deliberate for demonstrating failure case
    (six, "six"),
    (seven, "seven"),
    (eight, "eight"),
    (nine, "nine"),
    (ten, "ten"),
    (eleven, "eleven"),
    (twelve, "12"),
    (thirteen, "13"),
    (fourteen, "14"),
    (fifteen, "15"),
    (sixteen, "15"),  # Deliberate for demonstrating failure case
])
def test_functions_return_expected_output(func, expected_output):
    """Check if functions return their expected output."""
    assert func() == expected_output

def test_greet_failure_case():
    """Ensure greet function fails correctly when the wrong message is expected."""
    with pytest.raises(AssertionError):
        assert greet() == "Goodbye, Python!"

@patch('example.external_dependency')
def test_external_dependency_called_correctly(mock_external_dependency):
    """Test if external dependency is called as expected."""
    function_with_external_dependency()
    mock_external_dependency.assert_called_once()

@patch('example.external_dependency', side_effect=Exception("External error"))
def test_external_dependency_failure(mock_external_dependency):
    """Check behavior when an external dependency fails."""
    with pytest.raises(Exception) as exc_info:
        function_with_external_dependency()
    assert str(exc_info.value) == "External error"

@pytest.fixture
def prepare_environment():
    """Setup and teardown for test environment."""
    setup_environment()
    yield
    teardown_environment()

def test_environment_dependent_feature(prepare_environment):
    """Test a feature that relies on the environment setup."""
    assert environment_dependent_feature() == "Expected Result"