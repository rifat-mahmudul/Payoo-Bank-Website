const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (event) =>{

    event.preventDefault(); // This is use for 'page not reload'.

    const phnNumber = document.getElementById('phnNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;

    // console.log(phnNumber.value);
    // console.log(pinNumber.value);

    if(phnNumber && pinNumber){

        console.log('You are logged in');
        window.location.href= './home.html'


        document.getElementById('phnNumber').value = "";
        document.getElementById('pinNumber').value = "";

    } else{
        alert('Please Enter your phone number and pin')

        document.getElementById('phnNumber').value = "";
        document.getElementById('pinNumber').value = "";
    }    //this is temporary


})