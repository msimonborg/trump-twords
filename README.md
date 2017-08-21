# README

Displays a word cloud of POTUS's last 30 days of Twitter activity.

[See it on Heroku](http://www.trumpwords.exposed)

* Ruby 2.4.1

* Rails 5.1.3

* Node

* React

* PostgreSQL

* [Twords](https://github.com/msimonborg/twords) gem

You will need to set environment variables for your Twitter API credentials. Here are the default variable names:

```ruby
'TWITTER_CONSUMER_KEY'
'TWITTER_CONSUMER_SECRET'
'TWITTER_ACCESS_TOKEN'
'TWITTER_ACCESS_TOKEN_SECRET'
```

If you want to store these keys under different variable names you can customize them and other config options in `config/initializers/twords.rb`

The app analyzes the `realdonaldtrump` screen name by default. You can change the screen name and the randomly generated greeting messages in `config/application.rb`

Then bundle, set up the database, and collect the available tweet history.

```shell
$ bundle install
$ rake db:create
$ rake db:migrate
$ rake fetch_twords:history # This task will take some time as it searches the screen_name's history and seeds the database
$ rails server
```

Open a second terminal and cd into the app root directory. Open the webpack development server for Javascript compilation and auto reloading.

    $ yarn install
    $ bin/webpack-dev-server

To deploy to Heroku, just create a new app and push.

If a particular date has not already been checked, then the first request for that date will be slow as the app makes calls to the Twitter API for the word data. To avoid this you can set up a daily cron job in production to run `rake fetch_twords:today`. It's advised to run this after midnight every day to make sure the database stays up to date.
