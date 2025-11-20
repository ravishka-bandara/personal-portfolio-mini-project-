//smooth scoll for view my project button

function scrolltoprojects(){
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}


//hamb urger menu functionalities

const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open'); //scroll lock
});

//closing the menu click on a link

document.querySelectorAll('.nav-menu a').forEach(link =>{
    link.addEventListener('click',()=> {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open'); // enable scroll again
    });
});



// logo preview moadl


const logo = document.querySelector('.logo');
const logoModal = document.getElementById('logoModal');
const closeModal = document.querySelector('.close-modal');

//open when logo clicked

logo.addEventListener('click',()=>{
    logoModal.classList.add('active');
});

// close modal when x clicked

logoModal.addEventListener('click', ()=>{
    logoModal.classList.remove('active');
});

//close model when click outside

logoModal.addEventListener('click',(e)=>{
    if (e.target===logoModal){
        logoModal.classList.remove('active');
    }
});

//close model with escape key

document.addEventListener('keydown',(e)=>{
    if (e.key === 'escape' && logoModal.classList.contains('active')){
        logoModal.classList.remove('active');
    }
});


// combine handle for logo mobile and desctop

let scrollTimeout;

function handleAllscroll(){
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('nav');
    const logoImg = document.querySelector('.logo-img');


// mobile logo show and hide

if(window.innerWidth <= 768){
    if(window.scrollY > 100){
        logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }
} else{
    //always show on desktop
    logo.classList.remove('hidden');

    //desctop nav bar effects
    if(window.scrollY >100){
        nav.classList.add('scrolled');
        logoImg.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        logoImg.classList.remove('scrolled');
    }


    //hide nav bar when scrolling show when stopped scroll

    nav.classList.add('hidden');
    clearTimeout('scrollTimeout');
    scrollTimeout = setTimeout(() => {
        nav.classList.remove('hidden');
        }, 550);
    }
}

// event listners 

window.addEventListener('scroll', handleAllscroll);
window.addEventListener('resize', handleAllscroll);