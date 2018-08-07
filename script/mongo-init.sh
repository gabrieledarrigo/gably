#!/usr/bin/env bash

echo 'Creating application user and db'
echo ${MONGO_APPLICATION_DATABASE}
echo ${MONGO_APPLICATION_USERNAME}
echo ${MONGO_APPLICATION_PASSWORD}

mongo gably \
        --host localhost \
        --port 27017 \
        -u ${MONGO_INITDB_ROOT_USERNAME} \
        -p ${MONGO_INITDB_ROOT_PASSWORD} \
        --authenticationDatabase admin \
        --eval "db.createUser({ user: '${MONGO_APPLICATION_USERNAME}', pwd: '${MONGO_APPLICATION_PASSWORD}', roles:[{ role:'dbOwner', db: '${MONGO_APPLICATION_DATABASE}' }] });"
