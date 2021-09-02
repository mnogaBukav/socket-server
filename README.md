## Socket Template

## Steps to start new heroku deployment

1) download [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) and run the following commands in the project root

2) `heroku create socket-template --region eu`

3) `heroku git:remote -app socket-template`

4) `heroku config:set YARN_PRODUCTION=false`

5) `heroku config:set HOST=0.0.0.0`

6) `heroku config:set NODE_ENV=production`

7) connect your github repository to heroku dashboard

8) (optional) in heroku dashboard enable automatic deploys
