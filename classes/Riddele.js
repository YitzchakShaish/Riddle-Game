import { question } from "readline-sync";
import chalk from 'chalk';


class Riddele{
    constructor(id, name, riddeleStarts, taskDescription, correctAnswer){
        this.id = id;
        this.riddeleStarts = riddeleStarts
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(){
        let enswer;
        // let now = new Date();
        // let time = now.getSeconds();    
        // console.log(time)
        while(enswer!== this.correctAnswer){
            enswer = question(chalk.blue(this.taskDescription +" " ));
            // for(let i =0; i< 100000000; i++){
            //     let newTime = now.getSeconds();
            //      console.log(newTime)
            //     if(time+5<=newTime){
            //         console.log(chalk.red('Too slow! 5 seconds penalty applied.'))
            //         break;
            //     }
            // }
            if(enswer === this.correctAnswer){
                console.log(chalk.green(`Correct answer!`));
            }
            else {
                console.log(chalk.red(`Wrong answer, please try again.`));
            }
        }
    }
   
}
export {Riddele};