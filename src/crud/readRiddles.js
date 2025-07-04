import fu from 'file:///C:/Users/LENOVO/coors-arava/week_8/Riddle%20Game/utils/fileUtils.js';

function readRiddles(filePath) {
  return fu.readFile(filePath)
    .then(res => {
      console.log("Riddles loaded:", res);
      return res;
    })
    .catch(err => {
      console.log("Error reading riddles:", err);
      throw err; // כדי לא לעצור את השרשרת
    });
}




const dbpath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";

async function readOneRiddle() {
    const riddles = await readRiddles(dbpath);
    console.log(riddles[0]); 
}

readOneRiddle();


export default readRiddles;