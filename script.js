const buttonPopUP = document.querySelector('.intro__button-edit');
const popUP = document.querySelector('.intro__popup-edit');
console.log(buttonPopUP)

buttonPopUP.addEventListener('click', () => {
  popUP.classList.add('active');
});