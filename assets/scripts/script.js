window.addEventListener('scroll', Reveal);

function Reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', leftReveal);

function leftReveal() {
    let reveals = document.querySelectorAll('.left-reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 300;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', rightReveal);

function rightReveal() {
    let reveals = document.querySelectorAll('.right-reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}


const bar = document.getElementById('menubar');
const navBar = document.getElementById('navbar');

let check = true;

bar.addEventListener('click', function () {
    if (check) {
        navBar.style.height = "60px";
        var x = window.matchMedia("(min-width: 671px)");
        function barAuto(x) {
            if (x.matches) {
                navBar.style.height = "0px";
            } else {
                check = true;
            }
        }

        barAuto(x);
        x.addListener(barAuto);

        check = false;
    } else {
        navBar.style.height = "0px";
        check = true;
    }
});