import {
  maxRandomNumber, showGameGreeting, showUserGreeting, showQuestion, showResult, getUserName,
  getUserAnswer, getRandomNumber, gameLoop, isRightUserAnswer, isEven,
} from '..';

const gameIteration = () => {
  const questionNumber = getRandomNumber(maxRandomNumber);
  showQuestion(questionNumber);
  const rightAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer();
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => {
  showGameGreeting();
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
