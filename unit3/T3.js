function countBs(str){
    let count = 0;
    for(const char of str){
        if(char === "B"){
            count++;
        }
    }
    return count;
}

console.log(countBs("Bob is big Bitch"));

function countChars(str , c){
    let count = 0;
    for(const char of str){
        if(char === c){
            count++;
        }
    }
    return count;
}

console.log(countChars("Bob is big Bitch" , "i"));