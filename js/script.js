/* =====================================================
   NTM PORTFOLIO WEBSITE
   SCRIPT.JS - PART 1
   Nigel Takunda Mujiche
===================================================== */


/* =========================
   REMOVE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});



/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click", () => {


        navLinks.classList.toggle("active");


        menuBtn.innerHTML = 
        navLinks.classList.contains("active")
        ?
        '<i class="fa-solid fa-xmark"></i>'
        :
        '<i class="fa-solid fa-bars"></i>';


    });

}



/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a")
.forEach(link => {


    link.addEventListener("click", () => {


        if(navLinks){

            navLinks.classList.remove("active");

        }


        if(menuBtn){

            menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }


    });


});



/* =========================
   TYPING EFFECT
========================= */


const typingText = document.getElementById("typing-text");


const words = [

    "Business Student",

    "Entrepreneur",

    "Future Finance Professional",

    "Technology Enthusiast"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    if(!typingText) return;



    const currentWord = words[wordIndex];



    if(!deleting){


        typingText.textContent =
        currentWord.substring(0,charIndex++);



        if(charIndex > currentWord.length){


            deleting = true;


            setTimeout(typeEffect,1200);

            return;


        }


    }else{


        typingText.textContent =
        currentWord.substring(0,charIndex--);



        if(charIndex < 0){


            deleting = false;


            wordIndex =
            (wordIndex + 1) % words.length;


        }


    }



    setTimeout(typeEffect,80);


}



typeEffect();




/* =========================
   SCROLL TO TOP
========================= */


const scrollTop =
document.getElementById("scroll-top");



window.addEventListener("scroll", () => {



    if(window.scrollY > 400){


        scrollTop.classList.add("active");


    }else{


        scrollTop.classList.remove("active");


    }



});



if(scrollTop){


    scrollTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}




/* =========================
   NAVBAR SCROLL EFFECT
========================= */


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(8,11,18,0.95)";


    }else{


        header.style.background =
        "rgba(8,11,18,0.75)";


    }


});/* =====================================================
   SCRIPT.JS - PART 2
   COUNTERS | DARK MODE | ANIMATIONS
===================================================== */


/* =========================
   STATISTICS COUNTER
========================= */


const counters = document.querySelectorAll(".counter");


const startCounter = (counter)=>{


    const target =
    Number(counter.getAttribute("data-target"));


    let count = 0;


    const updateCounter = ()=>{


        const increment =
        target / 100;



        if(count < target){


            count += increment;


            counter.textContent =
            Math.ceil(count);


            setTimeout(updateCounter,20);


        }else{


            counter.textContent =
            target;


        }


    };


    updateCounter();


};



const counterObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            startCounter(entry.target);


            counterObserver.unobserve(entry.target);


        }


    });


},{


    threshold:.5


});



counters.forEach(counter=>{


    counterObserver.observe(counter);


});





/* =========================
   DARK MODE TOGGLE
========================= */


const themeBtn =
document.getElementById("theme-toggle");



if(themeBtn){


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");



    const icon =
    themeBtn.querySelector("i");



    if(document.body.classList.contains("light-mode")){


        icon.className =
        "fa-solid fa-sun";


    }else{


        icon.className =
        "fa-solid fa-moon";


    }



});


}





/* =========================
   SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(

"section, .card, .project-card, .timeline-item"

);



revealElements.forEach(element=>{


    element.classList.add("reveal");


});



const revealObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},{


    threshold:.15


});



revealElements.forEach(element=>{


    revealObserver.observe(element);


});/* =====================================================
   SCRIPT.JS - PART 3
   FINAL POLISH & OPTIMIZATION
===================================================== */


/* =========================
   SAVE THEME PREFERENCE
========================= */


const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    document.body.classList.add("light-mode");

}



if(themeBtn){


    themeBtn.addEventListener("click",()=>{


        if(document.body.classList.contains("light-mode")){


            localStorage.setItem(
                "theme",
                "light"
            );


        }else{


            localStorage.setItem(
                "theme",
                "dark"
            );


        }


    });


}





/* =========================
   CONTACT FORM
========================= */


const contactForm =
document.querySelector(".contact-form");



if(contactForm){


contactForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const button =
    contactForm.querySelector("button");



    button.innerHTML =
    '<i class="fa-solid fa-check"></i> Message Sent';



    button.style.background =
    "#22c55e";



    setTimeout(()=>{


        button.innerHTML =
        "Send Message";


        button.style.background =
        "";


        contactForm.reset();


    },3000);



});


}





/* =========================
   UPDATE YEAR AUTOMATICALLY
========================= */


const year =
document.querySelector(".copyright");



if(year){


    const currentYear =
    new Date().getFullYear();



    year.innerHTML =
    `© ${currentYear} Nigel Takunda Mujiche. All Rights Reserved.`;


}




/* =========================
   SMOOTH NAVIGATION OFFSET
========================= */


document.querySelectorAll(
'nav a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        e.preventDefault();



        const section =
        document.querySelector(
        this.getAttribute("href")
        );



        if(section){


            section.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});





/* =========================
   IMAGE LOADING EFFECT
========================= */


const images =
document.querySelectorAll("img");



