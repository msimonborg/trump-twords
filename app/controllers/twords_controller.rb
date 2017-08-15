class TwordsController < ApplicationController
  SCREEN_NAME = 'realdonaldtrump'.freeze

  before_action :set_date, only: :index

  def index
    @tword = Tword.by_screen_name(SCREEN_NAME).in_date_range(@date_range).recent.first
    if @tword.blank? || @tword.created_at.beginning_of_day != Date.today.beginning_of_day
      twords = Twords.new SCREEN_NAME
      @tword = Tword.create screen_name: SCREEN_NAME, words: twords.words_forward
    end
  end

  private

  def set_date
    return unless %i[year month day].all? { |date_param| params[date_param].present? }
    date_string = "#{params[:year]}/#{params[:month]}/#{params[:day]}"
    @date_range = date_string.to_time.beginning_of_day..date_string.to_time.end_of_day
  end
end
