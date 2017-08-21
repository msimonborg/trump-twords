require_relative '../../config/environment'

namespace :fetch_twords do
  desc "Get the day's words"
  task :today do
    FetchTwordsTaskHelpers.fetch_twords_for_day(Time.now)
  end

  desc "Get all historical words"
  task :history do
    FetchTwordsTaskHelpers.fetch_twords_recursively(Time.now)
  end
end

# Helper methods
module FetchTwordsTaskHelpers
  module_function

  def fetch_twords_recursively(time)
    fetch_twords_for_day(time)
    time -= 1.day
    fetch_twords_recursively(time)
  rescue ActiveRecord::RecordInvalid => e
    puts "Last twords returned from #{time + 1.day}"
  rescue Twitter::Error::TooManyRequests => e
    wait_out_rate_limit_error(e)
    retry
  end

    
  def wait_out_rate_limit_error(error)
    reset_time = error.rate_limit.reset_in + 1
    puts "Hit rate limit, waiting #{reset_time} seconds.  "
    sleep reset_time
  end

  def fetch_twords_for_day(time)
    tword = Tword.by_screen_name(screen_name).
                  in_date_range(full_day_range(time)).
                  recent.
                  first
    if tword.blank?
      twords = Twords.new screen_name
      tword = Tword.create! screen_name: screen_name, words: twords.words_forward, created_at: time
      puts "created new twords for #{time}"
    end
  end

  def screen_name
    Rails.configuration.screen_name
  end

  def full_day_range(time)
    time.beginning_of_day..time.end_of_day
  end
end