function reverseAlphabet(str) {
  const characters = str.split('');
  const reversedCharacters = characters.slice(0, -1).reverse();
  return reversedCharacters.join('') + characters[characters.length - 1];
}

const str = "NEGIE1";
console.log(reverseAlphabet(str));