class ErrorsController < ApplicationController
  def not_found
    @oldest_date = Tword.oldest_created_at
    render status: 404
  end
end
