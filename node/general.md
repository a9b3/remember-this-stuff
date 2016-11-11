## Export npm package as cli

To export npm package as command line tool.

**Add package.json field**

```json
"bin": {
	"foo": "index.js"
}
```

**Link to test locally**

```sh
npm link
foo # should run file specified in package.json
```

## Enable es6 node

`babel-register` all files required by node will be transformed by babel

`babel-polyfill` polyfills environment (async/await)

**Create .babelrc**

```json
{
  "presets": [
  	"stage-0", 
  	"es2015"
  ],
  "plugins": [
  	"transform-decorators-legacy"
  ]
}
```

**Install required packages**

```
npm i --save-dev babel-register babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-plugin-transform-decorators-legacy
```

```sh
yarn add --dev babel-register babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-plugin-transform-decorators-legacy
```

**Add entry hook**

```js
require('babel-register')({})
require('babel-polyfill')
```

**(optional) plugins**

- babel-plugin-transform-class-properties

## Debugging Memory

Use the process module to look at heap memory to determine if there is memory leaks over time.

```js
const process = require('process')

process.memoryUsage()
// => { rss: Number, heapTotal: Number, heapUsed: Number }
```