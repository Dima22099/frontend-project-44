#!/usr/bin/env node

import readfileSync from 'readline-sync';

import cli from '../src/cli.js';
import { getRandomInt } from '../src/utils.js';

const getProgression = (startInt, step, progressionLength) => new Array(progressionLength)
   .fill(startInt)
   .map((el, index) => el + (step * index));

const userName = cli();

const MAX_ITERATIONS_COUNT = 3;
const condition = 'What number is missing in the progression?';

const runGame = () => {
   let userCorrectAnswers = 0;

   console.log(condition);

   for (let j = 0; j < MAX_ITERATIONS_COUNT; j += 1) {
      const startProgressionInteger = getRandomInt(1, 30);
      const progressionStep = getRandomInt(1, 10);
      const progressionLength = getRandomInt(5, 10);

      const progression = getProgression(startProgressionInteger, progressionStep, progressionLength);

      const randomElementInProgression = getRandomInt(0, progressionLength - 1);
      const rightAnswer = progression[randomElementInProgression];

      progression[randomElementInProgression] = '..';

      const question = progression.join(' ');
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
};

runGame();