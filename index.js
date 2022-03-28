// input element

const sentence = document.querySelector('.sentence');
// button element
const addBtnElem = document.querySelector('.btn');
// display element
const wordElem = document.querySelector('.words1');
// counter element
const counterElem = document.querySelector('.counter');
// checkbox element
const element = document.querySelector('.charac');




const displayWords = () => {
  const checkBtn = document.querySelector("input[name='wordie']:checked");
  const words = sentence.value;
  const splitWords = words.split(" ");
  let wordsDisplay = '';
  const longestWordOfThemAll = longerSent(words);
  for (var i = 0; i < splitWords.length; i++) {
    const wordsIndex = splitWords[i]

    if (wordsIndex.length >= 4) {
      if (longestWordOfThemAll.length == wordsIndex.length) {
        wordsDisplay += `<mark style ="background-color:green;">${wordsIndex}</mark> `

      } else {
        wordsDisplay += `<mark style ="background-color:purple;">${wordsIndex}</mark> `
      }
    } else {
      wordsDisplay += wordsIndex + ' '
    }
  }
  wordElem.innerHTML = wordsDisplay
  counterElem.innerHTML = 'There are ' + splitWords.length + ' words in this sentence'
}
addBtnElem.addEventListener('click', displayWords)


const longerSent = (sentence) => {
  const sentenceSplit = sentence.split(" ");
  let longestWord = ''
  for (let i = 0; i < sentenceSplit.length; i++) {
    if (sentenceSplit[i].length >= longestWord.length) {
      longestWord = sentenceSplit[i]
    }
  }

  return longestWord;
};

const checkButton = () => {
  const checkBtn = document.querySelector('.charac');
  const words = sentence.value;
  const splitWords = words.split(" ");
  let wordsD = '';
  console.log(longerSent(words))
  const longestWordOfThemAll = longerSent(words);

  for (let i = 0; i < splitWords.length; i++) {
    const elem = splitWords[i];
    if (longestWordOfThemAll.length == elem.length) { 
      wordsD += `<mark style ="background-color:green ;">${elem}</mark> `
    }

    if (!checkBtn.checked) {
      wordsD += elem + ' '
    }
    wordElem.innerHTML = wordsD

  }

}
element.addEventListener('click', checkButton)
