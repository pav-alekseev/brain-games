import readlineSync from 'readline-sync';

export const askUser = question => readlineSync.question(question);

export const showToUser = text => console.log(text);

export const getRandomNum = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));
