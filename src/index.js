import readlineSync from 'readline-sync';

import cli from './cli.js';

export default (condition, getGameParams) => {
  const userName = cli();
  console.log(condition);

  let userCorrectAnswerCount = 0;

  while (userCorrectAnswerCount < 3) {
    const [question, rightAnswer] = getGameParams();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = userAnswer === rightAnswer;

    if (!isCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
    userCorrectAnswerCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
