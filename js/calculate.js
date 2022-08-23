// Function of Get input field value
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

// Function of Get Text field value
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const elementValue = parseFloat(textElementValueString);
    return elementValue;
}

// Function of set text element value
function setElementValue(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

//Calculation of player expenses
function calculatePlayerExpenses() {
    const selectedNumber = getTextElementValueById('selected-number');

    const perPlayerAmount = getInputFieldValueById('player-amount-field');
    const playerExpensesValue = getTextElementValueById('player-expenses');

    //Error Handling
    if (isNaN(perPlayerAmount)) {
        alert('Please Insert a Number');
    }
    else if (perPlayerAmount < 0) {
        alert('Please Enter a Positive Number');
    }
    else {
        const playerExpenses = perPlayerAmount * selectedNumber;
        setElementValue('player-expenses', playerExpenses);
        return playerExpenses;
    }
}

//add Event Listener for calculate Button
document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerExpenses = calculatePlayerExpenses();


})

//add Event Listener for calculate total Button
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpenses = calculatePlayerExpenses();

    const managerAmount = getInputFieldValueById('manager-field');
    const coachAmount = getInputFieldValueById('coach-field');

    //Error Handling
    if (isNaN(managerAmount) || isNaN(coachAmount)) {
        alert('Please Insert a Number');
    }
    else if (managerAmount < 0 || coachAmount < 0) {
        alert('Please Enter a Positive Number');
    }
    else {
        const calculateTotal = getTextElementValueById('calculate-total');
        const calculateTotalCost = playerExpenses + managerAmount + coachAmount;
        setElementValue('calculate-total', calculateTotalCost);
    }

})