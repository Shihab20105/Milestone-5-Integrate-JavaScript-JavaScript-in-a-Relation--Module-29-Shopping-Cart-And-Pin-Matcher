/*                     29-4 (semi-advanced) Set Phone plus and minus button working */

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