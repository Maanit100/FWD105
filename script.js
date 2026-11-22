// Simple behaviour shared by the website pages.

// Keep the copyright year up to date.
document.querySelectorAll(".current-year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

// Open the profile popup whose ID is stored in the button's data-open-modal attribute.
document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.openModal);

    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  });
});

// Close a popup using its close button or by clicking the dark background.
document.querySelectorAll(".profile-overlay").forEach((modal) => {
  const closeButton = modal.querySelector(".close-profile");

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

// Escape closes any open profile popup.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".profile-overlay.is-open").forEach((modal) => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    });

    document.body.style.overflow = "";
  }
});
