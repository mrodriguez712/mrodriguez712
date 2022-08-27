const myBtn = document.getElementById("myBtn");
const workBtn = document.getElementById("work-btn");
const moreList = document.getElementById('more-list');
const sectionOne = document.getElementById("section-one");
const sectionTwo = document.getElementById("section-two");

let prevScrollpos = window.pageYOffset;

workBtn.addEventListener('click', function() {
    if (moreList.style.display === "none") {
        moreList.style.display = "block";
        window.scrollTo({ top: 1700, behavior: 'smooth' })
      } else {
        moreList.style.display = "none";
        // window.scrollTo({ top: 1800, behavior: 'smooth' })
      }
    
})

myBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});

sectionOne.addEventListener('click', function () {
    window.scrollTo({ top: 850, behavior: 'smooth' })
})

sectionTwo.addEventListener('click', function () {
    window.scrollTo({ top: 1800, behavior: 'smooth' })
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
        document.getElementById("navbar").style.bottom = "865px";
        document.getElementById("navbar").style.background = "#f8f8f8"
        document.getElementById("main-body").style.transition = "all 1s ease-in-out"
        document.getElementById("main-body").style.background = "#f8f8f8"
        document.getElementById("section-one").style.backgroundColor = "#f8f8f8"
        document.getElementById("section-two").style.backgroundColor = "#f8f8f8"
        document.getElementById("section-three").style.backgroundColor = "#f8f8f8"
    }
    prevScrollpos = currentScrollPos;
}

// Media Slides
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
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
