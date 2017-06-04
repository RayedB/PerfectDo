class Item < ApplicationRecord

  belongs_to :list

  validates :title, presence: true
  validates :urgency, :importance, presence: true, numericality: { greater_than: 0 }
  validates :urgency, :importance, presence: true, numericality: { less_than_or_equal_to: 10 }

end
