import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 1000;
const firstPrimeNumber = 2;

const isPrime = (number) => {
  const iter = (divider) => {
    if (number % divider === 0) {
      return false;
    }
    if (divider > number / 2) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(firstPrimeNumber);
};

const gameIteration = () => {
  const question = getRandomNumber(firstPrimeNumber, maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame('Answer "yes" if given number is prime. Otherwise answer "no".',
  gameIteration);
