/*                     29-4 (semi-advanced) Set Phone plus and minus button working */

//console.log('Case JS File Added');

/* 
1. 'addEventListener' to the 'btn-case-plus' button
2. Get the value inside the 'caseNumberField' (input field)
3. Convert the number to a 'parseInt' (integer)
4. Calculate the 'newCaseNumber'
5. Set the '.value' to the 'caseNumberField'
*/

/* 
document.getElementById('btn-case-plus').addEventListener('click', function(){
    //console.log('Case button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    //console.log(previousCaseNumber);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    //console.log('Case minus button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber -1;
    caseNumberField.value = newCaseNumber;

}) 
*/


/* 
function updateCaseNumber(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
}) 
*/

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


/* 
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    //console.log(newCaseNumber);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}) 
*/

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(true);
   
   updateCaseTotalPrice(newCaseNumber);
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber);
}) 
