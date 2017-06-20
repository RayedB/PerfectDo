module Api
  class OrganizationsController < ApplicationController

    # GET /organizations
    def index
      @orgs = Organization.all
      render json:@orgs
    end

    # POST /todos
    def create
      @org = Organization.create!(org_params)

    end

    private

    def org_params
      # whitelist params
      params.permit(:name)
    end

    def set_todo
      @list = Todo.find(params[:id])
    end

  end
end
