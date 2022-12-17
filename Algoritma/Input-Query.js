const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = [];

for (const query of QUERY) {
  let count = 0;
  for (const element of INPUT) {
    if (element === query) {
      count++;
    }
  }
  output.push(count);
}

console.log(output);
