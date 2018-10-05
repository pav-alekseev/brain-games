import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 1000;

const isPrime = (number) => {
  const firstPrime = 2;
  if (number < firstPrime) {
    return false;
  }
  if (number === firstPrime) {
    return true;
  }
  const iter = (divider) => {
    if (number % divider === 0) {
      return false;
    }
    if (divider > number / 2) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(firstPrime);
};

const gameIteration = () => {
  const question = getRandomNumber(0, maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame('Answer "yes" if given number is prime. Otherwise answer "no".',
  gameIteration);
