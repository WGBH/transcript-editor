source 'https://rubygems.org'

ruby '2.3.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.10'

# Use PostgreSQL as the database for Active Record
gem 'pg', '0.21.0' #, '1.1.4'

# for ruby 2.3
gem 'pg_search', '2.1.4'
gem 'will_paginate'

# Caching
gem 'dalli'

# Disabling assets; replaced with Gulp
# gem 'sass-rails', '~> 5.0'
# gem 'uglifier', '>= 1.3.0'
# gem 'coffee-rails', '~> 4.1.0'
# gem 'jquery-rails'

# Back-end App is treated mostly as a JSON API
gem 'jbuilder', '~> 2.0' # Build JSON APIs with ease
gem 'rails-api' # pare down rails to act like an API; disabling unnecessary middleware
gem 'rack-cors', :require => 'rack/cors'

# Rails app configuration / ENV management
gem 'figaro'

# User management / auth
gem 'devise_token_auth', '0.1.36'
gem 'omniauth-google-oauth2'
gem 'omniauth-facebook'

# Parsers for project asset precompilation
gem 'redcarpet'
gem 'ejs'
gem 'execjs'

# For audio transcripts
gem 'popuparchive'
gem 'webvtt-ruby'

# Error logging
gem 'newrelic_rpm'
gem 'rails_12factor'

# For debugging
gem 'pry'

gem 'passenger'

# for the screep
gem 'rest-client'

# Use unicorn on linux only
platforms :ruby do # linux
  gem 'unicorn'
end
