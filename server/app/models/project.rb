class Project < ActiveRecord::Base
  belongs_to :org
  validates :title
end
