/* Abrir el popUp */
const buttonPopUP = document.querySelector('.intro__button-edit');
const popUP = document.querySelector('.popup');

/**Tomar los datos de informacion */
const nombre = document.querySelector('.intro__name');
const about = document.querySelector('.intro__about');

/**Tomar los imput de edicion y boton de guardar*/
const nameInput = document.querySelector('.popup__input-name');
const aboutInput = document.querySelector('.popup__input-about');
const saveButton = document.querySelector('.popup__edit-button');


function colorButtonSave() {
  if (nameInput.value.trim() !== '' && aboutInput.value.trim() !== '') {
    saveButton.classList.add('active')
  } else {
    saveButton.classList.remove('active');
  }
};

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



/**Pintar el Corazón */
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los botones de "like"
  const likeButtons = document.querySelectorAll('.place__like');

  const corazonLleno = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  const corazonVacio = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>`

  likeButtons.forEach(button => {
    console.log(button);
      button.dataset.liked = "false";

    button.addEventListener('click', () => {
      if (button.dataset.liked === "false") {
        button.innerHTML = corazonLleno;
        button.dataset.liked = "true";
      } else {
        button.innerHTML = corazonVacio;
        button.dataset.liked = "false";
      }
    });
  });
});

colorButtonSave();