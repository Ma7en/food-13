



/* ====== start loader ====== */


// function loader() {
//     document.querySelector(".loader-container").classList.add("fade-out");
// }

// function fadeOut() {
//     setInterval(loader, 3000);
// }

// window.addEventListener("load", fadeOut());


/* ====== end loader ====== */


/*
==============================================
==============================================
*/


/* ====== start switcher color ====== */

let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});



// sweitcher color 
document.body.classList.add(localStorage.getItem("pageColors") || "color-1");

let elements = document.querySelectorAll(".colors span");
let classLists = [];

for(let i = 0; i < elements.length; i++) {

    // get class list 
    classLists.push(elements[i].getAttribute("data-colors"));

    elements[i].addEventListener("click", function () {

        // remove all old class
        // document.body.classList.remove(...classLists);
        document.body.classList.remove("color-1", "color-2", "color-3", "color-4", "color-5");

        // add cureent class form attribute
        document.body.classList.add(this.getAttribute("data-colors"));

        // add data to local storage
        localStorage.setItem("pageColors", this.getAttribute("data-colors"));

    },false);

}


/* ====== end switcher color ====== */


/*
==============================================
==============================================
*/


/* ====== start dark mode ====== */
// document.body.classList.add(localStorage.getItem("darkColor") || "color-1");

let dayNight = document.querySelector(".day-night");
let iDarkColor = document.querySelector(".day-night i");
let body = document.querySelector("body");

if(localStorage.getItem("theme") == null) {

    localStorage.getItem("theme", "light");

}

let d2localData = localStorage.getItem("theme");

if(d2localData == "light") {
    body.classList.remove("dark");

} else if (d2localData == "dark") {
    body.classList.add("dark");
}


dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");

    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    // add data to local storage
    // localStorage.setItem("darkColor", iDarkColor.getAttribute("data-dark"));
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        
        dayNight.querySelector("i").classList.add("fa-sun");
        
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    
    }
});




/* ====== end dark mode ====== */


/*
==============================================
==============================================
*/


/* ======= start toggle menu =======*/

let togglerMenu = document.querySelector(".toggler-menu");
let megaMenu = document.querySelector(".mega-menu");
let landing = document.querySelector(".landing");

// show
togglerMenu.addEventListener("click", () => {
    megaMenu.classList.add("open");
});

megaMenu.addEventListener("click", () => {
    megaMenu.classList.remove("open");
});

landing.addEventListener("click", () => {
    megaMenu.classList.remove("open");
});

// // hidden 
// document.onscroll = () => {
//     megaMenu.classList.remove("open");
// }



/* ======= end toggle menu =======*/


/*
==============================================
==============================================
*/


/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})




// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         btnTop.style.display = "block";
//     } else {
//         btnTop.style.display = "none";
//     }
// });

// btnTop.onclick = () => {
//     window.scrollTo({
//         // left: 0,
//         top: 0,
//         behavior: 'smooth',
//     })
// }

/* ====== end scroll to top btn ===== */


/*
==============================================
==============================================
*/


/* ====== 4 start gallery lightbox =======*/
let lightBox = document.querySelector(".lightbox");
let lightBoxImg = lightBox.querySelector(".lightbox-img");
let lightBoxText = lightBox.querySelector(".caption-text");
let lightBoxCounter = lightBox.querySelector(".caption-counter");
let lightboxClose = lightBox.querySelector(".lightbox-close");
let itemIndex = 0;

let portfolioItems = document.querySelectorAll(".portfolio-item-inner");
let totalPortfolioItems = portfolioItems.length;


for(let i = 0; i < totalPortfolioItems; i++) {
    portfolioItems[i].addEventListener("click", () => {
        itemIndex = i;
        changeItem();
        toggleLightBox();
    });
}

function nextItem() {
    if(itemIndex === totalPortfolioItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }

    changeItem();
}

