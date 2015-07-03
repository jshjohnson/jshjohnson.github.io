############################################
# Setup Server
############################################

set :application, "dev.joshuajohnson.co.uk" # typically the same as the domain
server "#{host}", :app

############################################
# Setup Git
############################################

set :branch, "develop"