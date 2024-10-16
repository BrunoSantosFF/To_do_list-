
//Executar a função quando o documento HTML for completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  //Criando uma lista com todos itens da lista (Li)
  const listItems = document.querySelectorAll("ul li");

  //Fazendo interação de click para cada item da lista  
  // listItems.forEach(item => {
  //   item.addEventListener("click", toggleCompletion);
  // });

  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(button => {
    button.addEventListener("click", removeTodo);
  });
});

//Função responsável por atualizar os valores de cata item
//Está com erro
// function toggleCompletion(event) {
//   const todoId = this.getAttribute("data-id");
//   const completed = this.classList.toggle("checked");
//   updateTodo(todoId, completed);
// }


// function updateTodo(todoId, completed) {
//   fetch(`/todos/${todoId}`, {
//     method: 'PATCH',
//     headers: {
//       'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ todo: { completed: completed } })
//   }).then(response => {
//     if (!response.ok) {
//       alert("Erro ao atualizar a tarefa. Tente novamente.");
//     }
//   });
// }

//Função para Remover o item da lista
function removeTodo(event) {
  event.stopPropagation(); 
  const todoId = this.getAttribute("data-id");
  
  fetch(`/todos/${todoId}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  }).then(response => {
    if (response.ok) {
      this.parentElement.remove();
    }
  }).catch(error => {
    console.error('Erro ao remover todo:', error);
  });
  
}
