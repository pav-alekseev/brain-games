import {
  maxRandomNumber, showQuestion, getUserAnswer, getRandomNumber, isRightUserAnswer, isEven,
  playGame,
} from '..';

const gameIteration = () => {
  const questionNumber = getRandomNumber(maxRandomNumber);
  showQuestion(questionNumber);
  const rightAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer();
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => playGame('Answer "yes" if number even otherwise answer "no"', gameIteration);
