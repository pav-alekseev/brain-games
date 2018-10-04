import {
  showGameGreeting, showUserGreeting, showQuestion, getUserName, getUserAnswer,
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
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
