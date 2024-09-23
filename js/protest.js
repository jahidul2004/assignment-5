document
    .getElementById("protest-submit")
    .addEventListener("click", function () {
        const amount = Number(inputValueById("protest-amount"));
        let remainBalance = document.getElementById("mainBalance").innerText;
        if (isNaN(amount)) {
            alert("Please input only positive number.");
        } else if (amount < 0) {
            alert("Please input only positive number.");
        } else if (amount == 0) {
            alert("Zero amount cannot be donated.");
        } else {
            if (remainBalance < amount) {
                alert("Insufficiant Amount");
            } else {
                let donatedAmount = parseInt(innerValueById("protest-donated"));

                let newAmount = donatedAmount + amount;

                document.getElementById("protest-donated").innerText =
                    newAmount;

                mainBalanceReduce(amount);

                // Transection history add
                let historyCont = document.getElementById("history-container");
                let div = document.createElement("div");
                div.classList.add("p-5", "border", "rounded-lg", "my-5");

                let currentTime = new Date();

                div.innerHTML = `
                <h3 class="text-lg font-extrabold">${amount} Tk is donated for Aid for Injured in the Quota Movement</h3>
                <p class="shadow-text">${currentTime}</p>
                `;
                historyCont.appendChild(div);
                document.getElementById("protest-amount").value = "";
                my_modal_1.showModal();
            }
        }
    });
