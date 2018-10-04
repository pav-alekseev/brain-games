import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfLaps = 3;

const showGameGreeting = () => console.log('Welcome to the Brain Games!');

const showUserGreeting = userName => console.log(`Hello, ${userName}!`);

const showQuestion = question => console.log(`Question: ${question}`);

const showResult = (userName, isWin) => {
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const gameLoop = (currentLap, gameIteration) => {
  if (currentLap === numberOfLaps) {
    return true;
  }

  const gamePair = gameIteration();
  const question = car(gamePair);
  const rightAnswer = cdr(gamePair);

  showQuestion(question);
  const userAnswer = getUserAnswer();
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return gameLoop(currentLap + 1, gameIteration);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export default (rules, gameIteration) => {
  showGameGreeting();
  console.log(rules);
  console.log('\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  if (!gameIteration) {
    return;
  }

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
