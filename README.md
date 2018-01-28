# KeyMappey

A tool that helps you create a quick reference of your game's controls.

[See it in action!](http://publicJorn.github.io/KeyMappey)

## Play around with the source code!

`npm install` or `yarn install` to download dependencies.

`npm run start` or `yarn start` to develop.

`npm run build` or `yarn build` to create bundle file.

## Notes

- This app is still in early development
- Before I continue development I want to sidestep and look into swapping [Redux](https://redux.js.org/) in favour of [MobX](https://mobx.js.org/).<br>
  Redux provides structure and is really good for large projects, I am used to it so implemented it here. However, for a relatively simple app like this, it creates more complexity than it solves. So I'll do a POC in a separate branch.

## 1.0 features

Eventually I want this to be a highly customisable app, that lets people create quick reference cards for their keyboard layout. Here are some of the features that you might expect:

- Multiple games, with possibility to add more game configurations
- Multiple keyboard languages, like french, german, etc.
- Multiple keyboard layouts
- More comprehensive key support, like key combinations
- Second screen mode (just display the keyboard part)

And further down the line:

- Per game: a parser that lets you read and write actual key config files from games.
- Social / Sharing possibilities
