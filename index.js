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
  for (var i = 0; i < splitWords.length; i++) {
    const wordsIndex = splitWords[i]

    if (wordsIndex.length >= 5) {
      wordsDisplay += `<mark style ="background-color: purple;">${wordsIndex}</mark> `
    } else {
      wordsDisplay += wordsIndex + ' '
    }
  }
  wordElem.innerHTML = wordsDisplay
  counterElem.innerHTML = splitWords.length
}
addBtnElem.addEventListener('click', displayWords)


// const longWords = () => {
// let wordsDisplay = '';
//   for (var i = 0; i < splitWords.length; i++) {
//     const wordsIndex = splitWords[i]
//      if (element.length > longWord.length) {
  
//       longWord = element
    
//       longWord += `<mark style ="background-color:pink;">${element}</mark> `
//     }
//   }
// }

const checkButton = () => {
  const checkBtn = document.querySelector('.charac') ;
  const words = sentence.value;
  const splitWords = words.split(" ");
  let wordsDisplay = '';
  
  for (let i = 0; i < splitWords.length; i++) {
    const element = splitWords[i];
    if (element.length >= 8) {
      wordsDisplay += `<mark style ="background-color: ;">${element}</mark> `
    }
      if(!checkBtn.checked){
        wordsDisplay += element + ' '
      }
    wordElem.innerHTML = wordsDisplay
  
 }

}
element.addEventListener('click',checkButton)


  