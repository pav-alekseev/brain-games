import readlineSync from 'readline-sync';

export const askUserName = () => readlineSync.question('May I have your name? ');

export const showGreeting = name => console.log(`Hello, ${name}!`);

export const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const showRandomNumber = maxNumber => console.log(`Question: ${showRandomNumber(maxNumber)}`);

export const askUserAnswer = () => readlineSync.question('Your answer: ');
