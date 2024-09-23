document.getElementById("history").addEventListener("click", function () {
    document.getElementById("history").classList.add("primary-bg");
    document.getElementById("donation").classList.remove("primary-bg");
    document.getElementById("card-container").classList.add("hidden");
});

document.getElementById("donation").addEventListener("click", function () {
    elementById("history").classList.remove("primary-bg");
    elementById("donation").classList.add("primary-bg");
    document.getElementById("card-container").classList.remove("hidden");
});
