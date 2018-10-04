import {
  showQuestion, getUserAnswer, getRandomNumber, getRandomExpression,
  isRightUserAnswer, playGame,
} from '..';

const maxNumber = 20;

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const questionExpression = getRandomExpression();
  showQuestion(questionExpression.show(firstNumber, secondNumber));
  const rightAnswer = questionExpression.calculate(firstNumber, secondNumber);
  const userAnswer = Number(getUserAnswer());
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => playGame('What is result of the expression?', gameIteration);
