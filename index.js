//1
//RETURN THE ABSOLUTE VALUE OF A NUMBER
//IF THE VALUE IS NOT A NUMBER RETURN 'NULL'
function absoluteValue(num){
    if(typeof num === "number") {
        if(num < 0){
            return (num * -1);
        }else{
            return num
        }
    } else {
        return null
    }
}
console.log(absoluteValue("car"))

//2