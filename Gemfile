source "http://rubygems.org"
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'jekyll'
gem 'capistrano', '~> 2'
gem 'capistrano-ext'
gem 'railsless-deploy'
