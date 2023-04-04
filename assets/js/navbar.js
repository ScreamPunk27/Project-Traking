const buttonBurger=document.getElementById('btn-burger');
const buttonClose=document.getElementById('btn-close');
const navLinks=document.querySelector('.nav-links');


buttonBurger.addEventListener('click',()=>{
        buttonBurger.style.display="none";
        buttonClose.style.display="block";
        navLinks.style.display="block";
        navLinks.style.animationName="animationOpen";
        navLinks.style.animationDuration=".3s";
});

buttonClose.addEventListener('click',()=>{
        buttonClose.style.display="none";
        buttonBurger.style.display="block";
        navLinks.style.display="none";
       
});