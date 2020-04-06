# KeyMappey

A tool that helps you create a quick reference of your game's controls.

[See it in action!](http://publicJorn.github.io/KeyMappey)

## Play around with the source code!

- `npm install` to download dependencies  
- `npm start` to develop  
- `npm run build` to create bundle file

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

## Dev: detailed TODO

1. restructure design svg to have a group for each button. This makes designing easier and rendering on change faster (only 1 key to change)
1. add an empty area to design in each key that is used for action label
1. use (already included) `svg-text-wrap` to wrap action label within container
1. automate parsing of svg design with svgo

# Docs

## Design

- Create svg with any vector based program
- Layer structure:
  ```
   /design
     (create whatever structure you need to apply design)
   /keys
     /key_Q
       /key
       /label
       /bindarea
    /key_W
    ...etc
  ```

### Design tips

- First create a single key with the above structure, you can copy from this
- Design the buttons so that there's as much space within as possible, so there's room for binding names
