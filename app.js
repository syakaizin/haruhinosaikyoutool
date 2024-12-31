let sumMoney = 0;
let displaySumMoney = ""
let displaySumMoneyNoTax = ""
let oshiFlg = false;
let selectMenu = "";
// document.getElementById('sum').textContent = displaySumMoney;

function changeFlg() {
    oshiFlg = true;
    selectMenu += "ハルヒ推し\n";
    this.displaySelectedMenu();
}

function sumSetMoney(setCount) {
    sumMoney += 2500;
    if (setCount >= 2) {
        sumMoney = sumMoney + 3000 * (setCount - 1);
    }
    if (oshiFlg) {
        sumMoney = sumMoney + 1000 * setCount;
    }
    selectMenu += setCount.toString() + "セット\n";
    this.displaySelectedMenu();
}

function sumDrinkMoney(idx) {
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
        case 4:
            sumMoney += 170000;
            selectMenu += "エンジェル ヘイロー\n";
            break;
    }
    this.displaySelectedMenu();
}

function sumFoodMoney(idx) {
    switch (idx) {
        case 1:
            sumMoney += 1300;
            selectMenu += "君がオレンジを抱いて///\n";
            break;
        case 2:
            sumMoney += 1100;
            selectMenu += "ナポリの風\n";
            break;
        case 3:
            sumMoney += 600;
            selectMenu += "これは流石にポッキー!\n";
            break;
        case 4:
            sumMoney += 700;
            selectMenu += "渇きに飢えた者たちへの褒美\n";
            break;
        case 5:
            sumMoney += 800;
            selectMenu += "白と黒の社交ダンスT盛り\n";
            break;
    
        // フードもっとあるので追加予定
        // case 6:
        //     sumMoney += 600;
        //     selectMenu += "これは流石にポッキー!\n";
        //     break;
        // case 7:
        //     sumMoney += 600;
        //     selectMenu += "これは流石にポッキー!\n";
        //     break;
        // case 8:
        //     sumMoney += 600;
        //     selectMenu += "これは流石にポッキー!\n";
        //     break;


    }
    this.displaySelectedMenu();
}

function sumPhotoMoney(idx) {
    switch (idx) {
        case 1:
            sumMoney += 1300;
            selectMenu += "ソロチェキ\n";
            break;
        case 2:
            sumMoney += 1800;
            selectMenu += "ツーチェキ\n";
            break;
    }
    this.displaySelectedMenu();
}

function onDisplay(isUseCard) {
    displaySumMoneyNoTax = sumMoney.toString() + "ゲイツ" + "(税抜き)";
    sumMoney = sumMoney * 1.1 //税
    sumMoney = sumMoney * 1.1 //サービス料金
    if (isUseCard) {
        sumMoney = sumMoney * 1.05 // カードだと5%
    }
    sumMoney = Math.ceil(sumMoney / 100) * 100;
    displaySumMoney = sumMoney.toString() + "ゲイツ";
    document.getElementById('sum').textContent = displaySumMoney;
    document.getElementById('noTaxSum').textContent = displaySumMoneyNoTax;
}

function reset() {
    sumMoney = 0;
    displaySumMoneyNoTax = "";
    displaySumMoney = ""
    document.getElementById('sum').textContent = displaySumMoney;
    document.getElementById('noTaxSum').textContent = displaySumMoneyNoTax;
    selectMenu = "";
    this.displaySelectedMenu();
}

function displaySelectedMenu() {
    document.getElementById('selectMenu').textContent = selectMenu;
}
