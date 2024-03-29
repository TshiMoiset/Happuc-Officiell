function openShoppingCart() {
  let screenWidth = window.innerWidth;

  if (screenWidth < 426) {
    document.getElementById("shoppingCart").style.width = "100%";
  } else if (screenWidth < 769) {
    document.getElementById("shoppingCart").style.width = "35%";
  } else if (screenWidth < 1025) {
    document.getElementById("shoppingCart").style.width = "35%";
  } else {
    document.getElementById("shoppingCart").style.width = "20%"; // Default width for larger screens
  }
  document.getElementById("blurEffect").classList.add("blur"); // Add blur class
}

function closeShoppingCart() {
  document.getElementById("shoppingCart").style.width = "0%";
  document.getElementById("blurEffect").classList.remove("blur"); // Remove blur class
}
