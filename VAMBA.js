
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Parole() {
  var x = document.getElementById("parola").value;
  var y = document.getElementById("confirmareparola").value;
  if(x!=y)
	document.getElementById("parolagresita").innerHTML = "Parolele nu corespund."
}