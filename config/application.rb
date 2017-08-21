require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TrumpTwords
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Dynamic error pages
    config.exceptions_app = self.routes

    # Use eastern US time zone
    config.time_zone = 'Eastern Time (US & Canada)'
    config.active_record.default_timezone = :local

    # Set the target Twitter screen name
    config.screen_name = 'realdonaldtrump'.freeze

    # Set the possible greetings for random generation
    config.greetings = [
      'grab me by the pussy',
      'all hail the sharpie president',
      'heil twitler',
      'i have the best words',
      'when you\'re a star they just let you be president',
      'make our presidents great again!',
      'is this gonna last forever?',
      'with a stroke of the sharpie...'
    ].freeze
  end
end
