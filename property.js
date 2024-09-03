const personInfo = {
  name: "Tonmoy sutradhar",
  age: 22,
  weight: 60,
  height: 6.5,
  personality: "Good",
  profession: "Student",
  married: false,
  salary: 50000,
  "fav places": ["tangail", "dhaka", "cummila", "aiub"],
};

// change value------------>
personInfo.salary = 1000000;
personInfo["age"] = 24;
personInfo["fav places"] = ["UAE", "USA", "India", "Maldives"];

console.log(personInfo);

// //////////////////////////////////
const keyName = "profession";
console.log(personInfo[keyName]);

// value set
const propName = "profession";
personInfo[propName] = "Web Developer";
console.log(personInfo);
