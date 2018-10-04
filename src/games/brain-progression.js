import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxBeginOfProgression = 10;
const maxNumberOfSteps = 10;
const lengthOfProgression = 10;

const makeProgression = (currentNumber, step, currentLength, questionStep) => {
  if (currentLength === lengthOfProgression) {
    return currentNumber;
  }
  const nextNumber = currentNumber + step;
  if (currentLength === questionStep) {
    return `.. ${makeProgression(nextNumber, step, currentLength + 1, questionStep)}`;
  }
  return `${currentNumber} ${makeProgression(nextNumber, step, currentLength + 1, questionStep)}`;
};

const gameIteration = () => {
  const beginOfProgression = getRandomNumber(maxBeginOfProgression);
  const step = getRandomNumber(maxNumberOfSteps);
  const questionStep = getRandomNumber(lengthOfProgression);
  const question = makeProgression(beginOfProgression, step, 0, questionStep);
  const rightAnswer = (beginOfProgression + step * questionStep).toString();
  return cons(question, rightAnswer);
};

export default () => playGame('What number is missing in this progression?', gameIteration);
