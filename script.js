let menu = document.querySelector('#menu');
let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
let scrollTop = document.querySelector('.scroll-top');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let windo = window.pageYOffset;
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add('sticky');
        scrollTop.style.display = "inline-block";
    }
    else {
        header.classList.remove('sticky');
        scrollTop.style.display = "none";
    }

    for (let section of sections) {
        let height = section.offsetHeight;
        let offset = section.offsetTop - 200;
        if (windo > offset && windo <= offset + height) {
            document.querySelector('a.active').classList.remove('active');
            console.log(section);
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
        }
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

