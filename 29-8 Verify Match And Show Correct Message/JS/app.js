/*                      29-8 Verify match and show correct message */

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

document.getElementById('verify-pin').addEventListener('click', function(){
    //console.log('verify pin clicked');
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typedNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        //console.log('correct pin');
        //const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        //console.log('incorrect pin');
        //const pinFailureMessage = document.getElementById('pin-failure');
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})