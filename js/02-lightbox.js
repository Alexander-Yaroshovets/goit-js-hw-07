import { galleryItems } from "./gallery-items.js";

const galery = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href= ${original}>
      <img
        class="gallery__image"
        src= ${preview}
        alt=${description}
      />
    </a>
  `;
});

const markup = galery.join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "alt",
  captionPosition: "bottom",
  captionsData: "alt",
  captiondelay: 250,
});
