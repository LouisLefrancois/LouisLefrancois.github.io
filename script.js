const header = document.querySelector('header');
const headerBG = document.querySelector('headerBG');

let prevScrollpos = window.pageYOffset;


window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    prevScrollpos = currentScrollPos;
})





window.onscroll = function(ev) {

    if (window.pageYOffset == 0) {
        document.getElementById("headerBG").classList.remove('headerBG');
    } else {
        document.getElementById("headerBG").classList.add('headerBG');
    }


    if (window.pageYOffset >= 300) {
        var changeIt = document.getElementById('sneaky-about');

        changeIt.style.visibility = 'visible';
        document.getElementById("sneaky-about").classList.add('fadeInFaster');
    }


    if (window.pageYOffset >= 1090) {
        var changeIt = document.getElementById('sneaky-education');

        changeIt.style.visibility = 'visible';
        document.getElementById("sneaky-education").classList.add('fadeInFaster');
    }


    if (window.pageYOffset >= 1765) {
        var changeIt = document.getElementById('sneaky-experiences');

        changeIt.style.visibility = 'visible';
        document.getElementById("sneaky-experiences").classList.add('fadeInFaster');
    }


    if (window.pageYOffset >= 2543) {
        var changeIt = document.getElementById('sneaky-contact');

        changeIt.style.visibility = 'visible';
        document.getElementById("sneaky-contact").classList.add('fadeInFaster');
    }

};





const titreSpans1 = document.querySelector('.h1');
const titreSpans2 = document.querySelector('.h2');
const titreSpans3 = document.querySelector('.h3');
const w = document.querySelector('.w');
const d = document.querySelector('.d');
const paragraphSpans1 = document.querySelector('.p1');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');


window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL
        .from(titreSpans1, .5, { top: 50, opacity: 0, ease: "power2.out" }, 1) //  durée d'exec , sec avant exec
        .from(titreSpans2, .5, { top: 50, opacity: 0, ease: "power2.out" }, 1.2, '-=1')
        .from(titreSpans3, .5, { top: 50, opacity: 0, ease: "power2.out" }, 1.4, '-=1')
        .from(paragraphSpans1, .5, { top: 50, opacity: 0, ease: "power2.out" }, 1.6, '-=1')
        .from(w, 1.5, { opacity: 0, ease: "power2.out" }, 1.7)
        .from(d, 1.5, { opacity: 0, ease: "power2.out" }, 1.7)
        .from(icon1, .3, { right: 100, opacity: 0, ease: "power2.out" }, 2.1)
        .from(icon2, .3, { right: 100, opacity: 0, ease: "power2.out" }, 2)
    TL.play();
});





document.addEventListener("mousemove", parallax1);

function parallax1(e) {
    document.querySelectorAll("#para").forEach(function(move) {

        var moving = move.getAttribute("data-value");
        var x = (e.clientX * moving) / 300;
        var y = (e.clientY * moving) / 300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}



document.addEventListener("mousemove", parallax2);

function parallax2(e) {
    document.querySelectorAll("#paraTxt").forEach(function(move) {

        var moving = move.getAttribute("data-value");
        var x = (e.clientX * moving) / 300;
        var y = (e.clientY * moving) / 300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}





const burger = document.getElementById('burger');
const sidebar = document.getElementById('navbar');
// const blurred = document.getElementById('blurred');


burger.onclick = function() {
    burger.classList.toggle('activeBurger')
    sidebar.classList.toggle('activeSidebar')
    document.body.classList.toggle('lockedScroll')
    blurred.classList.toggle('activeBlurred')
}

document.onclick = function(e) {
    if (e.target.id !== 'burger' && e.target.id !== 'navbar' && e.target.id !== 'dash1' && e.target.id !== 'dash2' && e.target.id !== 'dash3' && e.target.id !== 'dash4') {
        burger.classList.remove('activeBurger')
        sidebar.classList.remove('activeSidebar')
        document.body.classList.remove('lockedScroll')
        blurred.classList.remove('activeBlurred')
    }
}









//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
    //Get the hyperlink target and if it refers to an id go inside condition
    var elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        //Replace the regular action with a scrolling to target on click
        elem.addEventListener("click", function(ev) {
            ev.preventDefault();
            //Scroll to the target element using replace() and regex to find the href's target id
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});