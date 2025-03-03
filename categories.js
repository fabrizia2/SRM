// Select images and lightbox elements
const images = document.querySelectorAll(".category-image");
const lightbox = document.createElement("div");
const lightboxImg = document.createElement("img");
const closeButton = document.createElement("button");

// Setup lightbox
lightbox.id = "lightbox";
closeButton.id = "close-lightbox";
closeButton.innerHTML = "&times;"; // Close button (×)

// Add elements to the document
lightbox.appendChild(closeButton);
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Click image to open lightbox
images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

// Click close button to hide lightbox
closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Click outside image to close lightbox
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
