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
