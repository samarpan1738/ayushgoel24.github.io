#!/bin/bash

gatsby build

echo "Kindly confirm the branch where portfolio will be deployed."
read -p "Are you sure you want to continue?" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    npm run deploy
fi