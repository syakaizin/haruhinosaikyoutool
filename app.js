let sumMoney = 0;
let displaySumMoney = "0ゲイツ"
document.getElementById('sum').textContent = displaySumMoney;

function sumSetMoney(setCount) {
    sumMoney += 2500;
    if (setCount >= 2) {
        sumMoney = sumMoney + 3000*setCount;
    }
}

function sum (idx) {
    switch (idx) {
        case 1:
            sumMoney += 1000;
            break;
        case 2:
            sumMoney += 2000;
            break;
        case 3:
            sumMoney += 3500;
            break;
    }
}

function onDisplay(isUseCard) {
    sumMoney = sumMoney*1.1 //税
    sumMoney = sumMoney*1.1 //サービス料金
    if (isUseCard) {
        sumMoney = sumMoney*1.05 // カードだと5%
    }
    sumMoney = Math.ceil(sumMoney/100)*100;
    displaySumMoney = sumMoney.toString() + "ゲイツ";
    document.getElementById('sum').textContent = displaySumMoney;
}

function reset () {
    sumMoney = 0;
    displaySumMoney = sumMoney.toString() + "ゲイツ";
    document.getElementById('sum').textContent = displaySumMoney;
}
