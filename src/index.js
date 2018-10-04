import readlineSync from 'readline-sync';

const numberOfLaps = 3;

export const maxRandomNumber = 20;

const expressions = [
  {
    calculate: (firstNumber, secondNumber) => firstNumber + secondNumber,
    show: (firstNumber, secondNumber) => `${firstNumber} + ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber - secondNumber,
    show: (firstNumber, secondNumber) => `${firstNumber} - ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber * secondNumber,
    show: (firstNumber, secondNumber) => `${firstNumber} * ${secondNumber}`,
  },
];

export const showGameGreeting = () => console.log('Welcome to the Brain Games!');

export const showUserGreeting = userName => console.log(`Hello, ${userName}!`);

export const showQuestion = question => console.log(`Question: ${question}`);

export const showResult = (userName, isWin) => {
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const getRandomExpression = () => expressions[getRandomNumber(expressions.length)];

export const isRightUserAnswer = (rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export const isEven = number => number % 2 === 0;

export const gameLoop = (currentLap, gameIteration) => {
  if (currentLap === numberOfLaps) {
    return true;
  }
  return gameIteration() ? gameLoop(currentLap + 1, gameIteration) : false;
};

export const playGame = (rules, gameIteration) => {
  showGameGreeting();
  console.log(rules);
  console.log('\n');

  const userName = getUserName();
  showUserGreeting(userName);
  console.log('\n');

  const isWin = gameLoop(0, gameIteration);
  showResult(userName, isWin);
};
