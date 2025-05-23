
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  const loader = document.getElementById("loader");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const prenom = form.elements["prenom"].value.trim();
      const email = form.elements["email"].value.trim();
      let valid = true;

      form.querySelectorAll("input").forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "1px solid red";
          valid = false;
        } else {
          input.style.border = "";
        }
      });

      if (!validateEmail(email)) {
        form.elements["email"].style.border = "1px solid red";
        valid = false;
      }

      if (!valid) return;

      loader.style.display = "inline-block";

      setTimeout(() => {
        loader.style.display = "none";
        form.reset();
        showPopup();
      }, 1200);
    });
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showPopup() {
    popup.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
