import readlineSync from 'readline-sync';

export const askUserName = () => readlineSync.question('May I have your name? ');

export const showGreeting = name => console.log(`Hello, ${name}!`);

export const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const showQuestionNumber = number => console.log(`Question: ${number}`);

export const askUserAnswer = () => readlineSync.question('Your answer: ');

export const playGame = (userName) => {
  function iter(currentLap) {
    if (currentLap === 3) {
      return `Congratulations, ${userName}!`;
    }
    const number = getRandomNum(20);
    showQuestionNumber(number);
    const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';
    const answer = askUserAnswer(number);
    if (isEvenNumber === answer) {
      console.log('Correct!');
      return iter(currentLap + 1);
    }
    const correctAnswer = (answer === 'yes' ? 'no' : 'yes');
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return iter(0);
};
