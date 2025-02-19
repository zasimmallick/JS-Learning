// main.js

// Retrieve applications from localStorage or initialize an empty array
let applications = JSON.parse(localStorage.getItem("applications")) || [];

// Function to render the list of applications
function renderApplications() {
  const appList = document.getElementById("appList");
  appList.innerHTML = "";

  if (applications.length === 0) {
    appList.innerHTML = "<li class='text-gray-500'>No applications yet. Add one!</li>";
    return;
  }

  applications.forEach((app, index) => {
    const li = document.createElement("li");
    li.className = "application-item p-4 bg-gray-50 rounded shadow";
    
    // Format date to a readable string
    const dateStr = new Date(app.dateApplied).toLocaleDateString();
    
    li.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold">${app.position} at ${app.company}</h3>
          <p class="text-sm text-gray-600">Applied on: ${dateStr}</p>
        </div>
        <span class="px-3 py-1 rounded text-sm bg-green-200 text-green-800">${app.status}</span>
      </div>
      <p class="mt-2">${app.notes || ""}</p>
      <button class="deleteBtn mt-2 px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500" data-index="${index}">Delete</button>
    `;
    appList.appendChild(li);
    li.style.opacity = 0;
    setTimeout(() => li.style.opacity = 1, 50);
  });
}

// Function to save applications to localStorage
function saveApplications() {
  localStorage.setItem("applications", JSON.stringify(applications));
}

// Handle form submission to add a new application
document.getElementById("appForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const company = document.getElementById("company").value;
  const position = document.getElementById("position").value;
  const dateApplied = document.getElementById("dateApplied").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;
  
  const newApp = { company, position, dateApplied, status, notes };
  
  applications.push(newApp);
  saveApplications();
  renderApplications();
  
  // Reset the form fields
  this.reset();
});

// Delegate deletion for dynamically created delete buttons
document.getElementById("appList").addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("deleteBtn")) {
    const index = e.target.getAttribute("data-index");
    applications.splice(index, 1);
    saveApplications();
    renderApplications();
    e.target.parentElement.style.transform = 'translateX(-100%)';
    setTimeout(() => e.target.parentElement.remove(), 300);
  }
});

// Handle clearing all applications
document.getElementById("clearBtn").addEventListener("click", function() {
  if (confirm("Are you sure you want to clear all applications?")) {
    applications = [];
    saveApplications();
    renderApplications();
  }
});

// Initial render on page load
renderApplications();
