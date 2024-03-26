function openNavbar() {
  let screenWidth = window.innerWidth;

  if (screenWidth < 426) {
    document.getElementById("hamburgerMenu").style.width = "100%";
  } else if (screenWidth < 769) {
    document.getElementById("hamburgerMenu").style.width = "40%";
  } else if (screenWidth < 1025) {
    document.getElementById("hamburgerMenu").style.width = "35%";
  } else {
    document.getElementById("hamburgerMenu").style.width = "25%"; // Default width for larger screens
  }
  document.getElementById("blurEffect").classList.add("blur"); // Add blur class
}

function closeNavbar() {
  document.getElementById("hamburgerMenu").style.width = "0%";
  document.getElementById("blurEffect").classList.remove("blur"); // Remove blur class
}
