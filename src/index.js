import readlineSync from 'readline-sync';

const numberOfLaps = 3;

const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

const isEven = number => number % 2 === 0;

export const playBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log('\n');

  const iter = (currentLap) => {
    if (currentLap === numberOfLaps) {
      return true;
    }
    const question = getRandomNum(20);
    console.log(`Question: ${question}`);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === answer) {
      console.log('Correct!');
      return iter(currentLap + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  };

  const isWin = iter(0);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
