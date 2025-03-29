// Function to add a new task
function newElement() {
    const input = document.getElementById("myInput");
    const newTaskText = input.value.trim();

    if (newTaskText === "") {
        alert("You must write something!");
        return;
    }

    const ul = document.getElementById("myUL");

    // Create new list item
    const li = document.createElement("li");
    li.textContent = newTaskText;

    // Add a delete button
    const span = document.createElement("span");
    span.textContent = "❌";
    span.className = "deleteBtn";
    span.onclick = function () {
        this.parentElement.remove();
    };

    // Add an event to mark the task as completed
    li.onclick = function () {
        this.classList.toggle("checked");
    };

    li.appendChild(span);
    ul.appendChild(li);

    // Clear input field
    input.value = "";
}

// Mark tasks as completed when clicked
document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
        this.classList.toggle("checked");
    });
});

// Delete tasks when the delete button is clicked
document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent triggering the li click event
        this.parentElement.remove();
    });
});
