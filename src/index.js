import readlineSync from 'readline-sync';

export const askUserName = () => {
  const actual = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${actual}!\n`);
};

export const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const showRandomNumber = maxNumber => console.log(`Question: ${showRandomNumber(maxNumber)}`);

export const askUserAnswer = () => readlineSync.question('Your answer: ');
