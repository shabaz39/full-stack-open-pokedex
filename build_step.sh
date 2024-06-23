#!/bin/bash

echo "Build script"

# Set the NODE_OPTIONS environment variable
export NODE_OPTIONS=--openssl-legacy-provider

# Install npm dependencies including dev dependencies
npm install

# Install webpack-cli as a dev dependency
npm install --save-dev webpack-cli

# Run the build command using npx (or npm if you have webpack installed globally)
npx webpack --mode production
