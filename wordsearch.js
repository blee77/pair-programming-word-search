const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const invertedLetters = [];
   
  for (let i = 0; i < letters[0].length; i++) {
    const colArr = [];
    for (let j = 0; j < letters.length; j++) {
      colArr.push(letters[j][i]);
    }
   
    invertedLetters.push(colArr);
  }
    
    
  const verticalJoin = invertedLetters.map(cs => cs.join(''));
    
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  return false;
};
    
  
  
console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'WEFMHFBDZ'));//false
  
module.exports = wordSearch;