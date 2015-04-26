var symbols = [
  {
    'code' : '&diams;',
    'color': 'red'
  },
  {
    'code' : '&spades;',
    'color': 'black'
  },
  {
    'code' : '&hearts;',
    'color': 'red'
  },
  {
    'code' : '&clubs;',
    'color': 'black'
  }
];

var i;
for (i = 1; i  <= 4; i++) {
  var randomNum = Math.floor(Math.random() * 4);
  var randomCardNum = Math.floor(Math.random() * 9 + 2);
  document.getElementById('card' + i).querySelector('.front').innerHTML = '<span>' + randomCardNum + symbols[randomNum].code + '</span>' + symbols[randomNum].code + '<span>' + randomCardNum + symbols[randomNum].code + '</span>';
  var nestedDivs = document.getElementById('card' + i).getElementsByTagName('div');
  var j;
  for (j = 0; j < nestedDivs.length; j++) {
    nestedDivs[j].style.color = symbols[randomNum].color;
  }
  document.getElementById('card' + i).querySelector('.back').style.color = '#fff';
}

var randomNum = Math.floor(Math.random() * 4 + 1);
document.getElementById('card' + randomNum).querySelector('.front').innerHTML = '<span>A' + symbols[randomNum - 1].code + '</span>' + symbols[randomNum - 1].code + '<span>A' + symbols[randomNum - 1].code + '</span>';
var nestedDivs = document.getElementById('card' + randomNum).getElementsByTagName('div');
var j;
for (j = 0; j < nestedDivs.length; j++) {
  nestedDivs[j].style.color = symbols[randomNum - 1].color;
}
document.getElementById('card' + randomNum).querySelector('.back').style.color = '#fff';