// Java Script
function numRepita() {
  for (i = 1; i <= 5; i++) {
    var x = parseInt(document.getElementById("txtNum").value);
    var r = x * 3;
    
    document.getElementById("resultado").innerHTML =
      i + "° Repetição do valor " + r;
  }
}
