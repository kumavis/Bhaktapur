class OrgsController < ApplicationController

  def create
    @org = Org.new(params[:org])
    @org.save
    redirect_to @org
  end

end
