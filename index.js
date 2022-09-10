import kuler from 'kuler';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

// include first stretch to-do
const answerOfAsk = 'Which color would you prefer?';
if (process.argv[2] === 'ask') {
  console.log(answerOfAsk);
} else {
  console.log(
    kuler(
      `###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`,
      color,
    ),
  );
}
