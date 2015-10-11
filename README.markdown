##reactive-2015

###Schedule
![schedule](http://i.imgur.com/yI6Scix.gif)

###Speakers
![speakers](http://i.imgur.com/PnDsUDy.gif)

###Map
![speakers](http://i.imgur.com/iZmGcWU.gif)

###Social
![social](http://i.imgur.com/tC8AjT3.gif)

#### Getting Started

- Make sure XCode is installed.

- Install React Native following the instructions detailed here [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)

- Clone this repo and then run `npm install`

- Open XCode and open `/ios/App.xcodeproj`

####Keys

You need to add Twitter API keys in `AppDelegate.m` and a MapBox token in `src/components/map.js`

#### Running IOS

Simply run the project in XCode

#### Linting

To lint your code using [ESLint](http://eslint.org/) run `npm run lint`

#### Type Checking

To type check your code using [Flow](flowtype.org), first [install Flow](http://flowtype.org/docs/getting-started.html#_) and then run `npm run flow`

#### Troubleshooting

If you have any trouble with package caching due to `.babelrc`, run `rm -fr $TMPDIR/react-*`
