// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

document.querySelectorAll(".modal-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.content;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
