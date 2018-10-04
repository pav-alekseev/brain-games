import {
  showQuestion, getUserAnswer, getRandomNumber, isRightUserAnswer, playGame,
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

export default () => playGame('Find the greatest common divisor of given numbers.', gameIteration);
