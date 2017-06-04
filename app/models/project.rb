class Project < ApplicationRecord
  has_many :items
  belongs_to :organization
end
