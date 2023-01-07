module.exports = {
	module: {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: [
					{ loader: '@svgr/webpack', options: { typescript: true } },
				],
			},
		],
	},
}
