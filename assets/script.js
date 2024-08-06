let changeIcon = function(icon) {
    icon.classList.toggle('bi-x');
}

// const navbarFixed = document.querySelectorAll('.navbar');
// let lastScrollTop = 0;
// let sombraAtivada = false;

// function adicionarSombra() {
//   addEventListener('scroll', function() {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop && !sombraAtivada) { 
//       navbarFixed.forEach(navbar => navbar.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)'); 
//       sombraAtivada = true; 
//     } else if (scrollTop === 0) { 
//       navbarFixed.forEach(navbar => navbar.style.boxShadow = 'none'); 
//       sombraAtivada = false; 
//     }

//     lastScrollTop = scrollTop;
//   });
// }

// adicionarSombra(); 