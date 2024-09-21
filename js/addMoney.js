const addMoneyBtn = document.getElementById('addMoneyBtn');

addMoneyBtn.addEventListener('click', (event) =>{

    event.preventDefault();

    const addMoney = getInputFieldValueById('amountNumber');
    const pinNumber = getInputFieldValueById('pinNumber');
    const currentMoney = getTextFeildValueById('currentMoney');

    if(addMoney && pinNumber){
        const updateBalace = currentMoney + addMoney;
        document.getElementById('currentMoney').innerText = updateBalace;
    }

    else{
        alert('please Enter amount or number');
    }

})