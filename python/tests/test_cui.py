import pytest
from cui_gt import validate_cui, InvalidCUI, is_valid_cui

VALID = "5486270650101"
INVALID = "5486270650102"

def test_valid_cui():
    assert is_valid_cui(VALID)

def test_invalid_cui():
    assert not is_valid_cui(INVALID)
    with pytest.raises(InvalidCUI):
        validate_cui(INVALID)
