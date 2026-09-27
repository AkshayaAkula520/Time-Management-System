document.addEventListener("DOMContentLoaded", function () {
    const messages = document.querySelectorAll(".message");

    messages.forEach(function (message) {
        setTimeout(function () {
            message.style.display = "none";
        }, 3000);
    });
});