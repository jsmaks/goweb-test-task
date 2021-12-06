import './sass/main.scss';
import $ from 'jquery';
import lightbox from 'lightbox2/dist/js/lightbox';

const header = document.getElementById('header');
const emailRef = document.getElementById('email');
const requiredRef = document.querySelector('.form_input_required');

function headerHandler() {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
function scrollHandler() {
  $('.site-nav__link').on('click', function (event) {
    event.preventDefault();
    const target = $(this);
    const element = target.attr('href');
    $('body, html').animate(
      {
        scrollTop: $(element).offset().top - header.offsetHeight,
      },
      800,
    );
  });
}
function requiredHandlerOnBlur(e) {
  const { value } = e.target;
  if (!value) {
    requiredRef.classList.remove('form_input_required--hide');
  }
}
function requiredHandlerOnFocus(e) {
  requiredRef.classList.add('form_input_required--hide');
}
emailRef.addEventListener('focus', requiredHandlerOnFocus);
emailRef.addEventListener('blur', requiredHandlerOnBlur);

scrollHandler();
window.onscroll = function () {
  headerHandler();
};
window.lightbox = lightbox;
window.lightbox.option({
  disableScrolling: true,
  positionFromTop: 200,
});
