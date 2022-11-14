const burger = document.querySelector("#burger");
const emailInputEl = document.getElementById("input-email");
const footerButton = document.querySelector("#footer-btn");
const allModalButtons = document.querySelectorAll(".modal-button");
const allCardsButtons = document.querySelectorAll("[data-name='card-button-m']");
const getInTouchBtn = document.querySelector("#get-in-touch-btn");
const modalGetInBtn = document.querySelector("#modal-get-in-btn");
const navLinks = document.querySelectorAll('.nav-item')

burger.addEventListener("click", () => {
    document.querySelector(".burger-list").classList.toggle("burger-active");
});

navLinks.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".burger-list").classList.remove("burger-active");
    })
})

function inputClick() {
    if (emailInputEl.value == "") {
        alert('Please enter a valid email');
        return null;
    }
    emailInputEl.value = "";
    emailInputEl.setAttribute("placeholder", "Succesfully");
    document.getElementById("input-img").classList.remove("none");
    document.getElementById("input-img").classList.add("animation");
}

footerButton.addEventListener("click", () => {
    inputClick();
    setTimeout(() => {
        emailInputEl.setAttribute("placeholder", "Your email");
        document.getElementById("input-img").classList.add("none");
        document.getElementById("input-img").classList.remove("animation");
    }, 4000);
});

allModalButtons.forEach((el) => {
    el.addEventListener("click", function () {
        this.parentNode.parentNode.parentNode.classList.add("none");
    });
});

allCardsButtons.forEach((el) => {
    el.addEventListener("click", function () {
        const id = `${this.id.split("-")[2]}`;
        document.getElementById(id).parentNode.classList.remove("none");
    });
});

getInTouchBtn.addEventListener("click", function () {
    document.getElementById("get-in-touch").parentNode.classList.remove("none");
});

modalGetInBtn.addEventListener("click", function () {
    if (document.getElementById("modal-input-email").value == "") {
        alert("Please enter a valid email");
        return null;
    }
    document.getElementById("modal-input-email").value = "";
    alert("Thank you, expect a letter to the specified address");
});
