setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date(); // Fixed typo: newDate() to new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours >= 12) {
        day_night = "PM";
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
}, 1000); // Updated interval to 1000ms (1 second)






function myMenuFunction() {
    var menuBtn = document.getElementById('myNavMenu');
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedtext", {
    strings: ["Font-End Developer", "Back-End Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 2000
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});
sr.reveal('.about-info', { delay: 100 });
sr.reveal('.contact-info', { delay: 100 });
sr.reveal('.tools-h2', { delay: 100 });

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.skills-box', { delay: 100 });
sr.reveal('.form-control', { delay: 100 });
sr.reveal('.subject', { delay: 100 });
sr.reveal('.timeline-year', { delay: 100 });
sr.reveal('.tools-container', { delay: 100 });



const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.progress_bar', { delay: 100 });
sr.reveal('.personalinfo', { delay: 100 });
sr.reveal('.gettouch ', { delay: 100 });


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

console.log("Timeline Loaded!");



document.querySelectorAll('.gallery img').forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.filter = 'brightness(1.2)';
    });

    img.addEventListener('mouseout', () => {
        img.style.filter = 'brightness(1)';
    });
});