const filterButtons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".gallery .image");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    images.forEach(image => {
      if (category === "all" || image.getAttribute("data-category") === category) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});
