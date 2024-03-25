function openNavbar() {
  document.getElementById("hamburgerMenu").style.width = "25%";
  document.getElementById("main-content").classList.add("blur"); // Add blur class
}

function closeNavbar() {
  document.getElementById("hamburgerMenu").style.width = "0";
  document.getElementById("main-content").classList.remove("blur"); // Remove blur class
}
