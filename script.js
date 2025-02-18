
//get buttons from the html
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
let images = [];



//fetch all the images 
async function loadImages() {
    try {
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random/50');
        const data = await response.json();
        if (data.status === "success") {
            images = data.message;
            //adding img tag with lazy loading of images
            carousel.innerHTML = images.map(src => `<img src="${src}" loading="lazy">`).join('');
      
        }
    } catch (error) { console.error('Error loading images:', error); }
}



function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    
}


// for next images 
function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
}


//for prev images
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}


//for prev and next button click
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


//for prev and next button keyboard
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});




//for mobile touch 
let startX, startY, endX, endY;
carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

carousel.addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
});

carousel.addEventListener('touchend', () => {
    let deltaX = startX - endX;
    let deltaY = Math.abs(startY - endY);
    if (deltaY < 50) { 
        if (deltaX > 50) nextSlide();
        if (deltaX < -50) prevSlide();
    }
});

loadImages();
