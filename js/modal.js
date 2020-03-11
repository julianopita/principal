const toggleModal = () => {
  document.querySelector('.box_image')
    .classList.toggle('box_image--hidden');
  document.querySelector('.overlay')
    .classList.toggle('overlay--hidden');
}
document.querySelector('#show-box_image')
  .addEventListener('click', toggleModal);

document.querySelector('.overlay')
  .addEventListener('click', toggleModal);

document.querySelector('#learn-more-form')
  .addEventListener('submit', (e) => {
  e.preventDefault();
  toggleModal();
});

document.querySelector('.box_image__close-bar span')
  .addEventListener('click', toggleModal);
document.querySelector('.overlay')
  .addEventListener('click', toggleModal);