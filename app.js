let sumMoney = 0;
let displaySumMoney = "0ゲイツ"
let oshiFlg = false;
let selectMenu = "";
document.getElementById('sum').textContent = displaySumMoney;

function changeFlg() {
    oshiFlg = true;
    selectMenu += "ハルヒ推し\n";
    this.displaySelectedMenu();
}

function sumSetMoney(setCount) {
    sumMoney += 2500;
    if (setCount >= 2) {
        sumMoney = sumMoney + 3000*(setCount - 1);
    }
    if (oshiFlg) {
        sumMoney = sumMoney + 1000*setCount;
    }
    selectMenu += setCount.toString() + "セット\n";
    this.displaySelectedMenu();
}

function sum (idx) {
    switch (idx) {
        case 1:
            sumMoney += 1000;
            selectMenu += "Sドリンク\n";
            break;
        case 2:
            sumMoney += 2000;
            selectMenu += "Mドリンク\n";
            break;
        case 3:
            sumMoney += 3500;
            selectMenu += "Lドリンク\n";
            break;
    }
    this.displaySelectedMenu();
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
    selectMenu = "";
    this.displaySelectedMenu();
}

function displaySelectedMenu () {
    document.getElementById('selectMenu').textContent = selectMenu;
}
