import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import rollup_start_dev from './rollup_start_dev';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({dev: !production, css: css => css.write('public/bundle.css')}),
    resolve({browser: true, dedupe: e => e === 'svelte' || e.startsWith('svelte/')}),
    commonjs(),
    !production && rollup_start_dev,
    !production && livereload('public'),
    production && terser()
  ],
  watch: {clearScreen: false}
};
