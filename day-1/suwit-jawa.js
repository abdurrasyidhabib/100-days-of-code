var replay = true;
while (replay == true) {
  userChoice = prompt('pilih batu, gunting atau kertas?');
  var rand = Math.random();
  var index = -1;
  // precondition
  if (rand < 0.34) {
    compChoice = 'batu';
  } else if (rand >= 0.34 && rand < 0.67) {
    compChoice = 'gunting';
  } else {
    compChoice = 'kertas';
  }


  //win condition
  var res = '';
  if (userChoice == compChoice) {
    res = "DRAW";
  } else if (userChoice == 'batu') {
    res = (compChoice == 'gunting') ? 'You Win!' : 'You Lose';
  } else if (userChoice == 'kertas') {
    res = (compChoice == 'batu') ? 'You Win!' : 'You Lose';
  } else if (userChoice == 'gunting') {
    res = (compChoice == 'kertas') ? 'You Win!' : 'You Lose';
  } else {
    alert('invalid choice!');
  }

  alert('You choose   : ' + userChoice + '\nComputer choose  : ' + compChoice + '\n' + res);
 replay = confirm('Play again?');

}

alert('thanks for playing this game. ;)')