import path from "path";
import { fileURLToPath } from "url";

import { merge } from "webpack-merge";
import commonConfig from "./webpack.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
  },
});
