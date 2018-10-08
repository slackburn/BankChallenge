var pinInput = parseInt(prompt("Enter Your Pin:"))

var pin = 4321;
var balance = 100;

function checkPin(){
  if(pinInput === pin){
    alert("Pin Correct.");
    menu()
  } else {
    alert("Pin Incorrect. Try Again!");
  }
}

function menu(){
  var userInput = parseInt(prompt("1. Check Balance \n2.Withdraw"))
  if(userInput === 1) {
    checkBalance()
  } else if(userInput === 2) {
    withdrawBalance()
  } else {
    alert("Invalid Input")
  }
}

function withdrawBalance(){
  var amountInput = parseInt(prompt("Enter amount to withdraw:"))
  if(amountInput <= balance){
    balance-=amountInput
    alert(`Withdraw of £${amountInput} Accepted`);
    alert(`Balance Left: £${balance}`)
  } else {
    alert("Insufficient Funds!");
  }
}

function checkBalance(){
  alert(`Balance: £${balance}`)
  menu()
}

while (pinInput != pin) {
  alert("Pin Incorrect!");
  pinInput = parseInt(prompt("Enter Your Pin:"))
  checkPin()
}

checkPin()