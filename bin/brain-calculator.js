#!/usr/bin/env node

import readfileSync from 'readline-sync';

import cli from '../src/cli.js';
import { getRandomInt } from '../src/utils.js';

const userName = cli();

const MAX_ITERATIONS_COUNT = 3;
const condition = 'What is the result of the expression?';

const runGame = () => {
   let userCorrectAnswers = 0;

   console.log(condition);

   for (let j = 0; j < MAX_ITERATIONS_COUNT; j += 1) {
      const operations = ['+', '-', '*'];
      const operator = operations[getRandomInt(0, operations.length - 1)];

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

      console.log(`Question: ${question}`);

      const userAnswer = readfileSync.question('Your answer: ');
      const isCorrectAnswer = userAnswer === String(rightAnswer);

      if (!isCorrectAnswer) {
         console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
         console.log(`Let's try again, ${userName}!`)
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
