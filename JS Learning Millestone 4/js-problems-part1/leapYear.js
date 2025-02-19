// year will be e leap year if it is divisible by 4 and not divisible by 100 or divisible by 400

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeap = isLeapYear(2025);

console.log(isLeap);


function isLeapYear2(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } 
  else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }else {
    return false;
  }
  
}
const isLeap2 = isLeapYear2(2100);
const isLeap3 = isLeapYear2(2400);
const isLeap4 = isLeapYear2(1900);
const isLeap5 = isLeapYear2(2025);


console.log(isLeap2, isLeap3, isLeap4, isLeap5);