heroku create socket-template --region eu

heroku git:remote -app socket-template

heroku config:set YARN_PRODUCTION=false
or
heroku config:set NPM_CONFIG_PRODUCTION=false

heroku config:set HOST=0.0.0.0

heroku config:set NODE_ENV=production
