// const d = 115;

// console.log(`masz ${d} lat`);

const prompt = require('prompt');
const enteredNumber = Math.floor((Math.random() * 10) + 1);

prompt.start();

prompt.get(['number'], function (err, result) {
  if (result.number ==parseInt(enteredNumber) && enteredNumber !== '') {
    console.log(`Brawo!!! ${enteredNumber} = ${result.number}`);
  } else {
    console.log(`${enteredNumber} nie równa się ${result.number}, spróbuj jeszcze raz :)`);
  };
});

