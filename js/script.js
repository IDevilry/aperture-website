const burger = document.querySelector("#burger");
const emailInputEl = document.querySelector("#input-email");
const footerButton = document.querySelector("#footer-btn");

burger.addEventListener("click", () => {
    document.querySelector(".burger-list").classList.toggle("none");
});

function inputClick() {
    emailInputEl.value = "";
    emailInputEl.setAttribute("placeholder", "Succesfully");
    document.getElementById("input-img").classList.remove('none');
    document.getElementById("input-img").classList.add('animation')
}

footerButton.addEventListener("click", () => {
    inputClick();
    setTimeout(() => {
        emailInputEl.setAttribute("placeholder", "Your email")
        document.getElementById("input-img").classList.add('none');
        document.getElementById("input-img").classList.remove('animation');
    }, 4000);
});


