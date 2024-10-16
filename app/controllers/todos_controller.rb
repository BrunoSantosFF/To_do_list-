class TodosController < ApplicationController
  before_action :set_task, only: [:update, :destroy, :edit]

  #Função responsável por carregar todos os dados do bando de dados
  def index
    @todos = Todo.all
    @todo = Todo.new # Instancia para o formulário de nova tarefa
  end

  # Função para editar o item
  def edit
  end

  # Função responsável por criar uma nova tarefa (Todo), respondendo a diferentes formatos de requisição (HTML, JSON).

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      respond_to do |format|
        format.html { redirect_to todos_path, notice: 'Todo criado com sucesso.' }
        format.json { render json: @todo, status: :created}
      end
    else
      @todos = Todo.all
      render :index 
    end
  end

  # Função responsável por atualizar uma tarefa específica
  def update
    if @todo.update(todo_params)
      redirect_to edit_todo_path, notice: "Todo foi alterado com sucesso."
    else
      render :edit
    end
  end

 # Função responsável por deletar uma tarefa específica 
  def destroy
    @todo.destroy
    head :no_content
  end

  private

  def set_task
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end

end
