// Get the button elements
const btn_3s = document.querySelectorAll('.btn-3'); // Using querySelectorAll since btn-3 class may have multiple elements
const about_btns = document.querySelectorAll(".about-btn");
const btn_icons = document.querySelectorAll('.btn-icon');
const btn_svgs = document.querySelectorAll('btn-svg')


// Add mouseover event listeners for each btn-3 element
btn_3s.forEach((btn_3, index) => {
    const btn_icon = btn_3.querySelector('.btn-icon'); // Find the .btn-icon element inside each .btn-3

    btn_3.addEventListener('mouseover', () => {
        const btn_0 = btn_3.querySelector('.btn-icon-0');
        const btn_p = btn_3.querySelector(".btn-icon-p");

        btn_0.style.transition = '0.3s';
        btn_0.style.width = '70px';
        btn_0.style.height = '70px';

        btn_icon.style.backgroundColor = '#111111'; // Change background color for btn_icon
        
        btn_p.style.color = '#AAA';
        btn_p.style.transition = '0.3s';
    });

    // Add mouseout event listener for each btn-3 element
    btn_3.addEventListener('mouseout', () => {
        const btn_0 = btn_3.querySelector('.btn-icon-0');
        const btn_p = btn_3.querySelector(".btn-icon-p");

        btn_p.style.color = 'rgba(170, 170, 170, 0.7)';
        btn_p.style.transition = '0.3s';

        btn_0.style.transition = '0.3s';
        btn_0.style.width = '40px';
        btn_0.style.height = '40px';

        btn_icon.style.backgroundColor = '#000'; // Change background color for btn_icon
    });

    // Add mouseover and mouseout event listeners for btn-icons
    btn_icons.forEach((btn_icon, iconIndex) => {
        if (iconIndex === index) {
            btn_icon.addEventListener('mouseover', () => {
                // Add your mouseover functionality for btn-icons here
            });

            btn_icon.addEventListener('mouseout', () => {
                // Add your mouseout functionality for btn-icons here
            });
        }
    });
});

// Add mouseover and mouseout event listeners for about-btns
about_btns.forEach(about_btn => {
    const btn_p = about_btn.querySelector(".btn-icon-p");

    about_btn.addEventListener('mouseover', () => {
        const btnsvgs = about_btn.querySelectorAll(".about-btn-svg");

        btnsvgs.forEach(btnsvg => {
            btnsvg.style.transform = 'rotate(-60deg)';
            btnsvg.style.transition = '0.3s';
        });
        btn_p.style.color = '#dedede';
        btn_p.style.transition = '0.3s';
    });

    about_btn.addEventListener('mouseout', () => {
        const btnsvgs = about_btn.querySelectorAll(".about-btn-svg");

        btnsvgs.forEach(btnsvg => {
            btnsvg.style.transform = 'rotate(0deg)';
            btnsvg.style.transition = '0.3s';
        });
        btn_p.style.color = '#AAA';
        btn_p.style.transition = '0.3s';
    });
});


const menuBtn = document.getElementById('menu-btn');
const navMenuResponsive = document.querySelector('.nav_menu-responsive');
const navMenuResponsiveul = document.querySelector('.nav_menu-responsive ul');

menuBtn.addEventListener('change', function() {
    if (this.checked) {
        navMenuResponsive.style.display = 'flex';
        navMenuResponsiveul.style.display = 'flex';
        navMenuResponsive.style.opacity = '1';
        navMenuResponsive.classList.add('slide-in');
    } else {
        navMenuResponsive.style.opacity = '0';
        navMenuResponsive.classList.remove('slide-in');
        navMenuResponsive.classList.add('slide-out');
        setTimeout(() => {
            navMenuResponsive.style.display = 'none';
            navMenuResponsiveul.style.display = 'none';
            navMenuResponsive.classList.remove('slide-out');
        }, 500); // Wait for the animation to complete (500ms)
    }
});

const navLinks = document.querySelectorAll('.nav_link-responsive');

menuBtn.addEventListener('change', function() {
    if (this.checked) {
        navMenuResponsive.style.display = 'flex';
        navMenuResponsive.style.opacity = '1';
        navMenuResponsive.classList.add('slide-in');
    } else {
        navMenuResponsive.style.opacity = '0';
        navMenuResponsive.classList.remove('slide-in');
        navMenuResponsive.classList.add('slide-out');
        setTimeout(() => {
            navMenuResponsive.style.display = 'none';
            navMenuResponsive.classList.remove('slide-out');
        }, 500); // Wait for the animation to complete (500ms)
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.checked = false; // Close the menu when a link is clicked
        navMenuResponsive.style.opacity = '0';
        navMenuResponsive.classList.remove('slide-in');
        navMenuResponsive.classList.add('slide-out');
        setTimeout(() => {
            navMenuResponsive.style.display = 'none';
            navMenuResponsive.classList.remove('slide-out');
        }, 500); // Wait for the animation to complete (500ms)
    });
});



// FADE HARF ANİMASYONU
document.addEventListener("DOMContentLoaded", function() {
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');

    fadeInUpElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        } else {
            window.addEventListener('scroll', function() {
                if (isElementInViewport(element)) {
                    element.classList.add('show');
                    window.removeEventListener('scroll', this);
                }
            });
        }
    });
});


// Ekranın görünür kısmını kontrol etmek için bir fonksiyon
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function addAnimationOnScroll() {
    var elements = document.querySelectorAll('.fade-in-up, .another-fade-in-up');
  
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', addAnimationOnScroll);
  document.addEventListener('scroll', addAnimationOnScroll);
  