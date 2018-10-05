import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 20;

const expressions = [
  {
    calculate: (firstNumber, secondNumber) => firstNumber + secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} + ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber - secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} - ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber * secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} * ${secondNumber}`,
  },
];

export const getRandomExpression = () => expressions[getRandomNumber(0, expressions.length)];

const gameIteration = () => {
  const firstNumber = getRandomNumber(0, maxNumber);
  const secondNumber = getRandomNumber(0, maxNumber);
  const questionExpression = getRandomExpression();
  const rightAnswer = questionExpression.calculate(firstNumber, secondNumber).toString();
  return cons(questionExpression.toString(firstNumber, secondNumber), rightAnswer);
};

export default () => playGame('What is result of the expression?', gameIteration);
