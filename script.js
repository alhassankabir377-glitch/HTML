
// Select the Explore More button
const exploreBtn = document.getElementById("explore");

// When button is clicked, scroll to menu section
exploreBtn.addEventListener("click", function () {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
});
// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Stop default jump

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
// Select form elements
const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.querySelectorAll("input[type='password']")[1];

form.addEventListener("submit", function (e) {
  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    e.preventDefault(); // Stop form submission
    return;
  }

  // Check if fields are empty
  if (password.value === "" || confirmPassword.value === "") {
    alert("Please fill all required fields!");
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});
// Select all menu items
const menuItems = document.querySelectorAll(".menu_grid");

menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05)";
    item.style.transition = "0.3s";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});
window.onload = function () {
  alert("Welcome to Food Delight Restaurant");
  this.alert("enjoy our delicious meals")
};
console.log("junior fontend-end development");
