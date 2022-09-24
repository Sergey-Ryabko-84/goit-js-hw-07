import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
).join('');

galleryList.insertAdjacentHTML('beforeend', markup);

const onImage = evt => {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) return;
    const selectedImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${selectedImg}">`)
    instance.show()

    const onClose = evt => {
        if (evt.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onClose)
        }
    }    
    document.addEventListener('keydown', onClose)
}

galleryList.addEventListener('click', onImage);