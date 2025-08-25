/*                      29-6 Pin matcher overview Generate pin and display it */
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