import fu from 'file:///C:/Users/LENOVO/coors-arava/week_8/Riddle%20Game/utils/fileUtils.js';
const dbpath = "C:\\Users\\LENOVO\\coors-arava\\week_8\\Riddle Game\\riddles\\riddles_open.txt";

async function deleteRiddleIfExists(filePath) {
  try {
    const riddleId = await fu.askForExistingId(filePath);
    const riddles = await fu.readFile(filePath);
    const filtered = riddles.filter(r => r.id !== riddleId);
    await fu.writeFile(filePath, filtered);
    console.log(`Riddle with ID ${riddleId} deleted successfully.`);
  } catch (err) {
    console.error("Failed to delete riddle:", err.message || err);
  }
}

async function printAllRiddleIds(filePath) {
  try {
    const riddles = await fu.readFile(filePath);
    const ids = riddles.map(r => r.id);
    console.log("Existing IDs:", ids.join(", "));
  } catch (err) {
    console.error("Failed to read or print riddle IDs:", err.message || err);
  }
}



printAllRiddleIds(dbpath);
deleteRiddleIfExists(dbpath)


export default deleteRiddleIfExists;