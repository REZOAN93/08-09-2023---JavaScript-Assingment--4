function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    if (string1.indexOf(string2) !== -1) {
      return true;
    } else {
      return false;
    }
  } else {
    const errorMessage = "Your Input is not string type variable";
    return errorMessage;
  }
}

//Checking the Result

const myMatchFinder1 = matchFinder("John Doe", "ohn");
console.log(myMatchFinder1);
const myMatchFinder2 = matchFinder("JavaScript", "Code");
console.log(myMatchFinder2);
const myMatchFinder3 = matchFinder("Peter Parker", "Pen");
console.log(myMatchFinder3);
const myMatchFinder4 = matchFinder("Peter Parker", "pet");
console.log(myMatchFinder4);
const myMatchFinder5 = matchFinder("Peter Parker", 10);
console.log(myMatchFinder5);

const myMatchFinder6 = matchFinder(10,"Peter Parker");
console.log(myMatchFinder6);

const myMatchFinder7 = matchFinder(10,10);
console.log(myMatchFinder7);
