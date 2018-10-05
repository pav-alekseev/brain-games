import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxQuestionNumber = 20;

export const isEven = number => number % 2 === 0;

const gameIteration = () => {
  const question = getRandomNumber(0, maxQuestionNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame('Answer "yes" if number even otherwise answer "no"', gameIteration);
