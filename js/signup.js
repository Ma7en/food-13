
/* ====== start dark ====== */

let darkIcon = document.querySelector(".dark-icon");
let darkIconMoon = document.querySelector(".dark-icon .icon-moon");
let darkIconSun = document.querySelector(".dark-icon .icon-sun");
let body = document.querySelector("body");

darkIconMoon.addEventListener("click", () => {
    body.classList.add("dark");
    
    darkIconSun.style.display = "block";
    darkIconMoon.style.display = "none";
});

darkIconSun.addEventListener("click", () => {
    body.classList.remove("dark");
    
    darkIconSun.style.display = "none";
    darkIconMoon.style.display = "block";
});



/* ====== end dark ======= */



/* ===== input filed Name signUp  ======= */
// input filed Name Login 
let countName = document.querySelector(".count_name");
let progressName = document.querySelector(".progerss_name");
let divNameInput = document.querySelector(".div_name_input");
let inputName1 = document.querySelector(".input_name_1");
let maxLengthName1 = inputName1.getAttribute("maxlength");


countName.innerHTML = maxLengthName1;

// c = 
inputName1.oninput = function () {
    countName.innerHTML = maxLengthName1 - this.value.length;
    countName.innerHTML == 0 ? countName.classList.add("zero") : countName.classList.remove("zero");
    
    // set the progress
    progressName.style.width = `${(this.value.length * 100) / maxLengthName1}%`;
}


/* ======= input filed Name signUp  ======= */




/* ===== input filed Email SignUp  ======= */
// input filed Name Login 
let countEmail = document.querySelector(".count_email");
let progressEmail = document.querySelector(".progerss_email");
let divEmailInput = document.querySelector(".div_email_input");
let inputEmail1 = document.querySelector(".input_email_1");
let maxLengthEmail1 = inputEmail1.getAttribute("maxlength");


countEmail.innerHTML = maxLengthEmail1;

// c = 
inputEmail1.oninput = function () {
    countEmail.innerHTML = maxLengthEmail1 - this.value.length;
    countEmail.innerHTML == 0 ? countEmail.classList.add("zero") : countEmail.classList.remove("zero");
    
    // set the progress
    progressEmail.style.width = `${(this.value.length * 100) / maxLengthEmail1}%`;
}


/* ===== input filed Email SignUp  ======= */



/* ===== input filed password 1 SignUp   ======= */
let divPassInput_1 = document.querySelector(".div_pass_input_1");
let inputPass_1 = document.querySelector(".input_pass_1");
let maxLengthPass_1 = inputPass_1.getAttribute("maxlength");
let progressPass_1 = document.querySelector(".progerss_pass_1");
let countPass_1 = document.querySelector(".count_pass_1");


countPass_1.innerHTML = maxLengthPass_1;

// c = 
inputPass_1.oninput = function () {
    countPass_1.innerHTML = maxLengthPass_1 - this.value.length;
    countPass_1.innerHTML == 0 ? countPass_1.classList.add("zero") : countPass_1.classList.remove("zero");
    
    // set the progress
    progressPass_1.style.width = `${(this.value.length * 100) / maxLengthPass_1}%`;
}

/* ===== input filed password 1 SignUp  ======= */



/* ===== input filed password 2 SignUp ======= */
// input filed Name Login 
let divPassInput_2 = document.querySelector(".div_name_input_2");
let inputPass_2 = document.querySelector(".input_pass_2");
let maxLengthPass_2 = inputPass_2.getAttribute("maxlength");
let progressPass_2 = document.querySelector(".progerss_pass_2");
let countPass_2 = document.querySelector(".count_pass_2");


countPass_2.innerHTML = maxLengthPass_2;

// c = 
inputPass_2.oninput = function () {
    countPass_2.innerHTML = maxLengthPass_2 - this.value.length;
    countPass_2.innerHTML == 0 ? countPass_2.classList.add("zero") : countPass_2.classList.remove("zero");
    
    // set the progress
    progressPass_2.style.width = `${(this.value.length * 100) / maxLengthPass_2}%`;
}


/* ===== input filed Password 2 SignUp  ======= */


/* ====== start show and hidden pass 1  ====== */

let input_Pass_sh = document.getElementById("input_pass_1"),
iconShow = document.querySelector(".ey-sh"),
iconHidden = document.querySelector(".ey-hi");


iconHidden.addEventListener("click", () => {

    iconHidden.style.display = "none";
    iconShow.style.display = "block";

    input_Pass_sh.setAttribute("type", "text");

});

iconShow.addEventListener("click", () => {

    iconHidden.style.display = "block";
    iconShow.style.display = "none";
    
    input_Pass_sh.setAttribute("type", "password");
});




/* ====== end show and hidden pass 1  ====== */



/* ====== start show and hidden pass 1  ====== */

let input_Pass_sh_2 = document.getElementById("input_pass_2"),
iconShow_2 = document.querySelector(".ey-sh-2"),
iconHidden_2 = document.querySelector(".ey-hi-2");


iconHidden_2.addEventListener("click", () => {

    iconHidden_2.style.display = "none";
    iconShow_2.style.display = "block";

    input_Pass_sh_2.setAttribute("type", "text");

});

iconShow_2.addEventListener("click", () => {

    iconHidden_2.style.display = "block";
    iconShow_2.style.display = "none";
    
    input_Pass_sh_2.setAttribute("type", "password");
});


/* ====== end show and hidden pass 1  ====== */




















