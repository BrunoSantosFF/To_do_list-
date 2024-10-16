document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to list items for toggling completion
  var listItems = document.querySelectorAll("ul li");
  listItems.forEach(function(item) {
    item.addEventListener("click", function() {
      var todoId = this.getAttribute("data-id");
      console.log(todoId);
      
      var completed = this.classList.toggle("checked");

      fetch(`/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: { completed: completed } })
      }).then(function(response) {
        if (!response.ok) {
          console.error("Error updating todo");
        }
      });
    });
  });

  // Add event listener to close buttons to remove tasks
  var closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.stopPropagation(); // Impede a chamada do evento do item da lista
      var todoId = this.getAttribute("data-id");
      console.log(todoId);
      

      fetch(`/todos/${todoId}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      }).then(function(response) {
        if (response.ok) {
          // Remove the item da lista
          button.parentElement.remove();
        }
      });
    });
  });
});
