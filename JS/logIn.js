function displaySignIn() {
  document.querySelector(".signInAccount").style.display = "block";
  document.querySelector(".registerAccount").style.display = "none";

  // Add active class to Sign In button
  document.getElementById("signInButton").classList.add("active");
  // Remove active class from Register button
  document.getElementById("registerButton").classList.remove("active");
}

function displayRegister() {
  document.querySelector(".signInAccount").style.display = "none";
  document.querySelector(".registerAccount").style.display = "block";

  // Add active class to Register button
  document.getElementById("registerButton").classList.add("active");
  // Remove active class from Sign In button
  document.getElementById("signInButton").classList.remove("active");
}

// -------------------------- Year --------------------------
const yearSelect = document.getElementById("yearSelect");
const currentYear = new Date().getFullYear(); // Get the current year

// Populating years from 2006 to 1900
for (let year = 2006; year >= 1900; year--) {
  const option = document.createElement("option");
  option.text = year;
  option.value = year;
  yearSelect.add(option);
}

// -------------------------- Month --------------------------
const monthSelect = document.getElementById("monthSelect");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Populating months
months.forEach((month, index) => {
  const option = document.createElement("option");
  option.text = month;
  option.value = index + 1; // Adding 1 to index to match month numbers
  monthSelect.add(option);
});

// -------------------------- Day --------------------------
const daySelect = document.getElementById("daySelect");

// Populating days from 1 to 31
for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.text = day;
  option.value = day;
  daySelect.add(option);
}
