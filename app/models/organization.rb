class Organization < ApplicationRecord
  #has_many :users, :projects
  has_many :teams
  validates :name, presence: true
end
