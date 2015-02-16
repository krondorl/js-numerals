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
        /*
        var digit1 = parseInt(number.toString()[0]);
        var digit2 = parseInt(number.toString()[1]);
        var digit3 = parseInt(number.toString()[2]);
        */
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