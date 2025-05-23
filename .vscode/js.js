<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".cta form");
    const loader = document.getElementById("loader");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("popup-close");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const prenom = form.elements["prenom"].value.trim();
      const email = form.elements["email"].value.trim();

      if (!prenom || !email || !validateEmail(email)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
      }

      loader.style.display = "inline-block";

      setTimeout(() => {
        loader.style.display = "none";
        form.reset();
        showPopup();
      }, 1200);
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
</script>
