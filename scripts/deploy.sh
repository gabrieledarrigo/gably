#!/bin/bash

echo 'Releasing gably application'

HEROKU_API_KEY=${HEROKU_API_KEY} heroku container:push web --app gably
HEROKU_API_KEY=${HEROKU_API_KEY} heroku container:release web --app gably