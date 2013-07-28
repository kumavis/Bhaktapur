class OrgsController < ApplicationController
  respond_to :json

  before_action :set_org, only: [:show, :update, :destroy]

  # GET /orgs
  # GET /orgs.json
  def index
    @orgs = Org.all
    render json: @orgs.to_a
  end

  # GET /orgs/1
  # GET /orgs/1.json
  def show
    render json: @org
  end

  # # POST /orgs
  # # POST /orgs.json
  # def create
  #   @org = Org.new(org_params)

  #   respond_to do |format|
  #     if @org.save
  #       format.json { render action: 'show', status: :created, location: @org }
  #     else
  #       format.json { render json: @org.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /orgs/1
  # # PATCH/PUT /orgs/1.json
  # def update
  #   respond_to do |format|
  #     if @org.update(org_params)
  #       format.json { head :no_content }
  #     else
  #       format.json { render json: @org.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /orgs/1
  # # DELETE /orgs/1.json
  # def destroy
  #   @org.destroy
  #   respond_to do |format|
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_org
      @org = Org.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def org_params
      params[:org]
    end
end
