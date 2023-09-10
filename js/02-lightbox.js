import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

const gallery = document.querySelector("ul.gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) => `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const galleryImages = document.querySelectorAll(".gallery__image");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.open();
  });
});

// document.addEventListener("keydown", (event) => {
//   if (lightbox.isShowing()) {
//     if (event.key === "ArrowLeft") {
//       lightbox.prev();
//     } else if (event.key === "ArrowRight") {
//       lightbox.next();
//     } else if (event.key === "Escape") {
//       lightbox.close();
//     }
//   }
// });

document.addEventListener("keydown", (event) => {
  if (lightbox.isShowing()) {
    switch (event.key) {
      case "ArrowLeft":
        lightbox.prev();
        break;
      case "ArrowRight":
        lightbox.next();
        break;
      case "Escape":
        lightbox.close();
        break;
    }
  }
});
