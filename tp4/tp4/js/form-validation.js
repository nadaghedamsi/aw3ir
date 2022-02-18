window.onload = function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation()) {

      //document.querySelector(".modal-title").textContent = //

        // "Bienvenue " + document.querySelector("#fname").value + "!";

        contactStore.add(document.querySelector("#fname").value, 
        document.querySelector("#lname").value, 
        document.querySelector("#date").value,
        document.querySelector("#Adresse").value,
        document.querySelector("#email").value);
        document.querySelector("tbody").innerHTML = "";
        var listecontact = contactStore.getList();
        for (var index in listecontact) {
            document.querySelector("tbody").innerHTML =
                document.querySelector("tbody").innerHTML +
                                "<tr><td>" +
                                listecontact[index].fname +
                                "</td><td>" +
                                listecontact[index].lname +
                                "</td><td>" +
                                listecontact[index].date +
                                "</td><td> <a href= 'https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector(" + listecontact[index].adress + ").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' target='_blank'>" +
                                listecontact[index].Adresse +
                                " </a> </td><td> <a href='mailto:'>"+
                                listecontact[index].email +
                                "</a></td></tr>" ;
        
                              }

      document.querySelector(
        "#map"
      ).src = `https://maps.googleapis.com/maps/api/staticmap?markers=${
        document.querySelector("#Adresse").value
      }&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
      document.querySelector("#lien").href = `http://maps.google.com/maps?q=${
        document.querySelector("#Adresse").value
      }`;
      var myModal1 = new bootstrap.Modal(document.getElementById("myModal1"));
      ///myModal1.show();
    }
  });
};

function calcNbChar1(id = "fname") {
  document.querySelector(`#${(id = "fname")} + span`).textContent =
    document.querySelector(`#${(id = "fname")}`).value.length;
}
function calcNbChar2(id = "lname") {
  document.querySelector(`#${(id = "lname")} + span`).textContent =
    document.querySelector(`#${(id = "lname")}`).value.length;
}

function validation() {
  var fname = document.getElementById("fname");
  atpos = document.getElementById("fname").value.length;
  var lname = document.getElementById("lname");
  atposs = document.getElementById("lname").value.length;
  var Adresse = document.getElementById("Adresse");
  atpoos = document.getElementById("Adresse").value.length;
  var atppos = document.getElementById("email").value.length;
  var date = document.getElementById("date").value.length;
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  let dateNow = Date.now();
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  var myModal1 = new bootstrap.Modal(document.getElementById("myModal1"));

  document.getElementById("error").style.display = "none";
  document.getElementById("resultat").style.display = "none";

  //nom

  if (atpos < 5) {
    myModal.show();
    document.getElementById("error").innerHTML =
      "La saisie du nom est obligatoire";
    return false;
  }
  //prenom

  if (atposs < 5) {
    myModal.show();
    document.getElementById("error").innerHTML =
      "La saisie du prénom est obligatoire";
    return false;
  }
  //date de  naissance
  if (date == "") {
    myModal.show();
    document.getElementById("error").innerHTML =
      "La saisie de la date de naissance est obligatoire";
    document.getElementById("error").style.display = "block";
    alert("Mettez votre date de naissance.");
    return false;
  }

  const dateNaissance = new Date(document.getElementById("date").value);
  if (dateNaissance.getTime() > Date.now()) {
    myModal.show();
    document.getElementById("error").innerHTML =
      "La date de naissance ne peut pas etre dans le futur 🤷‍♀️";
    document.getElementById("error").style.display = "block";
    alert(
      "Mettez votre date de naissance : La date de naissance ne peut pas etre dans le futur 🤷‍♀️"
    );
    return false;
  }

  //adresse
  if (atpoos < 5) {
    myModal.show();
    document.getElementById("Adresse");
    document.getElementById("error").innerHTML =
      "La saisie d'Adresse est obligatoire";
    return false;
  }

  //adresse mail
  if (atppos < 5) {
    myModal.show();
    document.getElementById("email");
    document.getElementById("error").innerHTML =
      "La saisie d'Email est obligatoire";
    return false;
  }

  if (document.getElementById("error").innerHTML == "") {
    document.getElementById("resultat").style.display = "block";
    alert("BIENVENU " + document.getElementById("fname").value);
    return true;
  }
  myModal1.show();
  return true;
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

 
