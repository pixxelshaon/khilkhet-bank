//log in event handler

document.getElementById('login-btn').addEventListener('click',function(){
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('transaction-area').style.opacity = '1';
});


//deposit button event handler

document.getElementById('deposit-btn').addEventListener('click',function(){

let depositAmount = document.getElementById('deposit-amount').value;
depositAmount = parseFloat(depositAmount);


let currentDeposit = document.getElementById('current-deposit').innerText;
currentDeposit = parseFloat(currentDeposit);

let totalDeposit = depositAmount + currentDeposit;

document.getElementById('current-deposit').innerText = totalDeposit;
document.getElementById('deposit-amount').value = '';

let currentBalance = document.getElementById('current-balance').innerText;
currentBalance = parseFloat(currentBalance);

let totalBalance = depositAmount + currentBalance;
document.getElementById('current-balance').innerText = totalBalance;


});

// withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click',function(){

    let withdrawAmount = document.getElementById('withdraw-amount').value;
    withdrawAmount = parseFloat(withdrawAmount);
    
    
    let currentWithdraw = document.getElementById('current-withdraw').innerText;
    currentWithdraw = parseFloat(currentWithdraw);
    
    let totalWithdraw = withdrawAmount + currentWithdraw;
    
    document.getElementById('current-withdraw').innerText = totalWithdraw;
    document.getElementById('withdraw-amount').value = '';
    
    let currentBalance = document.getElementById('current-balance').innerText;
    currentBalance = parseFloat(currentBalance);
    
    let totalBalance = currentBalance - withdrawAmount;
    document.getElementById('current-balance').innerText = totalBalance;
    
    
    });