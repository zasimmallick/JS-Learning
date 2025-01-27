let laptop = {
    brand: "Apple",
    processor: "M4 Pro",
    price: 3000,
    color: "Black",
    ram: "32GB",
    ssd: "1TB",
    isGood: true
};

for (let key in laptop) {
    console.log(key + ": " + laptop[key]);
}
