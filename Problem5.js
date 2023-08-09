function canPay(changeArray, totalDue) {
  if (changeArray.length >= 1 && typeof totalDue === "number") {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sum = sum + element;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please provide an valid array";
  }
}

//Checking the Result

const myCash = [1, 2, 5];
const chipsQty = 10;
const purchaseQty = canPay(myCash, chipsQty);
console.log(purchaseQty);

const purchaseQty1 = canPay([1, 5, 5], 10);
console.log(purchaseQty1);

const purchaseQty2 = canPay([], 10);
console.log(purchaseQty2);
