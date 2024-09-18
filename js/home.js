const addMoneyBtn = document.getElementById('addMoneyBtn');

addMoneyBtn.addEventListener('click', (event) =>{

    event.preventDefault();

    const amountNumber = document.getElementById('amountNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;

    console.log(amountNumber, pinNumber);

    console.log("money added")


})