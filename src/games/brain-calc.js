import {
  showGameGreeting, showUserGreeting, showQuestion, showResult, getUserName, getUserAnswer,
  getRandomExpression, gameLoop, isRightUserAnswer,
} from '..';

const gameIteration = () => {
  const questionExpression = getRandomExpression();
  showQuestion(questionExpression);
  const rightAnswer = questionExpression.calculate();
  const userAnswer = Number(getUserAnswer());
  return isRightUserAnswer(rightAnswer, userAnswer);
};

export default () => {
  showGameGreeting();
  console.log('What is result of the expression?\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
