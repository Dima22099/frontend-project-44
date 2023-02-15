import runGame from '../index.js';

import { getRandomInt, isEven } from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getParamsForRound = () => {
  const question = getRandomInt();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(condition, getParamsForRound);
