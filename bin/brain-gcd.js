#!/usr/bin/env node

import readfileSync from 'readline-sync';

import cli from '../src/cli.js';
import { getRandomInt } from '../src/utils.js';

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

const userName = cli();

const MAX_ITERATIONS_COUNT = 3;
const condition = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
   let userCorrectAnswers = 0;

   console.log(condition);

   for (let j = 0; j < MAX_ITERATIONS_COUNT; j += 1) {
      const a = getRandomInt(1, 100);
      const b = getRandomInt(1, 50);

      const question = `${a} ${b}`;
      const rightAnswer = getGcd(a, b);

      console.log(`Question: ${question}`);
      const userAnswer = readfileSync.question('Your answer: ');
      const isCorrectAnswer = userAnswer === String(rightAnswer);

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
}

runGame();