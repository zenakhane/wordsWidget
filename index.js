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




const display = () => {
  const checkBtn = document.querySelector("input[name='wordie']:checked");
  const words = sentence.value;
  const splitWords = words.split(" ");
  let wordsDisplay = '';
  for (var i = 0; i < splitWords.length; i++) {
    const wordsIndex = splitWords[i]

    if (wordsIndex.length >= 5) {
      wordsDisplay += `<mark style ="background-color:CDFFF9;">${wordsIndex}</mark> `
    } else {
      wordsDisplay += wordsIndex + ' '
    }
  }
  wordElem.innerHTML = wordsDisplay
  counterElem.innerHTML = splitWords.length
}
addBtnElem.addEventListener('click', display)


const checkButton = () => {
  const checkBtn = document.querySelector("input[name='wordie']:checked");
  const words = sentence.value;
  const splitWords = words.split(" ");
  let wordsDisplay = '';

  for (let i = 0; i < splitWords.length; i++) {
    const element = splitWords[i];
    if (element.length >= 5) {
      checkBtn.style.display = 'none';
      wordsDisplay += `<mark style ="background-color:CDFFF9;">${element}</mark> `
    }
    else {
      checkBtn.checked = false;
      console.log(checkBtn.checked)
    }
      wordElem.innerHTML = wordsDisplay

  }
}
element.addEventListener('click', checkButton)
