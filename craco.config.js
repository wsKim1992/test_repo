const CracoAlilas = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: CracoAlilas,
			options: {
				source: "tsconfig",
				tsConfigPath: "tsconfig.json",
			},
		},
	],
	babel: {
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
					alias: {
						"@apis": "./src/apis",
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@interfaces": "./src/interfaces",
						"@pages": "./src/pages",
						"@stores": "./src/stores",
						"@types": "./src/types",
						"@utils": "./src/utils",
						"@routes": "./src/routes",
					},
				},
			],
		],
	},
};
