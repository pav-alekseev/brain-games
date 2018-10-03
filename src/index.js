import readlineSync from 'readline-sync';

const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

const isEven = number => number % 2 === 0;

export const playBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const playBrainEven = () => {
  const numberOfLaps = 3;

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log('\n');

  const iter = (currentLap) => {
    if (currentLap === numberOfLaps) {
      return `Congratulations, ${userName}!`;
    }
    const question = getRandomNum(20);
    console.log(`Question: ${question}`);
    const isEvenNumber = isEven(question) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (isEvenNumber === answer) {
      console.log('Correct!');
      return iter(currentLap + 1);
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber}'.\nLet's try again, ${userName}!`;
  };

  console.log(iter(0));
};
