document.addEventListener("DOMContentLoaded", function () {
  // Open the navbar
  function openNavbar() {
    document.getElementById("hamburgerMenu").style.width = "25%";
  }

  // Close the navbar
  function closeNavbar() {
    document.getElementById("hamburgerMenu").style.width = "0";
  }

  // Function to handle clicks outside of the navbar
  function closeOnOutsideClick(event) {
    const navbar = document.getElementById("hamburgerMenu");
    const openButton = document.getElementById("openNavbar");
    if (
      event.target !== navbar &&
      event.target !== openButton &&
      !navbar.contains(event.target)
    ) {
      closeNavbar();
      document.removeEventListener("click", closeOnOutsideClick);
    }
  }

  // Add event listeners to open and close the navbar
  document
    .getElementById("openNavbar")
    .addEventListener("click", function (event) {
      openNavbar();
      // Add event listener to close the navbar when clicking outside of it
      document.addEventListener("click", closeOnOutsideClick);
    });

  document.getElementById("closeNavbar").addEventListener("click", closeNavbar);
});
