let unitOne = document.getElementById("unitone");
let unitTwo = document.getElementById("unittwo");

let unitOrder = {
    first: localStorage.getItem("firstOut"),
    second: localStorage.getItem("secondOut")
}


setInterval(() => {
    (unitOne.innerText != unitOrder.first) ? document.getElementById("saveRow").style.display = "table-row" : null;
    (unitTwo.innerText != unitOrder.second) ? document.getElementById("saveRow").style.display = "table-row" : null;
    if (unitOne.innerText == unitOrder.first && unitTwo.innerText == unitOrder.second) {
      document.getElementById("saveRow").style.display = "none";
    }
}, 1500);

function saveChanges() {
  let passcode = prompt("Please enter passcode");
  if (passcode == 1967) {
     unitOrder.first = unitOne.innerText;
  unitOrder.second = unitTwo.innerText;
  document.getElementById("saveRow").style.display = "none"; 
  } else {
    alert("Incorrect passcode");
    unitOne.innerText = unitOrder.first;
    unitTwo.innerText = unitOrder.second;
  }
}