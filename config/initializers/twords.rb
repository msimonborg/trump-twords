# frozen_string_literal: true

Twords.config do |config|
  config.rejects = %w[my us we an w/ because b/c or are this is from
                      be on the for to and at our of in rt a with &amp;
                      that it by as if was - --]
  #
  config.range = 30
  # config.up_to { Time.now }
  config.include_hashtags = true
  # config.include_uris     = false
  # config.include_mentions = false
  #
  # config.twitter_client do |twitter|
  #   twitter.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
  #   twitter.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
  #   twitter.access_token        = ENV['TWITTER_ACCESS_TOKEN']
  #   twitter.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
  # end
end
