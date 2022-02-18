function validation() {
  var fname = document.getElementById("fname");
  atpos = document.getElementById("fname").value.length;
  var lname = document.getElementById("lname");
  atposs = document.getElementById("lname").value.length;
  var Adresse = document.getElementById("Adresse");
  atpoos = document.getElementById("Adresse").value.length;
  var atppos = document.getElementById("email").value.length;
  var date = document.getElementById("Date").value.length;

  document.getElementById("Error").innerHTML = "";

  if (atpos < 5) {
    document.getElementById("Error").innerHTML =
      "La saisie du nom est obligatoire";
    return false;
  }

  if (atposs < 5) {
    document.getElementById("Error").innerHTML =
      "La saisie du prénom est obligatoire";
    return false;
  }
  if (date < 5) {
    document.getElementById("Error").innerHTML = "La date est obligatoire";
    return false;
  }

  const dateNaissance = new Date(document.getElementById("Date").value);
  if (dateNaissance.getTime() > Date.now()) {
    document.getElementById("Error").innerHTML =
      "La date de naissance ne peut pas etre dans le futur 🤷‍♀️";
    return false;
  }

  if (atpoos < 5) {
    document.getElementById("Adresse");
    document.getElementById("Error").innerHTML =
      "La saisie d'Adresse est obligatoire";
    return false;
  }

  if (atppos < 5) {
    document.getElementById("email");
    document.getElementById("Error").innerHTML =
      "La saisie d'Email est obligatoire";
    return false;
  }

  if (document.getElementById("Error").innerHTML == "") {
    document.getElementById("resultat").innerHTML =
      "Bienvenue " + document.getElementById("fname").value;
    return true;
  }
}
