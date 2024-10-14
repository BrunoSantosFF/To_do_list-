class TodosController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      respond_to do |format|
        format.html { redirect_to todo_path, notice: 'Todo criado com sucesso.' }
        format.json { render json: @todo, status: :created}
      end
    else
      @todos = Todo.all
      render :index 
    end
  end

  def update
    if @todo.update(completed: todo_params[:completed])
      redirect_to todo_path, notice "Todo foi alterado com sucesso"
    else 
      @todos = Todo.all
      render :index
    end
  end

  def destroy
    @todo.destroy
    respond_to do |format|
      format.html {redirect_to todo_path, notice: "Todo destruido com sucesso"}
      format.json {head :no_content}
    end
  end

  private

  def set_task
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
  
end
