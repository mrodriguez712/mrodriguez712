const myBtn = document.getElementById("myBtn");
const sectionOne = document.getElementById("section-one")
let prevScrollpos = window.pageYOffset;

myBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});

sectionOne.addEventListener('click', function () {
    window.scrollTo({ top: 890, behavior: 'smooth' })
})

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 650) {
        document.getElementById("navbar").style.bottom = "0";
        document.getElementById("navbar").style.background = "#262626"
        document.getElementById("navbar").style.padding = "1em 0"
        document.getElementById("navbar").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.background = "#262626"
        document.getElementById("section-one").style.backgroundColor = "#262626"
        document.getElementById("section-two").style.backgroundColor = "#262626"
        document.getElementById("section-three").style.backgroundColor = "#262626"
    } else {
        document.getElementById("navbar").style.bottom = "91%";
        document.getElementById("navbar").style.background = "#f8f8f8"
        document.getElementById("main-body").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.background = "#f8f8f8"
        document.getElementById("section-one").style.backgroundColor = "#f8f8f8"
        document.getElementById("section-two").style.backgroundColor = "#f8f8f8"
        document.getElementById("section-three").style.backgroundColor = "#f8f8f8"
    }
    prevScrollpos = currentScrollPos;
}

// mediaquery for js

// const mql = window.matchMedia('(max-width: 600px)')

// function screenTest(e) {
//     if (e.matches) {
//         document.body.style.backgroundColor = 'red'
//     } else {
//         document.body.style.background = 'blue'
//     }
// }

// mql.addEventListener('change', screenTest)
