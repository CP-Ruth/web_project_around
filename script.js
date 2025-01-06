/* Abrir el popUp */
const buttonPopUP = document.querySelector('.intro__button-edit');
const popUP = document.querySelector('.popup__background');
console.log(buttonPopUP);

/**Tomar los datos de informacion */
const nombre = document.querySelector('.intro__name');
const about = document.querySelector('.intro__about');

/**Tomar los imput de edicion y boton de guardar*/
const nameInput = document.querySelector('.popup-edit__input-name');
const aboutInput = document.querySelector('.popup-edit__input-about');
const saveButton = document.querySelector('.popup-edit__button-save')


function colorButtonSave() {
  if (nameInput.value.trim() !== '' && aboutInput.value.trim() !== '') {
    saveButton.classList.add('active')
  } else {
    saveButton.classList.remove('active');
  }
}

// Escuchar el evento 'input' en ambos campos
nameInput.addEventListener('input', colorButtonSave);
aboutInput.addEventListener('input', colorButtonSave);

buttonPopUP.addEventListener('click', () => {
  popUP.classList.add('active');

  /**Datos que muestra el PopUp*/
  nameInput.textContent = nombre;
  aboutInput.textContent = about;

});

/*Cerrar el PopUp */
const buttonClosePopUP = document.querySelector('.popup__button-close');
buttonClosePopUP.addEventListener('click', () => {
  popUP.classList.remove('active');
});

/*Guardar la edicion del pop up */
saveButton.addEventListener('click', () => {
  const newName = nameInput.value;
  const newAbout = aboutInput.value;

  // Validar que los campos no estén vacíos
  if (newName.trim() === '' || newAbout.trim() === '') {
    alert('Por favor, completa ambos campos antes de guardar.');
    return;
  };

  // Actualizar los elementos de la sección "intro__data"
  nombre.textContent = newName;
  about.textContent = newAbout;

  /**Cerrar el pop Up */
  popUP.classList.remove('active');
})

colorButtonSave();
