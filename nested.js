const school = {
  nme: "vnc",
  class: ["11", "12"],
  event: ["science fair", "bijoy dibos"],
  unique: {
    color: "blue",
    result: {
      gpa: 4,
      merit: "top",
    },
  },
};
console.log(school);
console.log(school.unique);
console.log(school.unique.result);
console.log(school.unique.color);

school.unique.result.merit = "Excilent result";
console.log(school.unique.result.merit);

school.event[1] = "16 December";
console.log(school.event[1]);

// Delete keyword diye object er property delete kora jai
delete school.class;
console.log(school);
