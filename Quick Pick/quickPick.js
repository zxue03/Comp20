var quickArray = [];
var quickLucky = null;
var winArray = [];
var winLucky = null;

var payout = null;
var lucky = false;
var winCounter = 0;

var getQuick = () => {
  for (i = 0; i < 5; i++) {
    var number = Math.floor(Math.random() * 47 + 1);
    quickArray.push(number);
  }
  quickArray.sort(function (a, b) {
    return a - b;
  });
  quickLucky = Math.floor(Math.random() * 17 + 1);
  console.log(quickArray);
};

var getWin = () => {
  var string = prompt(
    "Enter 5 winning numbers(range from 1 to 48) with a space in between each other"
  );
  winLucky = parseInt(prompt("Enter 1 lucky number(range from 1 to 18)"));
  var res = string.split(" ");
  for (i = 0; i < 5; i++) {
    var number = parseInt(res[i]);
    winArray.push(number);
  }
  winArray.sort(function (a, b) {
    return a - b;
  });
  console.log(winArray);
};

var checkMatch = () => {
  winArray.forEach((element) => {
    if (quickArray.includes(element)) {
      winCounter++;
    }
  });
  if (quickLucky === winLucky) {
    lucky = true;
  }
};

var calcPayout = () => {
  if (winCounter === 5) {
    payout = lucky ? "$7,000 a WEEK for LIFE" : "$25,000 a YEAR for LIFE";
  } else if (winCounter === 4) {
    payout = lucky ? "$5,000" : "$200";
  } else if (winCounter === 3) {
    payout = lucky ? "$150" : "$20";
  } else if (winCounter === 2) {
    payout = lucky ? "$25" : "$3";
  } else if (winCounter === 1 && lucky) {
    payout = "$6";
  } else if (winCounter == 0 && lucky) {
    payout = "$4";
  } else {
    payout = "$0";
  }
};

var printResult = () => {
  var result = document.getElementById("result");
  var quickArrayDiv = document.createElement("p");
  quickArrayDiv.innerHTML = "The Quick Pick numbers are : " + quickArray;
  result.appendChild(quickArrayDiv);

  var quickLuckyDiv = document.createElement("p");
  quickLuckyDiv.innerHTML = "The Quick Pick Lucky Ball is : " + quickLucky;
  result.appendChild(quickLuckyDiv);

  var winArrayDiv = document.createElement("p");
  winArrayDiv.innerHTML = "The Winning numbers are : " + winArray;
  result.appendChild(winArrayDiv);

  var winLuckyDiv = document.createElement("p");
  winLuckyDiv.innerHTML = "The Winning Lucky Ball is : " + winLucky;
  result.appendChild(winLuckyDiv);

  var winCounterDiv = document.createElement("p");
  winCounterDiv.innerHTML = winCounter + " number(s) have matched";
  result.appendChild(winCounterDiv);

  var luckyDiv = document.createElement("p");
  luckyDiv.innerHTML = lucky
    ? "The Lucky Ball matches!"
    : "The Lucky Ball doesn't match";
  result.appendChild(luckyDiv);

  var payoutDiv = document.createElement("p");
  payoutDiv.innerHTML = "The payout is " + payout;
  result.appendChild(payoutDiv);
};

getQuick();
getWin();
checkMatch();
calcPayout();
printResult();
