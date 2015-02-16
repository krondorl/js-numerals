/* tests */

QUnit.test("Test main", function (assert) {
    assert.equal(convertNumeral(0), "zero", "zero");
    assert.equal(convertNumeral(7), "seven", "seven");
    assert.equal(convertNumeral(11), "eleven", "eleven");
    assert.equal(convertNumeral(12), "twelve", "twelve");
    assert.equal(convertNumeral(19), "nineteen", "nineteen");
    assert.equal(convertNumeral(42), "forty-two", "forty-two");
    assert.equal(convertNumeral(111), "one hundred and eleven", "one hundred and eleven");
    assert.equal(convertNumeral(579), "five hundred and seventy-nine", "five hundred and seventy-nine");
    assert.equal(convertNumeral(1999), "nineteen hundred and ninety-nine", "nineteen hundred and ninety-nine");
    assert.equal(convertNumeral(2001), "two thousand and one", "two thousand and one");
});
