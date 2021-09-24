
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



$(document).ready(function () {

    //Sticky Footer
    function updateHeight() {
        var bodyHeight = $(window).outerHeight() - $('.navbar').outerHeight() - $('.page-footer-container').outerHeight();
        $('.container-wrapper').css('min-height', bodyHeight + 'px');
    }
    updateHeight();
    $(window).on("resize", updateHeight);

    

});


//Modal/sample images

// Get the modal
var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("image");

var modalImg = document.getElementById("img01");

var navbar = document.getElementsByTagName("nav")[0];



// Get the image and insert it inside the modal - use its "alt" text as a caption
for (var i = 0; i < img.length; i++) {

    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflowY = "hidden";
        navbar.classList.remove("fixed-top");
        navbar.classList.add("static-top");
    }

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
    navbar.classList.remove("static-top");
    navbar.classList.add("fixed-top");
}