#!/bin/bash

npm run build

SERVICE_REPO_DIR=../doda-service

echo "refreshing the daemon's web-ui files"
rm $SERVICE_REPO_DIR/web-ui/* -r
cp build/* $SERVICE_REPO_DIR/web-ui/ -r