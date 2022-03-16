
// input element
const sentence = document.querySelector('.sentence');
// button element
const addBtnElem = document.querySelector('.btn');
// display element
const wordElem = document.querySelector('.words1');




function display(){
        const words = sentence.value;
        const splitWords = words.split(" ");
        let wordsDisplay = '';
        for(var i = 0; i < splitWords.length; i++ ){
          const wordsIndex = splitWords[i]

        if(wordsIndex.length >= 5){
          wordsDisplay += `<mark style ="color:pink;">${wordsIndex}</mark>`
        } else{
                 wordsDisplay += wordsIndex + " "
        } 
}

        wordElem.innerHTML = wordsDisplay

}

addBtnElem.addEventListener('click',display)
