const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				PRO_FOO: webpack.DefinePlugin.runtimeValue(() => {
					return JSON.stringify({})
				}, true )
			})
		]
	},
 	css: {
		loaderOptions: {
			sass: {
				implementation: require('sass')
			}
		}
  },
}
