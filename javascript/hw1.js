"use strict";
var money,
    date;

// function start() {
//     money = +prompt("ваш бюджет на месяц ?");
//     date = prompt("Введите дату в формате YYYY-MM-DD");
//     while (isNaN(money) || money.length < 1 || money === null) {
//         start();
//     }
// }
// start();

var obj = {
    objMomey: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    setExpenses: () => {
        var check = 0;
        while (check < 1) {
            var q1 = prompt("Введите обязательную статью расходов в этом месяце",""),
                q2 = prompt("Во сколько обойдется?","");
            if (q1 !== null && q2 !== null && typeof(q1) !== null && typeof(q2) !== null && q1.trim().length !== 0) {
                obj.expenses[q1] = q2;
                check++;
                console.log("not null");
            }
        }
    },
    detectDayBudget: () => obj.moneyPerDay = (obj.objMomey / 30).toFixed(),
    detectLevel: () => {
        if (money <= 200) {
            console.log("мало");
        } else if (money > 200 && money < 2000) {
            console.log("средне");
        } else if (money > 2000) {
            console.log("много");
        } else {
            console.log("не тот тип данных");
        }
    },
    checkSaving: () => {
        if (obj.savings) {
            let money = +prompt("Какова сумма накоплений ?","");
            let per = +prompt("Под какой процент ?","");
            obj.monthIncome = money * per / 12 / 100;
            alert("Ежемесячный доход с депозита " + obj.monthIncome + " рублей");
        }
    },
    chooseOptExpenses: () => {
        for (let i = 0; i < 3; i++) {
            let q = prompt("Статья необязательных расходов?","");
            obj.optionalExpenses[i] = q;
        }
    },
    chooseIncome:()=> {
    	let items = prompt("Что принесет дополнительный доход ?(перечисли через запятую)","");
    	console.log(typeof(items)=="string");
    }

};

obj.chooseIncome();

console.log(obj);