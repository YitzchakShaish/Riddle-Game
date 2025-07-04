import fu from 'file:///C:/Users/LENOVO/coors-arava/week_8/Riddle%20Game/utils/fileUtils.js';

function updateRiddle(filePath, updatedRiddle) {
  fu.doesRiddleIdExist(filePath, updatedRiddle.id).then(exists => {
    if (!exists) {
      console.log(`Riddle with ID ${updatedRiddle.id} not found. Update failed.`);
      return;
    }

    fu.readFile(filePath)
      .then((arr) => {
        const index = arr.findIndex(riddle => riddle.id === updatedRiddle.id);

        arr[index] = updatedRiddle; 

        fu.writeFile(filePath, arr)
          .then(() => {
            console.log(`Riddle with ID ${updatedRiddle.id} updated successfully.`);
          })
          .catch(err => {
            console.log("Error writing file:", err);
          });
      })
      .catch(err => {
        console.log("Error reading file:", err);
      });
  });
}


const updatedRiddle = {
  id: 100,
  name: "The Loud Echo",
  taskDescription: "I shout without a mouth. What am I?",
  correctAnswer: "echo"
};

const dbpath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";
updateRiddle(dbpath, updatedRiddle);


export default updateRiddle;