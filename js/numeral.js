/* numeral */

function convertNumeral(num) {
    return "zero";
}

$(document).ready(function() {
    $('button').click(function(e) {
        var num = $('input').val();
        e.preventDefault();
        $('p').text(convertNumeral(num));
    });
});