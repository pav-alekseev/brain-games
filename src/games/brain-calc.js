import {
  maxRandomNumber, showGameGreeting, showUserGreeting, showQuestion, showResult, getUserName,
  getUserAnswer, getRandomNumber, getRandomExpression, gameLoop, isRightUserAnswer,
} from '..';

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxRandomNumber);
  const secondNumber = getRandomNumber(maxRandomNumber);
  const questionExpression = getRandomExpression();
  showQuestion(questionExpression.show(firstNumber, secondNumber));
  const rightAnswer = questionExpression.calculate(firstNumber, secondNumber);
  const userAnswer = Number(getUserAnswer());
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => {
  showGameGreeting();
  console.log('What is result of the expression?\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
