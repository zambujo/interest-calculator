// backend functions

// Update value in slide selector
function updateRange(x) {
    document.getElementById("slider").textContent = x + "%";
}

function compute() {
    var deposit = document.getElementById("amount");
    if (deposit.value == "" || deposit.value <= 0){
        alert("Please enter an initial amount greater than 0");
        deposit.focus();
        return false;
    } else {
        var rate = document.getElementById("rate");
        var years = document.getElementById("years");

        // Interest calculation
        var interest = amount.value * rate.value * years.value /100;
        // Convert number of years to a date
        var endYear = new Date().getFullYear() + parseInt(years.value);
        // Output message
        var message = "If you deposit " + amount.value +
        " with an interest rate of " + rate.value + "%," +
        "\<br />\ you will get " + interest +
        " of interest in " + endYear + ".";

        // Insert message back in the page
        document.getElementById("result").innerHTML = message;

        // If success, return true
        return true;
    }
}
