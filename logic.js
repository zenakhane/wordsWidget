function WordsFun(){

    let characters = [];
    let charactersNow;
    
    
    // function for the sentences entered
        function enterSentence(char){
                if(!characters.includes(char)){
                    charactersNow++
                   characters.push(char)
                   
                }
                return characters
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