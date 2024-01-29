function calculateSum(num) {
  var sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
}
const arr = [23, 23, 4, 23, 42, 34, 234, 23, 423, 423, 4, 34, 23, 42, 35];

console.log(calculateSum(arr));

let counter = 0;

while (counter < 5) {
  counter++;
  console.log(counter);
}

let countDown = 5;
do {
  console.log(countDown);
  countDown--;
} while (countDown > 0);

function evaluteGrade(number) {
  if (number > 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(evaluteGrade(60));
console.log(evaluteGrade(68));
console.log(evaluteGrade(99));
