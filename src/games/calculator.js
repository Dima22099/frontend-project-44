import runGame from '../index.js';

import { getRandomInt } from '../utils.js';

const condition = 'What is the result of the expression?';

const getParamsForRound = () => {
  const operations = ['+', '-', '*'];
  const operationsCount = operations.length - 1;

  const operator = operations[getRandomInt(0, operationsCount)];

  const rightOperand = getRandomInt(0, 25);
  const leftOperand = getRandomInt(0, 25);

  const question = `${rightOperand} ${operator} ${leftOperand}`;

  let rightAnswer;

  switch (operator) {
    case '+':
      rightAnswer = rightOperand + leftOperand;
      break;

    case '-':
      rightAnswer = rightOperand - leftOperand;
      break;

    case '*':
      rightAnswer = rightOperand * leftOperand;
      break;

    default:
      throw new Error(`Неизвестная опреация ${operator}`);
  }

  return [question, String(rightAnswer)];
};

export default () => runGame(condition, getParamsForRound);
