/*                     29-3 Calculate phone cost using the same shared function */

//console.log('Phone.js added');

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    //console.log('Phone plus button clicked');
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberFiled.value = newPhoneNumber;
})