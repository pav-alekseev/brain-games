import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${actual}!`);
};
