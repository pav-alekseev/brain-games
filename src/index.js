import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
};
