const countElement = document.getElementById("count");
const addButton = document.getElementById("addButton");

let count = 0;

// Function to update the UI with the current count
const updateUI = () => {
  countElement.textContent = count;
};

// Function to increment the count and update the UI
const incrementCount = () => {
  count += 1;
  updateUI();
  console.log("State is changed. New count: " + count);
};

// Event listener for the "Add" button
addButton.addEventListener("click", incrementCount);

// Lifecycle event: Component is mounted
console.log("Component is mounted");

// Initial UI update
updateUI();
