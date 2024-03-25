function openNavbar() {
  document.getElementById("hamburgerMenu").style.width = "25%";
  document.getElementById("blurEffect").classList.add("blur"); // Add blur class
  document.getElementById("blurEffect2").classList.add("blur"); // Add blur class
  document.getElementById("blurEffect3").classList.add("blur"); // Add blur class
}

function closeNavbar() {
  document.getElementById("hamburgerMenu").style.width = "0";
  document.getElementById("blurEffect").classList.remove("blur"); // Remove blur class
  document.getElementById("blurEffect2").classList.remove("blur"); // Remove blur class
  document.getElementById("blurEffect3").classList.remove("blur"); // Remove blur class
}
