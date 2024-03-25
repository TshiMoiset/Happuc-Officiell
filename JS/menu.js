function openNavbar() {
  if (window.innerWidth < 769) {
    document.getElementById("hamburgerMenu").style.width = "100%";
  } else {
    document.getElementById("hamburgerMenu").style.width = "25%";
  }
  document.getElementById("blurEffect").classList.add("blur"); // Add blur class
}

function closeNavbar() {
  document.getElementById("hamburgerMenu").style.width = "0";
  document.getElementById("blurEffect").classList.remove("blur"); // Remove blur class
}
