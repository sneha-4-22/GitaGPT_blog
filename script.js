const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Toggle between the login and sign-up forms
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Toggle between the login and sign-up forms
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  formContainer.classList.remove("active");
});
