import AllRiddles from './riddles/AllRiddles.js';
import P from './classes/Player.js';
import { question } from 'readline-sync';
import chalk from 'chalk';



// import r1 from './riddles/r1.js';
// import r2 from './riddles/r2.js';
console.log(AllRiddles);
//AllRiddles[0].ask();

console.log(chalk.green(`Welcome to the Riddle Game! `))
const name = question(`What is your name? `)
console.log(`Hello, ${name}!`);

const player = new P.Player(name);

AllRiddles.forEach((riddle) => {
  const start =Date.now();
  riddle.ask();
  const end = Date.now();
  player.recordTime(start,end);
});
player.showStats();