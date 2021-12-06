import 'lightbox2/dist/css/lightbox.min.css';
import './sass/main.scss';

import $ from 'jquery';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery';

//------------------------------------------------------------------------------
//   Параметры для lightBox (galley)
//------------------------------------------------------------------------------
lightbox.option({
  resizeDuration: 200,
  disableScrolling: true,
  positionFromTop: 100,
  wrapAround: false,
  maxHeight: 800,
  maxWidth: 600,
  fitImagesInViewport: true,
});

//------------------------------------------------------------------------------
//   Скрол
//------------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
//------------------------------------------------------------------------------
//   Модалка
//------------------------------------------------------------------------------
(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    input: document.getElementById('inputEmail'),
    form: document.querySelector('.contact__form'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.form.addEventListener('submit', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    e.type === 'submit' ? refs.form.reset() : window.scrollTo(0, 0);
  }
})();
