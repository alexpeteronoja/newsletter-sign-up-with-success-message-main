function isValidEmail(email) {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailValidation.test(email);
}

document.querySelector("#subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailForm = document.querySelector(".email-form").value;


    //invalid Email Response

    if (isValidEmail(emailForm)) {

        document.querySelector(".box").style.display = "none";
        document.querySelector("#success-section").classList.remove("hide");
        document.querySelector(".email-output").textContent = emailForm;


    } else {
        document.querySelector(".invalid-email").textContent = "Valid email required";
        document.querySelector(".email-form").style.backgroundColor = "hsl(4, 100%, 67%, 0.3)";
        document.querySelector(".email-form").style.color = "hsl(4, 100%, 67%)";
    }



})



document.querySelector(".dismiss-btn").addEventListener("click", function() {
    document.querySelector(".box").style.display = "grid";
    document.querySelector("#success-section").classList.add("hide");
    document.querySelector("#subscribe-form").reset();

})