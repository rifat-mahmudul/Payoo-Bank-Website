const addMoneyBtn = document.getElementById('addMoneyBtn');

addMoneyBtn.addEventListener('click', (event) =>{

    event.preventDefault();

    const amountNumber = document.getElementById('amountNumber').value;
    
    const pinNumber = document.getElementById('pinNumber').value;

    const currentMoney = document.getElementById('currentMoney').innerText;

    const updateBalace = parseFloat(currentMoney) + parseFloat(amountNumber);
    
    if(updateBalace && pinNumber){
        document.getElementById('currentMoney').innerText = updateBalace;

        document.getElementById('amountNumber').value = "";
        document.getElementById('pinNumber').value = "";
    }

    else{
        alert('please Enter amount or number');

        document.getElementById('amountNumber').value = "";
        document.getElementById('pinNumber').value = "";
    }


})


const cashOut = document.getElementById('cashOut');

cashOut.addEventListener('click', () => {

    event.preventDefault();

    const amountNumber = document.getElementById('amountNumber').value;
    
    const pinNumber = document.getElementById('pinNumber').value;

    const currentMoney = document.getElementById('currentMoney').innerText;

    const updateBalace = parseFloat(currentMoney) - parseFloat(amountNumber);
    
    if(updateBalace && pinNumber){
        document.getElementById('currentMoney').innerText = updateBalace;

        document.getElementById('amountNumber').value = "";
        document.getElementById('pinNumber').value = "";
    }

    else{
        alert('please Enter amount or number');

        document.getElementById('amountNumber').value = "";
        document.getElementById('pinNumber').value = "";
    }


})