class TwordsController < ApplicationController
  SCREEN_NAME = Rails.configuration.screen_name
  GREETINGS   = Rails.configuration.greetings

  before_action :set_date_range, :set_oldest_date, only: :index

  def index
    @date     = @date_range.first.noon
    @greeting = GREETINGS.sample    
    @tword    = Tword.by_screen_name(SCREEN_NAME).in_date_range(@date_range).recent.first
    create_new_tword_by_date if @tword.blank?
  end

  def date_picker
    @date = params[:date]&.sub(/GMT[-|+]?\d{4}/, '').to_time
    return unless @date.present?
    @tword = Tword.by_screen_name(SCREEN_NAME).where(created_at: @date.beginning_of_day..@date.end_of_day).recent.first
    create_new_tword_by_date if @tword.blank?
    
    respond_to do |format|
      format.json do
        render json: { words: @tword.sometimes_shuffle_words, date: @date }
      end
    end
  end

  private

  def create_new_tword_by_date
    Twords.config do |c|
      c.up_to { @date }
      twords = Twords.new SCREEN_NAME
      @tword = Tword.create(
        screen_name: SCREEN_NAME, words: twords.words_forward, created_at: @date
      )
      c.up_to { Time.now }
    end
  end

  def set_oldest_date
    @oldest_date = Tword.oldest_created_at
  end

  def set_date_range
    @date_range = if %i[year month day].all? { |date_param| params[date_param].present? }
      date_string = "#{params[:year]}/#{params[:month]}/#{params[:day]}"
      date_string.to_time.beginning_of_day..date_string.to_time.end_of_day
    else
      Time.now.beginning_of_day..Time.now.end_of_day
    end
  end
end
