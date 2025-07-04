//קריאה וכתיבה פרומיסים וכו'.
import fs from "fs";

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            //   let arr = [];
            let jsonString;
            if (data) {
                try {
                    jsonString = JSON.parse(data);
                } catch (parseErr) {
                    return reject(parseErr);
                }
                resolve(jsonString)
            }
        });
    });
}


function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (writeErr) => {
            if (writeErr) reject("error weit file: "+writeErr);
            resolve("I wrote to the file successfully!");
        });
    })
}

function doesRiddleIdExist(filePath, riddleId) {
  return readFile(filePath)
           .then(riddles => riddles.some(r => r.id === riddleId));
}
//אם יהיה שימוש אם זה גם למשהו אחר צריך לשנות שזה לא רק רידל

export default {readFile ,writeFile, doesRiddleIdExist}