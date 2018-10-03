import readlineSync from 'readline-sync';

const askUser = question => readlineSync.question(question);

const showToUser = text => console.log(text);

const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const playBrainGames = () => {
  showToUser('Welcome to the Brain Games!\n');
  const name = askUser('May I have your name? ');
  showToUser(`Hello, ${name}!`);
};

export const playBrainEven = () => {
  showToUser('Welcome to the Brain Games!');
  showToUser('Answer "yes" if number even otherwise answer "no"\n');

  const name = askUser('May I have your name? ');
  showToUser('\n');

  const iter = (currentLap) => {
    if (currentLap === 3) {
      return `Congratulations, ${name}!`;
    }
    const number = getRandomNum(20);
    showToUser(`Question: ${number}`);
    const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';
    const answer = askUser('Your answer: ');
    if (isEvenNumber === answer) {
      showToUser('Correct!');
      return iter(currentLap + 1);
    }
    const correctAnswer = (answer === 'yes' ? 'no' : 'yes');
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
  };

  return iter(0);
};
