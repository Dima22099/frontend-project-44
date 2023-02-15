#!/usr/bin/env node

import readfileSync from 'readline-sync';

import cli from '../src/cli.js';
import { isEven, getRandomInt } from '../src/utils.js';

const userName = cli();

const MAX_ITERATIONS_COUNT = 3;
const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const runGame = () => {
  let userCorrectAnswers = 0;

  console.log(condition);

  for (let j = 0; j < MAX_ITERATIONS_COUNT; j += 1) {
    const randomInt = getRandomInt();
    const rightAnswer = isEven(randomInt) ? 'yes' : 'no';

    console.log(`Question: ${randomInt}`);
    const userAnswer = readfileSync.question('Your answer: ');
    const isCorrectAnswer = userAnswer === rightAnswer

    if (!isCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return;
    }
    
    console.log('Correct!');
    userCorrectAnswers += 1;
  }

  if (userCorrectAnswers === MAX_ITERATIONS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  }
};

runGame();
