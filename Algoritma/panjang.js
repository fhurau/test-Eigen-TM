const sentence = "Saya sangat senang mengerjakan soal algoritma"

const words = sentence.split(' ')

const longestWord = words.reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest
}, '')

console.log(longestWord)