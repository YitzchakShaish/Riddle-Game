import fu from 'file:///C:/Users/LENOVO/coors-arava/week_8/Riddle%20Game/utils/fileUtils.js';
import readline from "readline";

const dbpath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";


async function askRiddleData(filePath) {
  const id = await fu.askForExistingId(filePath);

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



async function updateRiddleIfExists(filePath) {
  try {
    const updatedRiddle = await askRiddleData(filePath);
    console.log(`update`);
    const riddles = await  fu.readFile(filePath);
    const index = await riddles.findIndex(riddle => riddle.id === updatedRiddle.id);
    console.log(`index `+index);
    
     riddles[index] =await updatedRiddle; 
     console.log(`rissles`);
     
  
    await fu.writeFile(filePath, riddles);
    console.log(`Riddle with ID ${updatedRiddle.id} updete successfully.`);
  } catch (err) {
    console.error("Failed to updete riddle:", err.message || err);
  }
}


updateRiddleIfExists(dbpath);


export default updateRiddleIfExists;