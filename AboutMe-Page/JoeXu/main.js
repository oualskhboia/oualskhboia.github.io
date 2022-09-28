function hambergerMenu() {
  var x = document.getElementById("myTopNavBar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
