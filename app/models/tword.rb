class Tword < ApplicationRecord
  validates :words, :screen_name, presence: true
  serialize :words, Array

  scope :by_screen_name, ->(screen_name) { where screen_name: screen_name }
  scope :recent, -> { order created_at: :desc }

  def self.in_date_range(date_range)
    return all unless date_range
    where created_at: date_range
  end
end
