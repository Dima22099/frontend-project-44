import runGame from '../index.js';

import { getRandomInt } from '../utils.js';

const isPrime = (int) => {
  for (let j = 2; j < int; j += 1) {
    if (Number.isInteger(int / j)) {
      return false;
    }
  }

  return true;
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getParamsForRound = () => {
  const question = getRandomInt();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(condition, getParamsForRound);
