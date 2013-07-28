class Org < ActiveRecord::Base
  has_many :projects
  validates :title, presence: true
end
