let sumMoney = 0;
let displaySumMoney = ""
let displaySumMoneyCard = ""
let displaySumMoneyNoTax = ""
let oshiFlg = false;
let selectMenu = "";

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
            sumMoney += 10000;
            selectMenu += "カフェ・ド・パリ\n";
            break;
        case 5:
            sumMoney += 25000;
            selectMenu += "オリシャン\n";
            break;
        case 6:
            sumMoney += 20000;
            selectMenu += "マバム\n";
            break;
        case 15:
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
        case 6:
            sumMoney += 600;
            selectMenu += "脳の〆作業\n";
            break;
        case 10:
            sumMoney += 1000;
            selectMenu += "もちこみ\n";
            break;

        // フードもっとあるので追加予定
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
        case 3:
            sumMoney += 2300;
            selectMenu += "フード付きチェキ\n";
            break;
    }
    this.displaySelectedMenu();
}

function count() {
    let textbox = document.getElementById('times');
    if (Number(textbox.value) >= 1) {
        sumMoney += 1000 * Number(textbox.value);
        selectMenu += "くじ/チンチロ ×" + Number(textbox.value).toString() + "回\n";
        this.displaySelectedMenu();
        textbox.value = '';
    }
}

function count2() {
    let textbox2 = document.getElementById('times2');
    if (Number(textbox2.value) >= 1) {
        sumMoney += 1500 * Number(textbox2.value);
        selectMenu += "てきーら ×" + Number(textbox2.value).toString() + "杯\n";
        this.displaySelectedMenu();
        textbox2.value = '';
    }
}

function sumTextboxValue() {
    const value = document.getElementById('noMenu');
    if (Number(value.value) >= 100) {
        sumMoney += Number(value.value);
        selectMenu += Number(value.value).toString() + "\n";
        this.displaySelectedMenu();
        value.value = '';
    }
}

function onDisplay() {
    displaySumMoneyNoTax = sumMoney.toString() + "ゲイツ" + "(税抜き)";
    sumMoney = sumMoney * 1.1 //税
    sumMoney = sumMoney * 1.1 //サービス料金
    // 現金用
    let realMoney = sumMoney;
    realMoney = Math.ceil(realMoney / 100) * 100;
    displaySumMoney = realMoney.toString() + "ゲイツ(リアルゲイツ)";
    // カード用
    sumMoney = sumMoney * 1.05 // カードだと5%
    sumMoney = Math.ceil(sumMoney / 100) * 100;
    displaySumMoneyCard = sumMoney.toString() + "ゲイツ(かーど)";
    document.getElementById('sumRealMoney').textContent = displaySumMoney;
    document.getElementById('sumCard').textContent = displaySumMoneyCard;
    document.getElementById('noTaxSum').textContent = displaySumMoneyNoTax;
    const moneyButton = document.getElementById('moneyButton');
    moneyButton.disabled = true;
}


function reset() {
    sumMoney = 0;
    displaySumMoneyNoTax = "";
    displaySumMoney = ""
    document.getElementById('noTaxSum').textContent = displaySumMoneyNoTax;
    document.getElementById('sumRealMoney').textContent = displaySumMoney;
    document.getElementById('sumCard').textContent = displaySumMoney;
    // ボタンを活性化
    const moneyButton = document.getElementById('moneyButton');
    moneyButton.disabled = false;
    selectMenu = "";
    this.displaySelectedMenu();
}

function displaySelectedMenu() {
    document.getElementById('selectMenu').textContent = selectMenu;
}
