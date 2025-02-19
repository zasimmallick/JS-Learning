// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// 67
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemain = inch % 12;
    const result = `${feetNumber} feet and ${inchRemain} inch`;
    return result;
}


const zasimHight = inchToFeet(67);

// console.log(zasimHight);

const zasimHight2 = inchToFeet2(67);

console.log(zasimHight2);



function mileToKilometer(mile) {
    const kilometer = mile * 1.60934;
    return kilometer;
}

function kilometerToMile(kilometer) {
    const mile = kilometer / 1.60934;
    return mile;
}