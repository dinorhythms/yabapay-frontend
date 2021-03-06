const path = require('path');
const {
  override,
  addWebpackAlias,
  babelInclude,
  addBabelPlugins,
  disableChunk,
  removeModuleScopePlugin,
  addBabelPresets
} = require('customize-cra');

module.exports = override(
  ...addBabelPresets("@babel/preset-env", "@babel/preset-react"),
  addWebpackAlias({
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    "react-native": "react-native-web"
  }),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/react-native'),
    path.resolve('node_modules/native-base-shoutem-theme'),
    path.resolve('node_modules/react-navigation'),
    path.resolve('node_modules/react-native-easy-grid'),
    path.resolve('node_modules/react-native-drawer'),
    path.resolve('node_modules/react-native-safe-area-view'),
    path.resolve('node_modules/react-native-vector-icons'),
    path.resolve('node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve('node_modules/react-native-web'),
    path.resolve('node_modules/react-native-tab-view'),
    path.resolve('node_modules/static-container'),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-modules-commonjs"
  ),
  disableChunk(),
  removeModuleScopePlugin()
);