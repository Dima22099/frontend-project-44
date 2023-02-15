import runGame from '../index.js';

import { getRandomInt } from '../utils.js';

const getGcd = (a, b) => {
  let biggest;
  let smallest;

  if (a > b) {
    [biggest, smallest] = [a, b];
  } else {
    [biggest, smallest] = [b, a];
  }

  let gcd;

  for (let j = 1; j <= smallest; j += 1) {
    const isSmallestInteger = Number.isInteger(smallest / j);
    const isBiggestInteger = Number.isInteger(biggest / j);

    if (isSmallestInteger && isBiggestInteger) {
      gcd = j;
    }
  }

  return gcd;
};

const condition = 'Find the greatest common divisor of given numbers.';

export const getParamsForRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 50);

  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);

  return [question, String(rightAnswer)];
};

export default () => runGame(condition, getParamsForRound);
