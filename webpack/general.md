# webpack config

####`output`

```js
module.exports = {
	// specify information regarding entry files
	entry: {
		// key is the name of the entry chunk
		// value is the location of the entry javascript file
		app: ['./src/index.js'],
	},
	// configs for the output
	output: {
		// the local directory to output compiled code to
		path: './build',
		// filename out compiled js file, you can use dynamic placeholders name=key of entry file
		filename: '[name].[hash].js',
		// path to serve generated bundles, like lazy loaded chunks
		publicPath: '/assets/',
	}
}
```

`path`: where to output the compiled code locally.

`filename`: name of output file. you can use dynamic placeholders for the filename `[name].[hash].compiled.js`

`publicPath`: path to where the generated bundles are located on the server.

## Plugins

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// ...
	plugins: [
		// generate index.html that includes compiled assets using script/link tags
		new HtmlWebpackPlugin(),
	]
}
```

## Loaders

```js
module.exports = {
	// ...
	module: {
		loaders: [
			{},
		],
	}
}
```

# webpack-dev-server

Configurations for hot module reloading should only be given to webpack-dev-server or specified in webpack config not both.

Flag | Description
---|---
`--content-base` | local directory to serve static files. I
`--hot` |
`--inline` |

```
--content-base
--hot
--inline
--content
```