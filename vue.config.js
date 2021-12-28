const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve('src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
    // .tap(options => ({ ...options, plugins: [{ removeAttrs: { attrs: 'fill' } }] })).end()
    //在加上后面的两行代码
    // removeAttr 删除属性
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir)
  }
}





  //   config.module
  //     .rule('svg-sprite')
  //     .test(/\.svg$/)
  //     .include.add(dir).end() //只包含 icons目录
  //     .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
  //   config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
  //   config.module.rule('svg').exclude.add(dir) //其他 svg loader 排除 icons
  // }

