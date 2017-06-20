module Api
  class ListsController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]

    # GET /todos
    def index
      @lists = current_user.lists
      json_response(@lists)
    end

    # POST /todos
    def create
      @list = current_user.todos.create!(todo_params)
      json_response(@list, :created)
    end

    # GET /todos/:id
    def show
      json_response(@list)
    end

    # PUT /todos/:id
    def update
      @list.update(todo_params)
      head :no_content
    end

    # DELETE /todos/:id
    def destroy
      @list.destroy
      head :no_content
    end

    private

    def todo_params
      # whitelist params
      params.permit(:name)
    end

    def set_todo
      @list = Todo.find(params[:id])
    end
  end
end
