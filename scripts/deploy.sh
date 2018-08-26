#!/bin/bash
echo 'Releasing gably application'

heroku container:push web --app gably
heroku container:release web --app gably