<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".cta form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche le rechargement de la page

      const prenom = form.elements["prenom"].value.trim();
      const email = form.elements["email"].value.trim();

      // Validation simple
      if (!prenom || !email) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Veuillez saisir une adresse e-mail valide.");
        return;
      }

      // Simulation d'envoi
      alert(`Merci ${prenom} ! Vous êtes inscrit avec l'adresse : ${email}`);

      // Préparation des données pour une API (exemple)
      /*
      fetch('https://votre-api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prenom, email })
      })
      .then(response => response.json())
      .then(data => console.log('Succès :', data))
      .catch(error => console.error('Erreur :', error));
      */

      form.reset(); // Réinitialise le formulaire
    });

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
</script>
