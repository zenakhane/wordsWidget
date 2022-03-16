function wordsFun(){

    let characters = [];
    let charactersNow;
    
    
    // function for the sentences entered
        function enterSentence(char){
                if(!characters.includes(char)){
                    charactersNow++
                   characters.push(char)
                   return true
                }
        }
    
        // function to get the words
    
        function wordsL(){
    return charactersNow;
        }
    
        
    return{
        enterSentence,
        wordsL
    }
    }