const sentence = "My name is Tonmoy sutradhar";

// Tonmoy
// T
// oT
// noT
// mnoT
// omnoT
// yomnoT

let reverse = " ";
for (const letter of sentence) {
  console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

// ----Using for loop------------------------------------------------------------->
let rev = " ";

for (let i = 0; i < sentence.length; i++) {
  console.log(i);
  console.log(sentence[i]);
  let letter = sentence[i];

  rev = letter + rev;
}
console.log(rev);

// --Shortcut process------.join("")>
console.log("ShortCut process in reverse-------->");

const reversed = sentence.split("").reverse().join("");
console.log(reversed);
