//smooth scoll for view my project button

function scrolltoprojects(){
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}


//hamb urger menu functionalities

const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//closing the menu click on a link

document.querySelectorAll('.nav-menu a').forEach(link =>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});