
// 
export function ShowPuzzleAndCalculateTime(fn, player) {
       const start = Date.now();
       fn();
       const end = Date.now();
       player.recordTime(start, end)
}
