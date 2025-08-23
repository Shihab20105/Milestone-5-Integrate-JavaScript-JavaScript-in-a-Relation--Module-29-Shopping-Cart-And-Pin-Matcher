/*                      29-1 Module Overview and shopping cart increase case count */

//console.log('Case JS File Added');

document.getElementById('btn-case-plus').addEventListener('click', function(){
    //console.log('Case button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    //console.log(previousCaseNumber);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    
})