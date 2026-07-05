// =====================
// HAMBURGER MENU
// =====================

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && closeBtn && navbar) {
  
  menuBtn.addEventListener("click", function() {
    navbar.classList.add("active");
  });
  
  closeBtn.addEventListener("click", function() {
    navbar.classList.remove("active");
  });
  
}

// =====================
// ACADEMIC PLANNER
// =====================

function addTask() {
  
  let taskInput =
    document.getElementById("taskInput");
  
  if (!taskInput) return;
  
  let task =
    taskInput.value.trim();
  
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  
  let li =
    document.createElement("li");
  
  li.innerHTML =
    task +
    ' <button onclick="completeTask(this)">Done</button>' +
    ' <button onclick="deleteTask(this)">Delete</button>';
  
  document
    .getElementById("taskList")
    .appendChild(li);
  
  taskInput.value = "";
}

function completeTask(button) {
  button.parentElement.style.textDecoration =
    "line-through";
}

function deleteTask(button) {
  button.parentElement.remove();
}

// =====================
// CONTACT FORM
// =====================

const form =
  document.getElementById("contactForm");

if (form) {
  
  form.addEventListener(
    "submit",
    function(e) {
      
      e.preventDefault();
      
      let name =
        document.getElementById("name").value.trim();
      
      let email =
        document.getElementById("email").value.trim();
      
      let phone =
        document.getElementById("phone").value.trim();
      
      let message =
        document.getElementById("message").value.trim();
      
      let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
      ) {
        alert("All fields are required.");
        return;
      }
      
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
      }
      
      if (!/^\d+$/.test(phone)) {
        alert(
          "Phone number must contain only digits."
        );
        return;
      }
      
      alert("Message submitted successfully!");
      form.reset();
    }
  );
}