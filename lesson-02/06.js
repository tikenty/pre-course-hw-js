let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const jsonData = JSON.stringify(passportWithAddress);
const clone = JSON.parse(jsonData);
clone.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(clone.address.city);

