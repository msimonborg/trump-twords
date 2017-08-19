# README

Displays a word cloud of POTUS's last 30 days of Twitter activity.

[See it on Heroku](https://trumpwords.exposed)

* Ruby 2.4.1

* Rails 5.1.3

* Node

* React

* PostgreSQL

* [Twords](https://github.com/msimonborg/twords) gem

```shell
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails server
```

Open a second terminal and cd into the app root directory. Open the webpack development server for Javascript auto reloading.

    $ yarn install
    $ bin/webpack-dev-server

To deploy to Heroku, just create a new app and push.
