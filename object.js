// primitive data or primary data
const price = 100;

// Non primitive data
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
console.log(personInfo);

// ---------------->
console.log(personInfo["fav places"]);
// dot notation---------------->
console.log(personInfo.name);
console.log(personInfo.salary);
const income = personInfo.salary;
console.log(income);

// Bracket notation---------->
console.log(personInfo["age"]);
const boyos = personInfo["age"];
console.log(boyos);
