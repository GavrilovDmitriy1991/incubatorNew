// VARIABLES

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
  modalContent.classList.remove("slide-up"); // Remove the "slide-up" class before opening the modal
}

// CLOSE MODAL
function closeModal() {
  modalContent.classList.add("slide-up"); // Add the "slide-up" class to trigger the animation
  setTimeout(() => {
    modal.style.display = "none"; // Hide the modal after the animation completes
  }, 500); // Adjust the timing if needed
}
