/* tests */

QUnit.test('Below 19', function (assert) {
    assert.equal(convertNumeral(0), "zero", 'zero');
    assert.equal(convertNumeral(7), "seven", 'seven');
    assert.equal(convertNumeral(11), "eleven", 'eleven');
    assert.equal(convertNumeral(12), "twelve", 'twelve');
    assert.equal(convertNumeral(19), "nineteen", 'nineteen');
});