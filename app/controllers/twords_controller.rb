class TwordsController < ApplicationController
  SCREEN_NAME = 'realdonaldtrump'.freeze

  def index
    screen_name = params.fetch(:screen_name) { SCREEN_NAME }
    @tword = Tword.by_screen_name(screen_name).recent.first
    if @tword.blank? || @tword.created_at.midnight != Date.today.midnight
      twords = Twords.new screen_name
      @tword = Tword.create screen_name: screen_name, words: twords.words_forward
    end
  end
end
