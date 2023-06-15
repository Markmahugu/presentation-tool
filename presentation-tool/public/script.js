const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('slideChanged', (slideIndex) => {
  changeSlide(slideIndex);
});

function changeSlide(slideIndex) {
  const slides = document.getElementsByClassName('presentation-slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}