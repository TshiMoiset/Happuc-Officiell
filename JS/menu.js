function openNavbar() {
  document.getElementById("hamburgerMenu").style.width = "25%";
  document.getElementById("blurEffect").classList.add("blur"); // Add blur class
}

function closeNavbar() {
  document.getElementById("hamburgerMenu").style.width = "0";
  document.getElementById("blurEffect").classList.remove("blur"); // Remove blur class
}
