require_relative '../../config/environment'

desc "Get the day's words"
task :fetch_twords do
  tword = Tword.by_screen_name(screen_name).in_date_range(date_range).recent.first
  if tword.blank?
    twords = Twords.new screen_name
    tword = Tword.create screen_name: screen_name, words: twords.words_forward
    puts 'created new tword'
  end
end

def screen_name
  Rails.configuration.screen_name
end

def date_range
  Time.now.beginning_of_day..Time.now.end_of_day
end