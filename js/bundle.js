const countdown = document.querySelector('.countdown');
const launchDate = new Date(`Jan 1, 2020 13:00:00`).getTime();


const intv1 = setInterval(() => {
  const now = new Date().getTime();

  const distance = launchDate - now;

  // time calc
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / (1000));

  // display result
  countdown.innerHTML = `
    <p>${days}<span> Days</span></p>
    <p>${hours}<span> Hours</span></p>
    <p>${mins}<span> Minute</span></p>
    <p>${seconds}<span> Second</span></p>
  `;

  if(distance < 0) {
    // stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17A2B8';
    countdown.innerHTML = 'launched!';
  }
}, 1000);
