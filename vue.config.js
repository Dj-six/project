module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/attets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

// const path = require ('path')
// const resolve = dir =>path.join(__dirname,dir)
// module.exports = {
//   chainWbepack: config => {
//     config.resolve.alias.set('@',resolve('src'))
//     .set('components',resolve('src/components'))
//   }
// }