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



const navList = document.querySelector('.nav__list');
const navMenu = document.getElementById('nav-menu');

navList.addEventListener('click', (e) => {
    if (e.target && (e.target.tagName === 'A' || e.target.tagName === 'SPAN')) {
        navMenu.classList.remove('show-menu');
    }
})




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





function scrollTop() {
    const scrolltop = document.getElementById('scroll-top');

    if (this.scrollY >= 200) {
        scrolltop.classList.add('show-scroll') 
    } else {
         scrolltop.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollTop);