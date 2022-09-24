import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
).join('');

galleryList.insertAdjacentHTML('beforeend', markup);

let galleryClick = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});