var theForm = document.getElementById("login_form"),
    heading1 = document.querySelector("h1"),
    step = 1,
    username = document.getElementById("user"),
    password = document.getElementById("pass");

// for rotating the form
function rotForm(formvar, dir) {
  if (dir == "up") {
    if (step == 1) {
      step = 4;
    } else {
      --step;
    }
  } else {
    if (step == 4) {
      step = 1;
    } else {
      ++step;
    }
  }
  formvar.className = "step" + step;
}

// create and assign rotForm() to all arrow buttons
var rotFunctions = [];
function newRotFunc(n) {
  return function() {
    document.querySelector(".side:nth-of-type(" + n + ") .nav .prev").addEventListener("click", function() {
      rotForm(theForm, "up");
    });
    document.querySelector(".side:nth-of-type(" + n + ") .nav .next").addEventListener("click", function() {
      rotForm(theForm, "down");
    });
  };
}
for (var i = 1; i < 5; ++i) {
  rotFunctions[i] = newRotFunc(i);
  rotFunctions[i]();
}

// add slide-up animation on submit
document.querySelector(".login").addEventListener("click", function() {
  // validate first
  if (username.value == "" && password.value == "") {
    step = 1;
    document.querySelector("label[for=user]").className = "error";
    document.querySelector("label[for=pass]").className = "error";
    theForm.className = "step1";
  } else if (username.value == "") {
    step = 1;
    document.querySelector("label[for=user]").className = "error";
    theForm.className = "step1";
  } else if (password.value == "") {
    step = 2;
    document.querySelector("label[for=pass]").className = "error";
    theForm.className = "step2";
  } else {
    step = 1;
    username.value = "";
    password.value = "";
    theForm.className = "slide-out";
    heading1.className = "fade-out";
  }
});

// validate fields on blur
function validateOnBlur(fieldVar, fieldId) {
  if (fieldVar.value != "") {
    document.querySelector("label[for=" + fieldId + "]").className = "";
  } 
}
username.addEventListener("blur", function() { validateOnBlur(this, "user") });
password.addEventListener("blur", function() { validateOnBlur(this, "pass") });