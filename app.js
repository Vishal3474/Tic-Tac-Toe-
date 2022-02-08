let highest;
let secondHighest;

for(let i = 1; i > 0; i++) {
  const numberString = prompt('next number?');

  if(numberString === null) {
    break;
  }

  const number = +numberString;

  if(numberString === '' || isNaN(number)) {
    continue;
  }

  console.log(`user entered: ${numberString}`, `Number conversion: ${number}`);

  
  if(highest === undefined || number > highest) {
    highest = number;
  } else {
    if(number !== highest && (secondHighest === undefined || number > secondHighest)) {
      secondHighest = number;
    }
  }
}

if(secondHighest === undefined) {
  document.write('No second highest found.');
} else {
  document.write(`Second Highest number is ${secondHighest}`);
}