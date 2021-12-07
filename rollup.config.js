import typescript from "rollup-plugin-typescript2";
import { string } from "rollup-plugin-string";
const { preserveShebangs } = require("rollup-plugin-preserve-shebangs");
const globImport = require("rollup-plugin-glob-import");

export default {
	input: "src/index.ts",
	output: {
		dir: "lib",
		format: "cjs",
	},
	plugins: [
		string({
			include: ["src/template/*.tsx"],
		}),
		globImport(),
		typescript({
			typescript: require("typescript"),
		}),
		preserveShebangs(),
	],
};
