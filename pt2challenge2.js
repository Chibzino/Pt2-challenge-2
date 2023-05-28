function calcTip (bills) {
    const tip1 = (15/100);
    const tip2 = 20/100;
    if (bills >= 50 && bills <=300 ){
        return bills * tip1;
    }

    else{
        return bills * tip2;
    }
}

//An array of bills

const bills = [ 125, 555, 44];

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

console.log(bills, tips, total);


