#!/bin/bash
echo $HEROKU_API_KEY

echo 'Pushing gably application container'
HEROKU_API_KEY=$HEROKU_API_KEY heroku container:push web --app gably

echo 'Releasing gably application container'
HEROKU_API_KEY=$HEROKU_API_KEY heroku container:release web --app gably