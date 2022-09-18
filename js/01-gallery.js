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
let instance;
const handleKey = (event) => {
  if (event.code !== "Escape") {
    return;
  }

  instance.close();
};
const handleClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const srcBasicEl = event.target.dataset.source;
  instance = basicLightbox.create(
    ` <img src="${srcBasicEl}"> `,

    {
      onShow: (instance) => {
        document.addEventListener("keydown", handleKey);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", handleKey);
      },
    }
  );

  instance.show();
};
const clickgalleryEl = galleryEl.addEventListener("click", handleClick);
