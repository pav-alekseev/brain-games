import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxBeginOfProgression = 10;
const maxNumberOfSteps = 10;
const lengthOfProgression = 10;

const createQuestion = (begin, step, length, questionIndex) => {
  const iter = (counter) => {
    const current = begin + step * counter;
    if (counter === length) {
      return current;
    }
    if (counter === questionIndex) {
      return `.. ${iter(counter + 1)}`;
    }
    return `${current} ${iter(counter + 1)}`;
  };
  return iter(0);
};

const gameIteration = () => {
  const beginOfProgression = getRandomNumber(0, maxBeginOfProgression);
  const step = getRandomNumber(0, maxNumberOfSteps);
  const questionIndex = getRandomNumber(0, lengthOfProgression);
  const question = createQuestion(beginOfProgression, step, lengthOfProgression, questionIndex);
  const rightAnswer = (beginOfProgression + step * questionIndex).toString();
  return cons(question, rightAnswer);
};

export default () => playGame('What number is missing in this progression?', gameIteration);
