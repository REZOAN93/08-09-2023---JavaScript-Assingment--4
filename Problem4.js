function findAddress(obj) {
  let infoDetails = [];
  for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    infoDetails.push(
      element.street || "__",
      element.house || "__",
      element.society || "__"
    );
  }
  const arrayJoin = infoDetails.join(",");
  return arrayJoin;
}


//Checking the Result

const myObject = [{ street: 10, house: "15A", society: "Earth Perfect" }];
const findMyAddress = findAddress(myObject);
console.log(findMyAddress);
const myObject1 = [{ street: 10, society: "Earth Perfect" }];
const findMyAddress1 = findAddress(myObject1);
console.log(findMyAddress1);
const myObject2 = [{ street: 10 }];
const findMyAddress2 = findAddress(myObject2);
console.log(findMyAddress2);
