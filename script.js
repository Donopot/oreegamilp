document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  const loader = document.getElementById("loader");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");

  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (handleFormValidation(form)) {
        displayLoader(true);
        setTimeout(() => {
          displayLoader(false);
          form.reset();
          showPopup();
        }, 1200);
      }
    });

    form.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", () => {
        input.style.border = "";
      });
    });
  });

  closeBtn?.addEventListener("click", () => {
    hidePopup();
  });

  function handleFormValidation(form) {
    const prenom = form.elements["prenom"]?.value.trim();
    const email = form.elements["email"]?.value.trim();
    let valid = true;

    form.querySelectorAll("input").forEach(input => {
      if (!input.value.trim()) {
        input.style.border = "2px solid #e74c3c";
        input.focus();
        valid = false;
      }
    });

    if (email && !validateEmail(email)) {
      form.elements["email"].style.border = "2px solid #e74c3c";
      valid = false;
    }

    return valid;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function displayLoader(show) {
    if (loader) loader.style.display = show ? "inline-block" : "none";
  }

  function showPopup() {
    if (popup) {
      popup.style.display = "flex";
      popup.style.opacity = "0";
      popup.style.transition = "opacity 0.3s ease";
      setTimeout(() => popup.style.opacity = "1", 10);

      // auto close after 4s
      setTimeout(hidePopup, 4000);
    }
  }

  function hidePopup() {
    if (popup) {
      popup.style.opacity = "0";
      setTimeout(() => popup.style.display = "none", 300);
    }
  }
});
