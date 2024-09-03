// for of use hoi array te......
// for in use hoi object e------>>>>>

const mobile = {
  brand: "Vivo",
  price: 20000,
  color: "Black",
  camera: "12mp",
};

// ////////////////////////////////for use object--------------------------->>>>>
// for (const phone in mobile) {
// console.log(phone);
// console.log(mobile[phone]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for (const phn of keys) {
  console.log(phn, "=", mobile[phn]);
}
