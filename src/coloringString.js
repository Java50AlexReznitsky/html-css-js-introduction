function coloringString(str1, str2){
    const strAr1 = Array.from(str1);
    const strAr2 = Array.from(str2);
    if(str1.length != str2.length){
        return "Error: Strings must have equal length"
    }
    return strAr2.map(function(char, index){
        if(char === strAr1[index]){
            return "green"
        }
        else if(strAr1.includes(char)){
            return "yellow"
        }else{
            return "red"
        }
    })
}