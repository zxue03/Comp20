const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultDiv = document.getElementById("result");
const checkButton = document.getElementById("check");

checkButton.addEventListener("click", () => {
  var number1, number2;
  number1 = parseInt(number1Input.value);
  number2 = parseInt(number2Input.value);
  resultDiv.innerHTML = `You entered ${number1} and ${number2} <br><br>`;
  resultDiv.innerHTML += `For ${number1}: <br>`;
  var factorArray1 = getFactors(number1);
  showArray(factorArray1);
  var sum1 = addArray(factorArray1);
  resultDiv.innerHTML += `<br>For ${number2}: <br>`;
  factorArray2 = getFactors(number2);
  showArray(factorArray2);
  var sum2 = addArray(factorArray2);

  if (sum1 === number2 && sum2 === number1) {
    resultDiv.innerHTML += "<br>The two numbers are amicable!";
  } else {
    resultDiv.innerHTML += "<br>The two numbers are not amicable.";
  }
});

const isFactor = (number, factor) => {
  if (number % factor === 0) {
    return true;
  }
  return false;
};

// console.log(isFactor(135, 15)); //should print true
// console.log(isFactor(125, 14)); //should print false

const showArray = (array) => {
  var arrayContent = "The factors are: ";
  array.forEach((element) => (arrayContent += `${element} `));
  resultDiv.innerHTML += arrayContent;
  resultDiv.innerHTML += "<br>";
};

// var array = [1, 2, 3, 4, 5];
// showArray(array); //should display 1, 2, 3, 4 5 on the div

const addArray = (array) => {
  var sum = 0;
  array.forEach((element) => (sum += element));
  resultDiv.innerHTML += `The sum of the factors is ${sum} <br>`;
  return sum;
};

// var array = [1, 2, 3, 4, 5];
// addArray(array); //should display 15 in the div

const getFactors = (number) => {
  var factorArray = [];
  var largestPossibleFactor = Math.floor(number / 2);
  for (i = 1; i <= largestPossibleFactor; i++) {
    if (isFactor(number, i)) {
      factorArray.push(i);
    }
  }
  return factorArray;
};

// showArray(getFactors(220)); //should print[1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]
// showArray(getFactors(284)); //should print [1, 2, 4, 71, 142]
