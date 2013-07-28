class ProjectsController < ApplicationController
  respond_to :json

  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render json: @projects.to_a
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    render json: @project
  end


  # # POST /projects
  # # POST /projects.json
  # def create
  #   @org = Org.find(params[:org_id])
  #   @project = @org.projects.create(project_params)

  #   respond_to do |format|
  #     if @project.save
  #       format.json { render action: 'show', status: :created, location: @project }
  #     else
  #       format.json { render json: @project.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /projects/1
  # # PATCH/PUT /projects/1.json
  # def update
  #   respond_to do |format|
  #     if @project.update(project_params)
  #       format.json { head :no_content }
  #     else
  #       format.json { render json: @project.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /projects/1
  # # DELETE /projects/1.json
  # def destroy
  #   @project.destroy
  #   respond_to do |format|
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params[:project]
    end
end
