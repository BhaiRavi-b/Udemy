function bmiCalculator(weight, height) {
  var weight = prompt("Enter Weight");
  var height = prompt("Enter Height");
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

var bmi = bmiCalculator(weight, height);
console.log(bmi);
