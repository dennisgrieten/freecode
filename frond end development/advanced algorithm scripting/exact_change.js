function checkCashRegister(price, cash, cid) {
    var output = [];
    var afterCount = 0;
    var change = parseInt((cash - price) * 100);
    var names = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    };

    var register = {
        "ONE HUNDRED": 0,
        "TWENTY": 0,
        "TEN": 0,
        "FIVE": 0,
        "ONE": 0,
        "QUARTER": 0,
        "DIME": 0,
        "NICKEL": 0,
        "PENNY": 0
    };

    function getRegister() {
        for (var i = 0; i < cid.length; i++) {
            register[cid[i][0]] = parseInt(((cid[i][1] * 100) / names[cid[i][0]]).toFixed(0));
        }
    }

    function countRegister() {
        for (var name in register) {
            afterCount += parseInt(register[name]);
        }
        return afterCount;
    }

    getRegister();
    console.log(register);

    // iterate over all bills/coins
    for (var name in names) {
        // check if current bill/coin fits in current change amount
        // and register has current bill/coin
        if (change % names[name] >= 0 && names[name] < change && register[name] !== 0) {
            var nameAmount;
            if ((change - change % names[name]) / names[name] < register[name]) {
                nameAmount = (change - change % names[name]);
            } else {
                nameAmount = register[name] * names[name];
            }

            output.push([name, parseFloat((nameAmount / 100).toFixed(2))]);
            change -= nameAmount;
            register[name] -= nameAmount / names[name];
        }
        if (change === 0) {break;}
    }

    countRegister();

    if (change !== 0) {
        return "Insufficient Funds";
    } else if (afterCount === 0) {
        return "Closed";
    }

    return output;
}

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
