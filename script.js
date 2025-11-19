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



//hide logo when scrolling on mobile

function handleScroll(){
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');

    // only run phone screens

    if(window.innerWidth <= 768){
        if (window.scrollY > 100){ //after scroll 100 px
            logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }
} else {
    // always show on desktop
    logo.classList.remove('hidden');
}
}


//scroll event listners and  check on resize

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize',handleScroll);



// logo preview moadl


const logo = document.querySelector('.logo');
const logoModal = document.getElementById('logoModal');
const closeModal = document.getElementById('.close-modal');

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

Document.addEventListener('keydown',(e)=>{
    if (e.key === 'escape' && logoModal.classList.contains('active')){
        logoModal.classList.remove('active');
    }
});