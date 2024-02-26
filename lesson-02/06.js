let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clone = {};
for (let key in passportWithAddress) {
    if (typeof passportWithAddress[key] === 'object') {
        clone[key] = {};
        for (let key2 in passportWithAddress[key]) {
            clone[key][key2] = passportWithAddress[key][key2];
        }
    } else {
        clone[key] = passportWithAddress[key];
    }
}
clone.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(clone);
