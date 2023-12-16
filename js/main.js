//all boxes in landing page
let laningBoxes = document.querySelectorAll('.landing-page .box');
//arrow click
let arrows = document.querySelectorAll('.arrow');
//Close Sidebar
let closeSidbar = document.querySelector('.close-sidebar');
//menu toggel
let menutoggel = document.querySelector('.menu-toggel');
//side bar
let sidbar = document.querySelector('.sidebar');

/* Start Loding */
let loding = document.querySelector(".loding");

setTimeout(() => {
    loding.classList.add("hiding");
}, 500);
/* End Loding */


/* Start Header */
let headr = document.querySelector(".header");

let scrolling = 0;

function hideHeader () {
    let scrollCase = scrolling < window.scrollY;
    if (scrollCase) {
        headr.classList.add("hide");
    } else {
        headr.classList.remove("hide");
    }
    scrolling = window.scrollY;
};

window.addEventListener("scroll" , () => {
    if (window.scrollY >= 50) {
        headr.classList.add("active");
        hideHeader();
    } else {
        headr.classList.remove("active");
    }
});
/* End Header */

/* Start SCroll To Top */
let scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = function () {
    if(scrollY >= 600) {
        scrollToTop.classList.add("show");
        scrollToTopClick();
    } else {
        scrollToTop.classList.remove("show");
    }
};

function scrollToTopClick() {
    scrollToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};
/* End SCroll To Top */



//Start sidebar

//open sidebar
menutoggel.addEventListener('click', () => {
    
    sidbar.classList.add('open');

});

//close sidebar
closeSidbar.addEventListener('click', () => {
    
    sidbar.classList.remove('open');

});

//Add And Remove Class Active
let li = document.querySelectorAll(".sidebar .links li");

li.forEach((liEle) => {
    liEle.addEventListener("click", (ele) => {
        
        li.forEach((liEle) => {
            liEle.classList.remove("active");
        });

        ele.target.classList.add("active");

    });
});


//Start Landing Page Animation

//Declear Set Interval
setInterval(() => {
    
    boxAnimation ();

}, 7000);

//Declear Index
let indexBox = 0;


//Main Function To Animation Box
function boxAnimation () {

//Remove Class Active
laningBoxes.forEach( box => {

    box.classList.remove('active');

});

//Add Class Acytive
laningBoxes[indexBox].classList.add('active');

    //Add Condition
    if (indexBox < 2) {

        indexBox++;

    } else {

        indexBox = 0;

    };

};



//Start Click To Change Box
let numclick= 0;

arrows.forEach(arrow => {
    
arrow.addEventListener( 'click',() => {

    if (arrow.dataset.direction == "right") {

        if (numclick < 2) {
            numclick++;
        } else {
            numclick = 0;
        };

    } else {

        if (numclick > 0) {
            numclick --;
        } else {
            numclick = 2;
        }
        
    };
    //Remove Class Active
    laningBoxes.forEach( box => {
        box.classList.remove('active');
    });
    //Add Class Acytive
    laningBoxes[numclick].classList.add('active');

});
});