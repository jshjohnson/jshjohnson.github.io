############################################
# Setup Server
############################################

set :application, "joshuajohnson.co.uk" # typically the same as the domain
server "#{host}", :app

############################################
# Setup Git
############################################

set :branch, "master"