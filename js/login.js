
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


/* ===== input filed Name Login  ======= */
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


/* ===== input filed Name Login  ======= */



/* ===== input filed password Login  ======= */
let countPass = document.querySelector(".count_pass");
let progressPass = document.querySelector(".progerss_pass");
let divPassInput = document.querySelector(".div_pass_input");
let inputPass1 = document.querySelector(".input_pass_1");
let maxLengthPass1 = inputPass1.getAttribute("maxlength");


countPass.innerHTML = maxLengthPass1;

// c = 
inputPass1.oninput = function () {
    countPass.innerHTML = maxLengthPass1 - this.value.length;
    countPass.innerHTML == 0 ? countPass.classList.add("zero") : countPass.classList.remove("zero");
    
    // set the progress
    progressPass.style.width = `${(this.value.length * 100) / maxLengthPass1}%`;
}

/* ===== input filed password Login  ======= */



/* ====== start show and hidden pass  ====== */

let input_Pass_sh = document.getElementById("input_pass_1"),
iconShow = document.querySelector(".ey-sh"),
iconHidden = document.querySelector(".ey-hi");

console.log(iconHidden);

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




/* ====== end show and hidden pass  ====== */










