/*                     29-4 (semi-advanced) Set Phone plus and minus button working */

//console.log('Phone.js added');

/* 
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    //console.log('Phone plus button clicked');
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberFiled.value = newPhoneNumber;
}) 
*/

function updatePhoneNumber(isIncrease){
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    //const newPhoneNumber = previousPhoneNumber + 1;
    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFiled.value = newPhoneNumber;

    return newPhoneNumber;
}


/* 
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
}) 
*/

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
});