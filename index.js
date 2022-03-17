// input element
const sentence = document.querySelector('.sentence');
// button element
const addBtnElem = document.querySelector('.btn');
// display element
const wordElem = document.querySelector('.words1');
// counter element
const counterElem = document.querySelector('.counter')
// checkbox element
const checkWords = document.querySelector('.charac')




function display(){
        const checkBtn = document.querySelector("input[name='wordie']:checked");
       const words = sentence.value;
        const splitWords = words.split(" ");
        let wordsDisplay = '';
        for(var i = 0; i < splitWords.length; i++ ){
          const wordsIndex = splitWords[i]

        if( wordsIndex.length >= 5){
          wordsDisplay += `<mark style ="background-color:CDFFF9;">${wordsIndex}</mark> `
        } else{
                 wordsDisplay += wordsIndex + ' '
        } 
}
        wordElem.innerHTML = wordsDisplay
        counterElem.innerHTML = splitWords.length
}



// function checkButton(){
//   const checkBtn = document.querySelector("input[name='wordie']:checked");
// }
// checkWords.addEventListener('click',checkButton)
addBtnElem.addEventListener('click',display)
