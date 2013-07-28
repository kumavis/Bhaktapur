class OrgSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :description
  has_many :projects
end