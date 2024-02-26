let passport = {
    name: "Petr",
    surname: "Petrov",
};

clone = {}
for (let key in passport) {
    clone[key] = passport[key];
}
clone.name = "Ivan";
console.log(passport.name);
console.log(clone.name);