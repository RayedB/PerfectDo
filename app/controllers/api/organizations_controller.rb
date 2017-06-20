module Api
  class OrganizationsController < ApplicationController
    # GET /organizations
    def index
      @orgs = Organization.all
      render json:@orgs
    end

  end
end
