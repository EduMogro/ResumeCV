// TOGGLE MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');


// HIDDEN MENU

const navList = document.querySelector('.nav__list');
const navMenu = document.getElementById('nav-menu');

navList.addEventListener('click', (e) => {
    if (e.target && (e.target.tagName === 'A' || e.target.tagName === 'SPAN')) {
        navMenu.classList.remove('show-menu');
    }
})


// ACTIVE BUTTON IN NAV MENU

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if ((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}

window.addEventListener('scroll',scrollActive);



// SCROLL-TOP BUTTON

function scrollTop() {
    const scrolltop = document.getElementById('scroll-top');

    if (this.scrollY >= 200) {
        scrolltop.classList.add('show-scroll') 
    } else {
         scrolltop.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollTop);


// TOGGLE THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// FOR TOGGLE SCALE CV

function scaleCv() {
    document.body.classList.add('scale-cv');
}

function removeScale() {
    document.body.classList.remove('scale-cv');
}

// GENERATE PDF

let resumeButton = document.getElementById('resume-button');
let areaCv = document.getElementById('area-cv');

let opt = {
    margin:       [0, -3, 0, 0], // [-5, -3, 0, 0], // [top, left, bottom, right]
    filename:     'Hugo Eduardo Mogro.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    enableLinks:  true,
    html2canvas:  { scale: 4 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'p' }
  };

function generateResume() {
    html2pdf(areaCv, opt);
}

resumeButton.addEventListener('click', () => {
    scaleCv();
    generateResume();
    setTimeout(removeScale, 5000);
});