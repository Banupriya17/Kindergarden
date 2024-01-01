let nav = document.querySelector('.icons');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
   
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}