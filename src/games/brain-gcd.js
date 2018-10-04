import {
  maxRandomNumber, showGameGreeting, showUserGreeting, showQuestion, showResult, getUserName,
  getUserAnswer, getRandomNumber, gameLoop, isRightUserAnswer, isEven,
} from '..';

const maxNumber = 100;

const getGCD

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  showQuestion(`${firstNumber} ${secondNumber}`);

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
