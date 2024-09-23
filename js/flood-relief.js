document
    .getElementById("flood-relief-submit")
    .addEventListener("click", function () {
        const amount = parseInt(inputValueById("flood-relief-amount"));
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
                let donatedAmount = parseInt(
                    innerValueById("flood-relief-donated")
                );

                let newAmount = donatedAmount + amount;

                document.getElementById("flood-relief-donated").innerText =
                    newAmount;

                mainBalanceReduce(amount);

                // Transection history add
                let historyCont = document.getElementById("history-container");
                let div = document.createElement("div");
                div.classList.add("p-5", "border", "rounded-lg", "my-5");

                let currentTime = new Date();

                div.innerHTML = `
                <h3 class="text-lg font-extrabold">${amount} Tk is donated for Donate for Flood Relief in Feni,Bangladesh</h3>
                <p class="shadow-text">${currentTime}</p>
                `;
                historyCont.appendChild(div);
                document.getElementById("flood-relief-amount").value = "";
                my_modal_1.showModal();
            }
        }
    });
