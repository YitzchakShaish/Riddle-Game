
import readline from "readline";
import fu from "../../utils/fileUtils.js";

const filePath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";




async function askRiddleData(filePath) {
  const id = await fu.askForUniqueIdToAdd(filePath);

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const riddle = { id };

    rl.question("Enter riddle name: ", (name) => {
      riddle.name = name;

      rl.question("Enter riddle description: ", (desc) => {
        riddle.taskDescription = desc;

        rl.question("Enter correct answer: ", (answer) => {
          riddle.correctAnswer = answer;

          rl.close();
          resolve(riddle);
        });
      });
    });
  });
}

createRiddle();

export default async function createRiddle() {
  const newRiddle = await askRiddleData(filePath);
  const riddles = await fu.readFile(filePath);
  riddles.push(newRiddle);
  await fu.writeFile(filePath, riddles);
  console.log("Riddle saved successfully!");
}
