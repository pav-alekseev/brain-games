import readlineSync from 'readline-sync';

export const askUserName = () => {
  const actual = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${actual}!`);
};

export const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));
