import {
  showQuestion, getUserAnswer, getRandomNumber, isRightUserAnswer, isEven,
  playGame,
} from '..';

const maxQuestionNumber = 20;

const gameIteration = () => {
  const questionNumber = getRandomNumber(maxQuestionNumber);
  showQuestion(questionNumber);
  const rightAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer();
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => playGame('Answer "yes" if number even otherwise answer "no"', gameIteration);
