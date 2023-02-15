#!/usr/bin/env node

import readfileSync from 'readline-sync';

import cli from '../src/cli.js';
import { getRandomInt } from '../src/utils.js';

const isPrime = (int) => {
   for (let j = 2; j < int; j += 1) {
      if (Number.isInteger(int / j)) {
         return false;
      }
   }

   return true;
};

const userName = cli();

const MAX_ITERATIONS_COUNT = 3;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGame = () => {
   let userCorrectAnswers = 0;

   console.log(condition);

   for (let j = 0; j < MAX_ITERATIONS_COUNT; j += 1) {
      const randomInt = getRandomInt();
      const rightAnswer = isPrime(randomInt) ? 'yes' : 'no';

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
