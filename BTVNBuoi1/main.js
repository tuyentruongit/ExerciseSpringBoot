// Bai 1:
function calculateFactorial(a){
    let number = a;
    for(let i = a-1;i>0;i--){
        number=number*i;
    }
    return number;
}
console.log(calculateFactorial(2));
// Bai 2 :

function reverseString(inputStr){
    let output = '';
    for(let i = inputStr.length -1 ; i>=0;i--){
        output+=inputStr[i];
    }
    return output;
}console.log(reverseString('Trương Văn Tuyên'));

// Bai 3 
function translate(idCountry){
    switch(idCountry){
        case '0084':{
            console.log('Xin chào')
            break;
        }
        case '0082':{
            console.log('an-nyeong-ha-se-yo')
            break;
        }
        case '007':{
            console.log('Zdravstvuyte')
            break;
        }
        case '001':{
            console.log('Hello')
        break;
        }
        case '0081':{
            console.log('Konnichiwa')
            break;
        }
    }
}
translate('0084')
// Bai 4

function splitString(inputStr){
    let output = "";
    if(inputStr.length>15){
        for(let i = 0 ; i<10 ; i++){
            output+=inputStr[i];

        }
        return output
    }
    return inputStr;
}
console.log (splitString('Nguyễn Trần Trung Quân'));

