class List < ApplicationRecord
  has_many :items
  belongs_to :team

  validates :name, presence: true

end
