const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (event) =>{

    const phnNumber = document.getElementById('phnNumber');
    const pinNumber = document.getElementById('pinNumber');

    event.preventDefault(); // page not reload.

    console.log(phnNumber.value);
    console.log(pinNumber.value);

})