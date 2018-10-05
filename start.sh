npm install -g live-server
npm install -g babel-cli
git remote add andrew  https://github.com/andrewjohnso7/hrsf104-recastly-redux.git &
babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline -w &
live-server &
webpack -d --watch &
