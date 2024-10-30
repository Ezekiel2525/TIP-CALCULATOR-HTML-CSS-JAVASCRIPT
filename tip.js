const amtInput = document.getElementById('amtTotalInput');
const tipInput = document.getElementById('tipTotalInput');
const increasePeople = document.getElementById('increasepeople');
const decreasePeople = document.getElementById('decreasepeople');
const numberofPeopleDiv = document.getElementById('numberofpeople');
const perPersonTotalDiv = document.getElementById('perpersonTotal');
const amtErr = document.getElementById('amterror');
const tipErr = document.getElementById('tiperror');


//we have to get the number of people first. typecast the number
let numspeople = Number(numberofPeopleDiv.innerText)

//calclate total bill per person
const calculateTotalBill = () => {
    //get the value of the bill from the user input field
    const userAmount = Number(amtInput.value);

    //get tip from user and convert to percentage by dividing by 100
    const tipPercentage = Number(tipInput.value) / 100;

    //get total tip Amount 
    const tipAmountTotal = userAmount * tipPercentage

    //get total bill Amount
    const totalAmount = userAmount + tipAmountTotal

    //get per person total by dividing total amount by number of people
    const totalPerperson = totalAmount / numspeople

    //update total per person and show it to the user
    perPersonTotalDiv.innerText = `$${totalPerperson.toFixed(2)}`
}

//To calculate the total amount between several people

increasePeople.addEventListener('click', (event) => {
    event.stopPropagation();
    //increment the number of people
    numspeople += 1;

    //update the number of people and show it to the user
    numberofPeopleDiv.innerText = numspeople;

    //calculate the total amount based on the number of people
    calculateTotalBill();
})

//to calculate the total amount between fewer people
decreasePeople.addEventListener('click', (event) => {
    event.stopPropagation();
    //guard clause
    //we can not  negative or zero people sharing a bill, so we must stop at 1
    if(numspeople <= 1){
        return
    }

    //decrease the number of people
    numspeople -= 1 

    //update the number of people and show it to the user
    numberofPeopleDiv.innerText = numspeople

    //calculate the total amount based on the number of people
    calculateTotalBill();
})