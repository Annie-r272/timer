const args = process.argv;
let argsArray = args.slice(2);

for (let argsArr of argsArray){
  if (argsArr > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); }, argsArr*1000);
  } 
}

/* ________________ ????_______________

const args = process.argv;
let argsArray = args.slice(2);

for (let argsArr of argsArray){
  if (argsArr > 0 && (typeof argsArr === 'number')) {
    setTimeout(() => {
      process.stdout.write('\x07'); }, argsArr*1000);
  } 
}


*/

