class Tword < ApplicationRecord
  validates :words, :screen_name, presence: true
  serialize :words, Array

  scope :by_screen_name, ->(screen_name) { where screen_name: screen_name }
  scope :recent, -> { order created_at: :desc }
end
