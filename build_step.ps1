#!/usr/bin/env pwsh

echo "Build script"

# Set the NODE_OPTIONS environment variable
$env:NODE_OPTIONS = "--openssl-legacy-provider"

# Install npm dependencies
npm install

# Install webpack-cli
npm install --save-dev webpack-cli

# Run the build command
npx webpack --mode production
