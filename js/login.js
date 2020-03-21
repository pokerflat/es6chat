var modalLogIn = document.getElementById("modalLogIn");
var modal2 = document.getElementById("modalAuth");

var spanEnter = document.getElementsByClassName("enter")[0];
var spanRegistration = document.getElementsByClassName("registration")[0];

spanEnter.onclick = function() {
  modalAuth.style.display = "block";
};

spanRegistration.onclick = function() {
  modalAuth.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalLogIn || event.target == modalAuth) {
    modalAuth.style.display = "none";
    modalLogIn.style.display = "none";
  }
};
