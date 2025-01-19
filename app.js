let menu0Detail = document.querySelector("#menu0");
let menu1Detail = document.querySelector("#menu1");
let menu2Detail = document.querySelector("#menu2");
let menu3Detail = document.querySelector("#menu3");
let menu4Detail = document.querySelector("#menu4");
let menu5Detail = document.querySelector("#menu5");
let lastselect = 'option';
let countPeopleNumber = 1;
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
this.ngOnInit();

function ngOnInit() {
    // オプションのみ初期表示、あとはCSSで隠すようにする
    menu1Detail.classList.add("hidden");
    menu2Detail.classList.add("hidden");
    menu3Detail.classList.add("hidden");
    menu4Detail.classList.add("hidden");
    menu5Detail.classList.add("hidden");

}

function changeButtonDisable(buttonStatus) {
    // ボタンを活性化
    const moneyButton = document.getElementById('moneyButton');
    moneyButton.disabled = buttonStatus;
}

function changeDiplayMenu(select) {
    // 押したタブのものを表示
    switch (select) {
        case 'option':
            menu0Detail.classList.remove("hidden");
            break;
        case 'set':
            menu1Detail.classList.remove("hidden");
            break;
        case 'drink':
            menu2Detail.classList.remove("hidden");
            break;
        case 'food':
            menu3Detail.classList.remove("hidden");
            break;
        case 'pic':
            menu4Detail.classList.remove("hidden");
            break;
        case 'other':
            menu5Detail.classList.remove("hidden");
            break;
    }
    // 表示してるものと違うものを表示させる場合
    if (select !== lastselect) {
        // 今表示してたものを隠す
        switch (lastselect) {
            case 'option':
                menu0Detail.classList.add("hidden");
                break;
            case 'set':
                menu1Detail.classList.add("hidden");
                break;
            case 'drink':
                menu2Detail.classList.add("hidden");
                break;
            case 'food':
                menu3Detail.classList.add("hidden");
                break;
            case 'pic':
                menu4Detail.classList.add("hidden");
                break;
            case 'other':
                menu5Detail.classList.add("hidden");
                break;
        }
        lastselect = select;
    }
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

function countPeople(count) {
    countPeopleNumber = count
}

function sumSetMoney(setCount) {
    let tmpSetMoney = 0;
    if (firstLoginFlg) {
        tmpSetMoney += 2500;
    } else {
        tmpSetMoney += 3000;
    }
    if (setCount >= 2) {
        tmpSetMoney = tmpSetMoney + 3000 * (setCount - 1);
    }
    sumMoney = tmpSetMoney*countPeopleNumber;
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
            sumMoney += 3900;
            recentlySelectMenu = "シャンメリー\n";
            selectMenu += recentlySelectMenu;
            break;
        case 5:
            sumMoney += 10000;
            recentlySelectMenu = "カフェ・ド・パリ\n";
            selectMenu += recentlySelectMenu;
            break;
        case 6:
            sumMoney += 25000;
            recentlySelectMenu = "オリシャン\n";
            selectMenu += recentlySelectMenu;
            break;
        case 7:
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
            recentlySelectMenu = "君がオレンジを抱いて///\n";
            selectMenu += recentlySelectMenu;
            break;
        case 2:
            sumMoney += 1100;
            recentlySelectMenu = "ナポリの風\n";
            selectMenu += recentlySelectMenu;
            break;
        case 3:
            sumMoney += 600;
            recentlySelectMenu = "これは流石にポッキー!\n";
            selectMenu += recentlySelectMenu;
            break;
        case 4:
            sumMoney += 700;
            recentlySelectMenu = "渇きに飢えた者たちへの褒美\n";
            selectMenu += recentlySelectMenu;
            break;
        case 5:
            sumMoney += 800;
            recentlySelectMenu = "白と黒の社交ダンスT盛り\n";
            selectMenu += recentlySelectMenu;
            break;
        case 6:
            sumMoney += 600;
            recentlySelectMenu = "脳の〆作業\n";
            selectMenu += recentlySelectMenu;
            break;
        case 10:
            sumMoney += 1000;
            recentlySelectMenu = "もちこみ\n";
            selectMenu += recentlySelectMenu;
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
            recentlySelectMenu = "ソロチェキ\n";
            selectMenu += recentlySelectMenu;
            break;
        case 2:
            sumMoney += 1800;
            recentlySelectMenu = "ツーチェキ\n";
            selectMenu += recentlySelectMenu;
            break;
        case 3:
            sumMoney += 2600;
            recentlySelectMenu = "フード付きチェキ\n"
            selectMenu += recentlySelectMenu;
            break;
    }
    this.displaySelectedMenu();
    this.changeButtonDisable(false);
}

function count() {
    let textbox = document.getElementById('times');
    if (Number(textbox.value) >= 1) {
        sumMoney += 1000 * Number(textbox.value);
        recentlySelectMenu = "くじ/チンチロ ×" + Number(textbox.value).toString() + "回\n";
        selectMenu += recentlySelectMenu;
        this.displaySelectedMenu();
        textbox.value = '';
        this.changeButtonDisable(false);
    }
}

function count2() {
    let textbox2 = document.getElementById('times2');
    if (Number(textbox2.value) >= 1) {
        sumMoney += 1500 * Number(textbox2.value);
        recentlySelectMenu = "てきーら ×" + Number(textbox2.value).toString() + "杯\n";
        selectMenu += recentlySelectMenu;
        this.displaySelectedMenu();
        textbox2.value = '';
        this.changeButtonDisable(false);
    }
}

function sumTextboxValue() {
    const value = document.getElementById('noMenu');
    if (Number(value.value) >= 100) {
        sumMoney += Number(value.value);
        recentlySelectMenu = Number(value.value).toString() + "\n";
        selectMenu += recentlySelectMenu;
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
