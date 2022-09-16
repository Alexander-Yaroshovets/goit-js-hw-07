import { galleryItems } from "./gallery-items.js";

const galery = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
});

const markup = galery.join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", markup);

const handleClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const handleKey = (event) => {
    if (event.code !== "Escape") {
      return;
    }

    instance.close();
  };
  const srcBasicEl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${srcBasicEl}">

`,
    {
      /*
       * Prevents the lightbox from closing when clicking its background.
       */
      closable: true,
      /*
       * One or more space separated classes to be added to the basicLightbox element.
       */
      className: "",
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        document.addEventListener("keydown", handleKey);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        document.removeEventListener("keydown", handleKey);
      },
    }
  );

  instance.show();
};
const clickgalleryEl = galleryEl.addEventListener("click", handleClick);
