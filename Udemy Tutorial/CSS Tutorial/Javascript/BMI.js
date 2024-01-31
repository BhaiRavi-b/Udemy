function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}
var weight = prompt("Enter your weight");
var height = prompt("Enter your height");

//var bmi = bmiCalculator(weight, height);

if (bmi <= 18.5) {
  console.log("so you are underweight.");
} else if (bmi > 18.5 && bmi <= 24.9) {
  console.log("so you have a normal weight.");
} else {
  console.log("so you are overweight");
}
