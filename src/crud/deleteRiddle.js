import fu from 'file:///C:/Users/LENOVO/coors-arava/week_8/Riddle%20Game/utils/fileUtils.js';

function deleteRiddleIfExists(filePath, riddleId) {
     fu.doesRiddleIdExist(filePath, riddleId).then(exists => {
      if (!exists) {
        console.log(`Riddle with ID ${riddleId} not found. Nothing deleted.`);
        return;
    }
    fu.readFile(filePath).then( riddles => {
        const filtered = riddles.filter(r => r.id !== riddleId);
        fu.writeFile(filePath, filtered)
          .then(() => {
            console.log(`Riddle with ID ${riddleId} deleted successfully.`);
          })
          .catch(err => {
            console.log("Error writing file:", err);
          });
      })
      .catch(err => {
        console.log("Error reading file:", err);
      });
    })
}



const dbpath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";
deleteRiddleIfExists(dbpath, 50)


export default deleteRiddleIfExists;