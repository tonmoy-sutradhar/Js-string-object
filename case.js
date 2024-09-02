const versity = "American International University";
console.log(versity);
console.log(versity.toLowerCase());
console.log(versity.toUpperCase());

// Uppercase----> ABCD EFG
// Lowercase----> abcd efg

const sub = "English";
const book = "english";

if (sub.toLowerCase() == book.toLowerCase()) {
  console.log("Ami porte bosbo");
} else {
  console.log("Good bye.");
}

// Trim------Sentence er samne ba laste space thakle ta ignore kore->

const drink = "Water   ";
const lequed = " Water";

if (drink.trim() === lequed.trim()) {
  console.log("Ami jol khabo.");
} else {
  console.log("Khabo na");
}
