function NumberText() {
    this.numCorrect = 0;
    this.numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
    var ulText = $('#numName');
    ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');

}
;

function Numbers(cookie) {
    Cookies.set('numbers', numbers, {expires: 128});
    var numberCookies = cookies.getJSON('numbers');
    var numbers = [];
    var hidden = 0;
    var ulNum = $('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>'); 
    }
}
;

function Number(word, digit, errorNum, placed) {
    this.word = word;
    this.digit = digit;
    this.errorNum = errorNum;
    this.placed = placed;
    numbers.push(number);
        
} 
