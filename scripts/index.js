/* Array de Nombres y fotos */
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

/* ELEMENTOS DEL DOM  */

/* Pop Up */
const buttonPopUPEdit = document.querySelector('.intro__button-edit');
const buttonPopUPAdd = document.querySelector(".intro__button-add");
const popUP = document.querySelector('.popup');
const buttonClosePopUP = document.querySelector('.popup__button-close');
/**Tomar los imput de edicion y boton guardar*/
const nameInput = document.querySelector('.popup__input-name');
const aboutInput = document.querySelector('.popup__input-about');
const saveButton = document.querySelector('.popup__edit-button');
/**Lugar los datos de informacion */
const nombre = document.querySelector('.intro__name');
const about = document.querySelector('.intro__about');
/**Lugar de las cartas */
const cardTemplate = document.querySelector("#cards-template").content;
const placeContainer = document.querySelector(".place");
const deletebutton = document.querySelector(".place__delete");
const corazonLleno = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
const corazonVacio = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>`
const imageTemplate = document.querySelector("#image-template").content;
const cardImage = document.querySelector(".place__image");
/* ESCUCHAR LOS EVENTOS */
buttonPopUPEdit.addEventListener('click', () => openPopup("Editar perfil", "Nombre", "Acerca de mí", "Guardar"));
buttonPopUPAdd.addEventListener('click', () => openPopup("Nuevo lugar", "Título", "Enlace de la imagen", "Crear"));
buttonClosePopUP.addEventListener('click', closePopup);
saveButton.addEventListener('click', savePopup);
nameInput.addEventListener('input', colorButtonSave);
aboutInput.addEventListener('input', colorButtonSave);


// Función para abrir el popup
function openPopup(title, namePlaceholder, aboutPlaceholder, buttonText) {
  popUP.classList.add('active'); // Mostrar el popup
  popUP.querySelector(".popup__title").textContent = title; // Configurar el título del popup
  nameInput.placeholder = namePlaceholder; // Configurar el placeholder del campo de nombre
  aboutInput.placeholder = aboutPlaceholder; // Configurar el placeholder del campo de descripción
  popUP.querySelector(".popup__edit-button").textContent = buttonText; // Configurar el texto del botón

  if (namePlaceholder === "Nombre") {
    // Si se está editando el perfil, rellenar los campos con los datos actuales
    nameInput.value = nombre.textContent;
    aboutInput.value = about.textContent;
  } else {
    // Si se está añadiendo un nuevo lugar, vaciar los campos
    nameInput.value = "";
    aboutInput.value = "";
  }
}

// Función para cerrar el popup
function closePopup() {
  popUP.classList.remove('active'); // Ocultar el popup
}

// Función para guardar los cambios del popup
function savePopup() {
  const newName = nameInput.value.trim();
  const newAbout = aboutInput.value.trim();

  // Validar que ambos campos estén llenos
  if (!newName || !newAbout) {
    alert("Por favor, completa ambos campos antes de guardar o crear."); // Mostrar mensaje
    return;
  }

  if (nameInput.placeholder === "Nombre") {
    // Si se está editando el perfil, actualizar los datos del perfil
    nombre.textContent = newName;
    about.textContent = newAbout;
  } else {
    // Si se está añadiendo un nuevo lugar, agregarlo al array y mostrar la tarjeta
    const newPlace = { name: newName, link: newAbout };
    initialCards.unshift(newPlace);
    //addCards(newName, newAbout); -> Muestra el lugar agregado al final
    //Tuve que borrar todas las tarjetas y hacer que se vuelvan a cargar cadavez que se agreguen más
    deleteAllCards()
    initialCards.forEach((element) => {
      addCards(element.name, element.link)
    })
  }
  // Cerrar el popup
  closePopup();
}

// Función para cambiar el estado del botón de guardar según los campos
function colorButtonSave() {
  if (nameInput.value.trim() && aboutInput.value.trim()) {
    saveButton.classList.add('active');
  } else {
    saveButton.classList.remove('active');
  }
}

// Función para agregar tarjetas al contenedor
function addCards(titulo, imagen) {
  const cardElement = cardTemplate.querySelector(".place__card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".place__delete");
  const likeButton = cardElement.querySelector(".place__like");

  cardElement.querySelector(".place__name").textContent = titulo;
  cardElement.querySelector(".place__image").alt = titulo;
  cardElement.querySelector(".place__image").src = imagen;

  // Agregar evento para cambiar el estado del "like"
  likeButton.dataset.liked = "false";
  likeButton.innerHTML = corazonVacio;

  likeButton.addEventListener("click", () => toggleLike(likeButton));
  // Agrego la funcion borrar latarjeta
  deleteButton.addEventListener("click", deleteCard);
  // Agrego la función ver la imagen
  cardElement.querySelector(".place__image").addEventListener('click', showImage);

  placeContainer.append(cardElement);
}

// Mostrar todas las tarjetas (cards) iniciales */
initialCards.forEach((element) => {
  addCards(element.name, element.link)
})

// Función para eliminar la tarjeta que seleccionamos y el elem. del array!
function deleteCard(event) {
  const button = event.target.closest('.place__delete');
  if (button) {
    const card = button.closest('.place__card'); // Encuentra la tarjeta contenedora
    if (card) {
      card.remove(); // Elimina la tarjeta del DOM
      initialCards.shift();
    }
  }
}

//Función para borrar todas las tarjeras
function deleteAllCards() {
  const placeSection = document.querySelector('.place'); // Selecciona la sección contenedora
  while (placeSection.firstChild) {
    placeSection.removeChild(placeSection.firstChild); // Elimina el primer hijo hasta que no quede ninguno
  }
}

// Función para cambiar el estado del botón "like"
function toggleLike(button) {
  if (button.dataset.liked === "false") {
    button.innerHTML = corazonLleno;
    button.dataset.liked = "true";
  } else {
    button.innerHTML = corazonVacio;
    button.dataset.liked = "false";
  }
}

// Funcion para mostrar la imagen
function showImage(event){
  const clickImage = event.target.closest('.place__image');

  const popUpClon = popUP.cloneNode(false);
  const popupImagen = imageTemplate.querySelector(".popup__image").cloneNode(true);
  const closeImage = popupImagen.querySelector(".popup__button");

  popUpClon.appendChild(popupImagen);
  popUpClon.classList.add('active');

  popupImagen.querySelector(".popup__image").src= clickImage.src;
  popupImagen.querySelector(".popup__image").alt= clickImage.alt;
  popupImagen.querySelector(".popup__text").textContent=clickImage.alt;
  closeImage.classList.add("popup__button-close");
  placeContainer.append(popUpClon);

  closeImage.addEventListener('click', ()=>{placeContainer.removeChild(popUpClon)});

}

