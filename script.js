let video = document.querySelector('.content-top__video'),
      videoModal = document.querySelector('.video-modal'),
      but = document.querySelector('button');

  if (video) {
    but.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.toggle('dnone');
    });
  };