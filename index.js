
// input element
let sentence = document.querySelector(".sentence");
// button element
let AddBtnElem = document.querySelector(".btn");
// let errors = document.querySelector(".error");
// display element
let wordElem = document.querySelector(".words1");


function display (){
        //  sentence.innerHtml = ''
        if(sentence != ''){
                let words =  sentence.value 
            console.log(words)
        }   

}
AddBtnElem.addEventListener('click', display)
