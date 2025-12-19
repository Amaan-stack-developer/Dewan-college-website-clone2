const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

let index = 0;

function moveSlide() {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 4000); // slide every 4 seconds
