/*                     29-5 (advanced) Calculate subtotal tax amount and final total */

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



function getTexElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


function setTexElementValueById(elementId, value){
    const subTotalElement = document.getElementById(/* 'sub-total' */ elementId);
    subTotalElement.innerText = /* currentSubTotal */ value;
}

function calculateSubTotal(){
    //calculate total
    const currentPhoneTotal = getTexElementValueById('phone-total');
    const currentCaseTotal = getTexElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentSubTotal);
    /* 
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal; 
    */

    //calculate tax
    /* 
    const taxAmount = currentSubTotal * 0.1;
    setTexElementValueById('tax-amount', taxAmount); 
    */
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTexElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount);
}