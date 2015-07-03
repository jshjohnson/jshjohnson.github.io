############################################
# Requirements
############################################

require 'rubygems' 
require 'bundler/setup'
require 'capistrano/ext/multistage'
require 'yaml'

############################################
# Setup Stages
############################################

set :stages, %w(prd dev)
set :default_stage, "dev"
set :keep_releases, 2

after "deploy", "deploy:cleanup"


############################################
# Setup Site
############################################

set :site, "156312" # this is your site number, https://kb.mediatemple.net/questions/268/What+is+my+site+number%3F#gs
set(:host) { "s#{site}.gridserver.com" }
set(:domain) { "s#{site}.gridserver.com" }
set(:user) { "joshuajohnson.co.uk" }

############################################
# Setup Git
############################################

set :repository, "git@github.com:jshjohnson/Portfolio-2015.git"
set :scm, :git
set(:git_enable_submodules, true)
set :deploy_via, :remote_cache
set :copy_exclude, [".git", ".DS_Store", ".gitignore", ".gitmodules", "capfile", "config/"]

############################################
# Setup Server
############################################

set :use_sudo, false
ssh_options[:forward_agent] = true

# Path stuff, make sure to symlink html to ./current
set(:deploy_to) { "/home/#{site}/domains/#{application}" }
set :current_dir, "html"