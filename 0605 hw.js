var numText = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var numCorrect = 0;
var secLeft = 30;
var correct=0;
var wrong=0;

exports.Numbers = function (numbersCookie, numCorrectCookie) {
    console.log(numbersCookie);
    if (numCorrectCookie === null) {
        numCorrect = 0;
    } else {
        numCorrect = numCorrectCookie;
    }
    
    if (numbersCookie === null) {
        for (var i = 0; i < numText.length; i++) {
            var number = new Number(numText[i], i, 0, false);
            
            numbers.push(number);
        }
    } else {
        numbers = numbersCookie;
    }
    this.initGame = initGame();
    console.log(numbers);
};
exports.initGame = function() {
    console.log("initializing");
    var ulText = $('#numName');
    var ulNum = $('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
        if (numbers[i].placed) {
            $("#n" + i).hide();
        }
    }
    addDragNDrop();
    startInterval();
};