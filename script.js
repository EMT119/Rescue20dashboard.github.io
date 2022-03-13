let unitOne = document.getElementById("unitone");
let unitTwo = document.getElementById("unittwo");

let unitOrder = {
    first: localStorage.getItem("firstOut"),
    second: localStorage.getItem("secondOut")
}


setInterval(() => {
    (unitOne.innerText != unitOrder.first) ? document.getElementById("saveRow").style.display = "table-row" : null;
    (unitTwo.innerText != unitOrder.second) ? document.getElementById("saveRow").style.display = "table-row" : null;
}, 5000);