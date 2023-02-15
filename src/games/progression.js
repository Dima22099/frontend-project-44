import runGame from '../index.js';

import { getRandomInt } from '../utils.js';

const getProgression = (startInt, step, progressionLength) => new Array(progressionLength)
  .fill(startInt)
  .map((el, index) => el + (step * index));

export const condition = 'What number is missing in the progression?';

const getParamsForRound = () => {
  const startProgressionInteger = getRandomInt(1, 30);
  const progressionStep = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 10);

  const progression = getProgression(startProgressionInteger, progressionStep, progressionLength);

  const randomElementInProgression = getRandomInt(0, progressionLength - 1);
  const rightAnswer = progression[randomElementInProgression];

  progression[randomElementInProgression] = '..';

  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

export default () => runGame(condition, getParamsForRound);
