import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'

const input = 'src/index.ts' // 输入（入口）文件
const extensions = ['.tsx', '.ts', '.jsx', '.mjs', '.js', '.json', '.node'] // 默认查找的文件扩展名

export default {
  input,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Dry',
    },
  ],
  plugins: [
    // 使用node解析算法查找模块
    resolve({
      /*
			browser   类型: Boolean   默认值: false
			是否优先使用 `package.json` 中的 browser 字段来解析依赖包的入口文件；
			- 构建专门用于浏览器环境的包时，建义设置为 `browser:true`；
			- 构建专门用于node环境的包时，建义设置为 `browser:false` 或者 删除此选项；
			*/
      browser: true,
      /*
			extensions   类型: Array[...String]    默认值: ['.mjs', '.js', '.json', '.node']
			扩展文件名
			*/
      extensions,
    }),
    json(), //将 json 文件转为 ES6 模块
    typescript(),
    commonjs(),
  ],
}
