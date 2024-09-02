const address = "Tangail";
const jaiga = address.slice(0, 3); //0 index thke 3 index er ag porjonto value show korbe.
console.log(jaiga);

const person = "I am a good person and hardworking.";
console.log(person);
console.log(person.split(" ")); //split dara sentence er majkhane j space thake oita k alada kore.------>
console.log(person.split("a"));

const friendstr = "Rahim, Karim, kamal, jamal, Tamal";
const friend = friendstr.split(",");
console.log(friend);

const realfrd = ["Rahim", "Karim", "kamal", "jamal", "Tamal"];

console.log(realfrd.join());
console.log(realfrd.join("||"));
console.log(realfrd.join("--"));
// console.log(realfrd.join("-"));
