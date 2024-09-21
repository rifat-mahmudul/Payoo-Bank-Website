const cashOut = document.getElementById('cashOut');

cashOut.addEventListener('click', () => {

    event.preventDefault();

    const amountNumber = getInputFieldValueById('amountNumber');
    const pinNumber = getInputFieldValueById('pinNumber');
    const currentMoney = getTextFeildValueById('currentMoney');
    
    if(amountNumber && pinNumber){
        const updateBalance = currentMoney - amountNumber;
        document.getElementById('currentMoney').innerText = updateBalance;
    }

    else{
        alert('please Enter amount or number');
    }

})