function prevItem() {
    if(itemIndex === 0) {
        itemIndex = totalPortfolioItems + 1;
    } else {
        itemIndex--;
    }

    changeItem();
}

function toggleLightBox() {
    lightBox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightBoxImg.src = imgSrc;
    lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightBoxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItems;
}

// close lightbox
lightBox.addEventListener("click", (event) => {
    if(event.target === lightBox || event.target === lightBox) {
        toggleLightBox();
    }
});

// lightboxClose.onclick = function() {
//     // lightBox.classList.remove("open");
//     lightBox.classList.toggle("open");
// }

// // lightboxClose.addEventListener("click", (e) => {

// //     lightBox.classList.remove("open");
// //     lightBox.classList.toggle("open");
// // });


/* ====== 4 end gallery =======*/


/*
==============================================
==============================================
*/


/* ====== 6 start details ====== */

let bulletsDetails = document.querySelectorAll(".bullets_details .bult");
let bulDetArray = Array.from(bulletsDetails);

let textDetails = document.querySelectorAll(".top .left .det-cont");
let textDetArray = Array.from(textDetails);

bulDetArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        bulDetArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        /* text */
        textDetArray.forEach((textDetails) => {
            textDetails.style.display = "none";
        });

        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.detai).style.display = "flex";
    });
});


/* ====== 6 end details ====== */


/*
==============================================
==============================================
*/


/* ====== 7 start orders ====== */

let bulletsOrders = document.querySelectorAll(".bullets_orders li");
let bulOrdArray = Array.from(bulletsOrders);

let textOrder = document.querySelectorAll(".container .order");
let textOrdArray = Array.from(textOrder);

bulOrdArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        bulOrdArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        /* text */
        textOrdArray.forEach((textOrder) => {
            textOrder.style.display = "none";
        });

        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.order).style.display = "flex";
    });
});


/* ====== 7 end orders ====== */


/*
==============================================
==============================================
*/

/* ====== 11 Start elements ====== */


let elementsSkills = document.querySelector(".elements");
let progressSpans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {

    if (window.scrollY >= elementsSkills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        progressSpans.forEach((span) => {
            span.style.width = "0px";
        });
    }


});


/* ====== 11 end elements ====== */


/*
==============================================
==============================================
*/


/* ====== 13 start Videos ====== */

let vMarquee = document.querySelector(".videos .dsc marquee");

console.log(vMarquee);

vMarquee.addEventListener("mouseover", function() {
    this.stop();
});

vMarquee.addEventListener("mouseout", function() {
    this.start();
});


// vMarquee.

/* ====== 13 end Videos ====== */


/*
==============================================
==============================================
*/



/* ====== 14 start timer events ====== */
// 1000 milisecond = 1sound
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

window.addEventListener("scroll", () => {
    if (window.scrollY >= sectionStats.offsetTop) {
        if (!startedStats) {
            boxNumbers.forEach((num) => startCountStats(num));
        }

        sectionStats = true;
    }
});


let counter = setInterval(() => {

    // get data now
    let dateNew = new Date().getTime();

    let dataDiff = countDownDate - dateNew;

    // get time uites
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dataDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dataDiff % ( 1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dataDiff % ( 1000 * 60)) / (1000));

    document.querySelector(".days-event").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours-event").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes-event").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds-event").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dataDiff < 0) {
        clearInterval(counter);
    }
    
}, 100)


/* ====== 14 end timer events ====== */


/*
==============================================
==============================================
*/


/* ====== 15 start stats numbers ======*/

let boxNumbers = document.querySelectorAll(".box .number");
let sectionStats = document.querySelector(".stats");
let startedStats = false;

function startCountStats(ele) {
    let stats = ele.dataset.stats;
    let  count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == stats) {
            clearInterval(count);
        }
    }, 2000 / stats);
}

// startCountStats(document.querySelectorAll(".box .number")[0]);

/* ====== 15 end stats numbers ======*/


/*
==============================================
==============================================
*/









