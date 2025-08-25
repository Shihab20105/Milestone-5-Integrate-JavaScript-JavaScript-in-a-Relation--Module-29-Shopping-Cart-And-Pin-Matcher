/*                      29-7 Use event bubble to create calculator and clear */
//console.log('Added app.js file');


function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        //console.log('Pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //console.log(pin);

    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    //console.log('Calculator button clicked');
    //console.log(event.target.innerText);
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        //console.log(number);
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
           //console.log(previousTypeNumber);
           const digits = previousTypeNumber.split('');
           digits.pop();
           const remainingDigits = digits.join('');
           typeNumberField.value = remainingDigits;
        }
    }
    else{
        //const typeNumberField = document.getElementById('typed-numbers');
        //const previousTypeNumber = typeNumberField.value;
        const newTypedNumber = previousTypeNumber + number;
        //typeNumberField.value = number;
        typeNumberField.value = newTypedNumber;
    }
})