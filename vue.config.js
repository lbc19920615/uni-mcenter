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
				}, true ),
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath','animation']
					});
					return JSON.stringify(tfPages.routes)
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
