class Tword < ApplicationRecord
  validates :words, :screen_name, presence: true
  serialize :words, Array

  # Returns twords filtered by screen_name attribute
  scope :by_screen_name, ->(screen_name) { where screen_name: screen_name }

  # Returns twords in descending order of the date created
  scope :recent, -> { order created_at: :desc }

  # Returns twords that were created within the date range
  def self.in_date_range(date_range)
    return all unless date_range
    where created_at: date_range
  end

  # Returns the #created_at attribute of the oldest Tword
  def self.oldest_created_at
    order(created_at: :desc).select(:created_at).last&.created_at
  end

  def sometimes_shuffle_words
    [true, false].sample ? words.shuffle : words
  end
end
