class Project < ActiveRecord::Base
  belongs_to :org
  validates :title, presence: true
end
