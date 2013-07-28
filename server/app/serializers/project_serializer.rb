class ProjectSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :description
  has_one :org
end