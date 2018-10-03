import readlineSync from 'readline-sync';

const numberOfLaps = 3;

const showGameGreeting = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

const isEven = number => number % 2 === 0;

export const playBrainGames = () => {
  showGameGreeting();
  console.log('\n');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};

export const playBrainEven = () => {
  showGameGreeting();
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = getUserName();
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

export const playBrainCalc = () => {

};
