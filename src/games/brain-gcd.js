import {
  showGameGreeting, showUserGreeting, showQuestion, showResult, getUserName, getUserAnswer,
  getRandomNumber, gameLoop, isRightUserAnswer,
} from '..';

const maxNumber = 100;

const getGCD = (firstNumber, secondNumber) => {
  if (firstNumber === 0 && secondNumber === 0) {
    return 0;
  }
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    return getGCD(firstNumber - secondNumber, secondNumber);
  }
  return getGCD(firstNumber, secondNumber - firstNumber);
};

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  showQuestion(`${firstNumber} ${secondNumber}`);
  const rightAnswer = getGCD(firstNumber, secondNumber);
  const userAnswer = Number(getUserAnswer());
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => {
  showGameGreeting();
  console.log('Find the greatest common divisor of given numbers.\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
