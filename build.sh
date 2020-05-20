#!/bin/bash

npm run build

echo "refreshing the daemon's web-ui files"
rm ../youtube-dl-daemon/web-ui/* -r
cp build/* ../youtube-dl-daemon/web-ui/ -r