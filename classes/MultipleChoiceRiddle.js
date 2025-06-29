
import { Riddele } from "./Riddele.js";
import chalk from "chalk";
import {question} from "readline-sync";

class MultipleChoiceRiddle extends Riddele {
  constructor(id, name, riddeleStarts, taskDescription, correctAnswer, choices) {
    super(id, name, riddeleStarts, taskDescription, correctAnswer);
    this.choices = choices;
  }

  ask() {
    let answerIndex = -1;

    while (this.choices[answerIndex] !== this.correctAnswer) {
      console.log(chalk.blue(this.taskDescription));
      this.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
      });

      const answer =question(
        chalk.yellow("\nPlease enter your choice (only number): ")
      );

      answerIndex = parseInt(answer) - 1;

      if (
        isNaN(answerIndex) ||
        answerIndex < 0 ||
        answerIndex >= this.choices.length
      ) {
        console.log(chalk.red("Invalid input, please enter a valid number."));
        continue;
      }

      if (this.choices[answerIndex] === this.correctAnswer) {
        console.log(chalk.green("Correct answer!"));
      } else {
        console.log(chalk.red("Wrong answer, please try again."));
      }
    }
  }
}

export { MultipleChoiceRiddle };
