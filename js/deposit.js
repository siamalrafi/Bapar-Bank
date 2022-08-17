document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const currentTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentTotal;



    depositFiled.value = '';
})