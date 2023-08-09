function sortMaker(arr) {
  let newArray = [];
  if (arr.length === 2) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      newArray.push(element);
    }
    const input1 = newArray[0];
    const input2 = newArray[1];

    if (input1 === input2) {
      return "equal";
    } else if (
      input1 >= 0 &&
      input2 >= 0 &&
      typeof input1 === "number" &&
      typeof input2 === "number"
    ) {
      const assendingArray = [
        Math.max(input1, input2),
        Math.min(input1, input2),
      ];
      return assendingArray;
    } else {
      const errorInvalidMessage = "Invalid Input";
      return errorInvalidMessage;
    }
  } else {
    const errorMessage = "Please provide only two number";
    return errorMessage;
  }
}

//Checking the Result

const myArray = [2, 3];
const arraySort = sortMaker(myArray);
console.log(arraySort);
const myArray1 = [4, 2];
const arraySort1 = sortMaker(myArray1);
console.log(arraySort1);
const myArray2 = [4, 4];
const arraySort2 = sortMaker(myArray2);
console.log(arraySort2);
const myArray3 = [1, 2];
const arraySort3 = sortMaker(myArray3);
console.log(arraySort3);
const myArray4 = [4, -2];
const arraySort4 = sortMaker(myArray4);
console.log(arraySort4);
const myArray5 = [0, 1];
const arraySort5 = sortMaker(myArray5);
console.log(arraySort5);
const myArray6 = [-4, -2];
const arraySort6 = sortMaker(myArray6);
console.log(arraySort6);
