'use strict'

const imgTargets = document.querySelectorAll('img[data-src]');
const closeNoti = document.querySelector('.fa-close');
const notification = document.querySelector('.notification');

//Notification close functionality
closeNoti.addEventListener('click',function(){
  notification.remove();
})

//lazy loading images delayed to see the response
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
});

imgTargets.forEach(img => imgObserver.observe(img));