import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  external,
  globals: { vue: 'Vue' },
  entry: 'src/main.js',
  plugins: [
    resolve(),
    vue({ compileTemplate: true, css: true }),
    buble()
  ],
  targets: [
    { dest: 'rllp/vue-rollup-example.cjs.js', format: 'cjs' },
    { dest: 'rllp/vue-rollup-example.umd.js', format: 'umd' }
  ]
};
