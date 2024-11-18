window.addEventListener('scroll', function() {
    const shopSection = document.querySelector('.shopsection');
    const shopImg = document.querySelector('.shopimg');
    const sectionTop = shopSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight) {
        shopImg.classList.add('animate-in');
        
    }
});
 