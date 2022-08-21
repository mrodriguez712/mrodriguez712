const myBtn = document.getElementById("myBtn");
const sectionTwo = document.getElementById("section-two");
let prevScrollpos = window.pageYOffset;

myBtn.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'})
});

function section() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 650) {
        document.getElementById("navbar").style.bottom = "0";
        document.getElementById("navbar").style.background = "#262626"
        document.getElementById("navbar").style.padding = "1em 0"
        document.getElementById("navbar").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.background = "#262626"
    } else {
        document.getElementById("navbar").style.bottom = "90%";
        document.getElementById("navbar").style.background = "#f8f8f8"
        document.getElementById("main-body").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.background = "#f8f8f8"
    }
    prevScrollpos = currentScrollPos;
}


