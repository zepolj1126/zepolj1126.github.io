
function iconMouseOver() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[0].classList.add("animate__bounce");
    }

    
}


function iconMouseOut() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[0].classList.remove("animate__bounce");
    }
    
}

function iconMouseOver2() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[1].classList.add("animate__bounce");
    }


}


function iconMouseOut2() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[1].classList.remove("animate__bounce");
    }

}

function iconMouseOver3() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[2].classList.add("animate__bounce");
    }


}


function iconMouseOut3() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[2].classList.remove("animate__bounce");
    }

}

function iconMouseOver4() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[3].classList.add("animate__bounce");
    }


}


function iconMouseOut4() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[3].classList.remove("animate__bounce");
    }

}

function iconMouseOver5() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[4].classList.add("animate__bounce");
    }


}


function iconMouseOut5() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[4].classList.remove("animate__bounce");
    }

}

function iconMouseOver6() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[5].classList.add("animate__bounce");
    }


}


function iconMouseOut6() {

    var navIcon = document.querySelectorAll(".nav-icon");

    for (var i = 0; i < navIcon.length; i++) {
        navIcon[5].classList.remove("animate__bounce");
    }

}


var testimonials = document.querySelectorAll(".testimonial-text, .testimonials-icon");

for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.add("animate__backInLeft");
}


var block = document.querySelectorAll(".career-journey-block");

for (var i = 0; i < block.length; i++) {
    block[0].onmouseover = function () { block[0].classList.add("animate__bounce"); };
    block[0].onmouseout = function () { block[0].classList.remove("animate__bounce"); };

    block[1].onmouseover = function () { block[1].classList.add("animate__bounce"); };
    block[1].onmouseout = function () { block[1].classList.remove("animate__bounce"); };

    block[2].onmouseover = function () { block[2].classList.add("animate__bounce"); };
    block[2].onmouseout = function () { block[2].classList.remove("animate__bounce"); };

    block[3].onmouseover = function () { block[3].classList.add("animate__bounce"); };
    block[3].onmouseout = function () { block[3].classList.remove("animate__bounce"); };

    block[4].onmouseover = function () { block[4].classList.add("animate__bounce"); };
    block[4].onmouseout = function () { block[4].classList.remove("animate__bounce"); };
}

//Get the button
var backUpBtn = document.querySelectorAll(".scrollBackUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    for (var i = 0; i < backUpBtn.length; i++) {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backUpBtn[i].style.display = "block";
        } else {
            backUpBtn[i].style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}