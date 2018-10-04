import {
  maxRandomNumber, showQuestion, getUserAnswer, getRandomNumber, getRandomExpression,
  isRightUserAnswer, playGame,
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

export default () => playGame('What is result of the expression?', gameIteration);
