# Wage Comp
A simple income tracker built with NW and AngularJS

# Running
Make sure you have NodeWebkit installed locally and added to your path
```sh
# !!! make sure nw and gulp are globally accessible !!!
# run this to install all dependencies (bower and npm) and prepare the app for packaging
# this will minify/uglify all files and create a 'dist' folder
sh dist.sh

# you can run the app form the base folder like so:
nw .

# or from the 'dist' folder like so:
nw dist
```

# Distribution and Packaging
`package.js` was writen for Windows and it will put the packaged app in your `c:/builds` folder; edit this to your liking;

The default targeted platforms are `win64`, `osx64` and `linux64`