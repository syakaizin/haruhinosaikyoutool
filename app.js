let sumMoney = 0;
let displaySumMoney = ""
let displaySumMoneyCard = ""
let displaySumMoneyNoTax = ""
let oshiFlg = false;
let firstLoginFlg = true;
let lastIdx = 0;
let drinkCount = 1;
let recentlySelectMenu = "なにもえらんでないヨ";
let selectMenu = "";
document.getElementById('recentlySelectMenu').textContent = recentlySelectMenu;
const selectmenu = document.querySelector("#selectListMoney");
selectmenu.classList.toggle("hidden");

function changeButtonDisable(buttonStatus) {
    // ボタンを活性化
    const moneyButton = document.getElementById('moneyButton');
    moneyButton.disabled = buttonStatus;
}

function changeFlg() {
    oshiFlg = true;
    recentlySelectMenu = "ハルヒ推し\n";
    selectMenu += recentlySelectMenu;
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
}

function reLogin() {
    firstLoginFlg = false;
    recentlySelectMenu = "再ログイン\n";
    selectMenu += recentlySelectMenu;
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
}

function sumSetMoney(setCount) {
    if (firstLoginFlg) {
        sumMoney += 2500;
    } else {
        sumMoney += 3000;
    }
    if (setCount >= 2) {
        sumMoney = sumMoney + 3000 * (setCount - 1);
    }
    if (oshiFlg) {
        sumMoney = sumMoney + 1000 * setCount;
    }
    recentlySelectMenu = setCount.toString() + "セット\n";
    selectMenu += recentlySelectMenu;
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
}

function sumDrinkMoney(idx) {
    switch (idx) {
        case 1:
            sumMoney += 1000;
            recentlySelectMenu = "Sドリンク\n";
            selectMenu += recentlySelectMenu;
            break;
        case 2:
            sumMoney += 2000;
            recentlySelectMenu = "Mドリンク\n";
            selectMenu += recentlySelectMenu;
            break;
        case 3:
            sumMoney += 3500;
            recentlySelectMenu = "Lドリンク\n";
            selectMenu += recentlySelectMenu;
            break;
        case 4:
            sumMoney += 10000;
            recentlySelectMenu = "カフェ・ド・パリ\n";
            selectMenu += recentlySelectMenu;
            break;
        case 5:
            sumMoney += 25000;
            recentlySelectMenu = "オリシャン\n";
            selectMenu += recentlySelectMenu;
            break;
        case 6:
            sumMoney += 20000;
            recentlySelectMenu = "マバム\n";
            selectMenu += recentlySelectMenu;
            break;
        case 15:
            sumMoney += 170000;
            recentlySelectMenu = "エンジェル ヘイロー\n";
            selectMenu += recentlySelectMenu;
            break;
    }
    if (lastIdx === idx) {
        drinkCount++;
        recentlySelectMenu += "×" + drinkCount.toString();
    } else {
        drinkCount = 1;
    }
    lastIdx = idx;
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
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
    this.changeButtonDisable(false);
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
            sumMoney += 2600;
            selectMenu += "フード付きチェキ\n";
            break;
    }
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
}

function count() {
    let textbox = document.getElementById('times');
    if (Number(textbox.value) >= 1) {
        sumMoney += 1000 * Number(textbox.value);
        selectMenu += "くじ/チンチロ ×" + Number(textbox.value).toString() + "回\n";
        this.displaySelectedMenu();
        textbox.value = '';
        this.changeButtonDisable(false);
    }
}

function count2() {
    let textbox2 = document.getElementById('times2');
    if (Number(textbox2.value) >= 1) {
        sumMoney += 1500 * Number(textbox2.value);
        selectMenu += "てきーら ×" + Number(textbox2.value).toString() + "杯\n";
        this.displaySelectedMenu();
        textbox2.value = '';
        this.changeButtonDisable(false);
    }
}

function sumTextboxValue() {
    const value = document.getElementById('noMenu');
    if (Number(value.value) >= 100) {
        sumMoney += Number(value.value);
        selectMenu += Number(value.value).toString() + "\n";
        this.displaySelectedMenu();
        value.value = '';
        this.changeButtonDisable(false);
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
    this.changeButtonDisable(true);
}


function reset() {
    sumMoney = 0;
    displaySumMoneyNoTax = "";
    displaySumMoney = ""
    document.getElementById('noTaxSum').textContent = displaySumMoneyNoTax;
    document.getElementById('sumRealMoney').textContent = displaySumMoney;
    document.getElementById('sumCard').textContent = displaySumMoney;
    // ボタンを活性化
    this.changeButtonDisable(false);
    // 各フラグを初期化
    oshiFlg = false;
    firstLoginFlg = true;
    recentlySelectMenu = "なにもえらんでないヨ";
    selectMenu = "";
    this.displaySelectedMenu();
}

function displaySelectedMenu() {
    document.getElementById('recentlySelectMenu').textContent = "いまおしたもの：" + recentlySelectMenu;
    document.getElementById('selectMenu').textContent = selectMenu;
}

function changeDisplay() {
    const menuList = document.querySelector("#menuList");
    menuList.classList.toggle("hidden");
    const selectmenu = document.querySelector("#selectListMoney");
    selectmenu.classList.toggle("hidden");
}
