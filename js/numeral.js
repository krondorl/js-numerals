/* numeral */

function convertNumeral(number) {
    var words = "";
    
    var unitsMap = [
        "zero", "one", "two", "three",
        "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"
    ];
    
    var tensMap = [
        "zero", "ten", "twenty", "thirty",
        "forty", "fifty", "sixty", "seventy",
        "eighty", "ninety"
    ];

    if (number >= 0 && number <= 19) {
        words = unitsMap[number];
    }
    
    if (number >= 20 && number <= 99) {
        var digit1 = parseInt(number.toString()[0]);
        var digit2 = parseInt(number.toString()[1]);
        
        if (digit2 == 0) {
            words = tensMap[digit1];
        } else {
            words = tensMap[digit1] + "-" + unitsMap[digit2];
        }
    }

    if (number >= 100 && number <= 999) {
        var digit1 = parseInt(number.toString()[0]);
        var digit2 = parseInt(number.toString()[1]);
        var digit3 = parseInt(number.toString()[2]);
        
        words = unitsMap[digit1]
            + " hundred and "
            + convertNumeral(digit2 * 10 + digit3);
    }
    
    if (number >= 1000 && number <= 9999) {
        var digit1 = parseInt(number.toString()[0]);
        var digit2 = parseInt(number.toString()[1]);
        var digit3 = parseInt(number.toString()[2]);
        var digit4 = parseInt(number.toString()[3]);
        
        if (digit2 == 0) {
            words = unitsMap[digit1] + " thousand "
        } else {
            words = convertNumeral(digit1 * 10 + digit2) + " hundred "
        }
        
        words += "and " + convertNumeral(digit3 * 10 + digit4);
    }
    
    return words;    
}

$(document).ready(function() {
    $('button').click(function(e) {
        var num = $('input').val();
        e.preventDefault();
        $('p').text(convertNumeral(num));
    });
});