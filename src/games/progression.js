import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxBeginOfProgression = 10;
const maxNumberOfSteps = 10;
const lengthOfProgression = 10;

const createQuestion = (currentNumber, step, currentLength, questionStep) => {
  if (currentLength === lengthOfProgression) {
    return currentNumber;
  }
  const nextNumber = currentNumber + step;
  if (currentLength === questionStep) {
    return `.. ${createQuestion(nextNumber, step, currentLength + 1, questionStep)}`;
  }
  return `${currentNumber} ${createQuestion(nextNumber, step, currentLength + 1, questionStep)}`;
};

const gameIteration = () => {
  const beginOfProgression = getRandomNumber(0, maxBeginOfProgression);
  const step = getRandomNumber(0, maxNumberOfSteps);
  const questionStep = getRandomNumber(0, lengthOfProgression);
  const question = createQuestion(beginOfProgression, step, 0, questionStep);
  const rightAnswer = (beginOfProgression + step * questionStep).toString();
  return cons(question, rightAnswer);
};

export default () => playGame('What number is missing in this progression?', gameIteration);
