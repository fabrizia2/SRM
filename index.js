// Get all image elements
const images = document.querySelectorAll('img[data-src]');

// Create an Intersection Observer to monitor when images become visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Replace the data-src attribute with the actual src attribute
      const img = entry.target;
      img.src = img.dataset.src;
      // Stop observing the image once it's loaded
      observer.unobserve(img);
    }
  });
});

// Start observing all image elements
images.forEach((img) => {
  observer.observe(img);
});