// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



const boxGalleryItems = document.querySelector('.gallery')

const listItemsMarkup = createListItemMarkup(galleryItems)


boxGalleryItems.innerHTML = listItemsMarkup



function createListItemMarkup (items) {
    return items.map(item => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-caption="${item.description}" />
  </a>`).join('')
}



const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",
captionDelay: 250,});t