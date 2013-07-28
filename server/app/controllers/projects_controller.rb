class ProjectsController < ApplicationController

  def create
    @org = Org.find(params[:org_id])
    @project = @org.projects.create(params[:project])
    redirect_to org_path(@org)
  end

end
