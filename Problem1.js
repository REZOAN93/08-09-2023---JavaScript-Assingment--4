function cubeNumber(number) {
  if (typeof number == "number") {
    if (number !== 0 && number > 0) {
      const result = number * number * number;
      return result;
    } else {
      const errorMessage1 = "Please provide a Positive number";
      return errorMessage1;
    }
  } else {
    const errorMessage2 = "Please provide a valid Number";
    return errorMessage2;
  }
}

//Checking the Result

const myCubeNumber = cubeNumber(-3);
console.log(myCubeNumber);
const myCubeNumber1 = cubeNumber(3);
console.log(myCubeNumber1);
const myCubeNumber2 = cubeNumber(4);
console.log(myCubeNumber2);
const myCubeNumber3 = cubeNumber("4");
console.log(myCubeNumber3);
