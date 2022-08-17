document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawfiled = document.getElementById('withdraw-filed');
const newWithDrawStrign = withdrawfiled.value ;
const newWithDrawAmount = parseFloat(newWithDrawStrign);


const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerHTML;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

})