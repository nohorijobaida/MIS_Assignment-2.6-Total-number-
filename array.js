function countNumbersGreaterThan600() {
    var numbers = [434, 545, 231, 7675, 543, 678];
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 600) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = "Total numbers greater than 600: " + count;
}


window.onload = function() {
    countNumbersGreaterThan600();
}