class TwordsController < ApplicationController
  SCREEN_NAME = 'realdonaldtrump'.freeze

  before_action :set_date_range, only: :index

  def index
    @tword = Tword.by_screen_name(SCREEN_NAME).in_date_range(@date_range).recent.first
    if @tword.blank?
      Twords.config do |c|
        c.up_to { @date_range.first }
        twords = Twords.new SCREEN_NAME
        @tword = Tword.create(
          screen_name: SCREEN_NAME, words: twords.words_forward, created_at: @date_range.first
        )
        c.up_to { Time.now }
      end
    end
  end

  private

  def set_date_range
    @date_range = if %i[year month day].all? { |date_param| params[date_param].present? }
      date_string = "#{params[:year]}/#{params[:month]}/#{params[:day]}"
      date_string.to_time.beginning_of_day..date_string.to_time.end_of_day
    else
      Time.now.beginning_of_day..Time.now.end_of_day
    end
  end
end
