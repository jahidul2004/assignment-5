function elementById(id) {
    const value = document.getElementById(id);
    return value;
}

function inputValueById(id) {
    const value = document.getElementById(id).value;
    return value;
}

function innerValueById(id) {
    const value = document.getElementById(id).innerText;
    return value;
}

function mainBalanceReduce(amount) {
    let remainBalance = innerValueById("mainBalance");
    if (remainBalance < amount) {
        alert("insufficiant Balance!");
    } else {
        let newBalance = remainBalance - amount;
        document.getElementById("mainBalance").innerText = newBalance;
    }
}
