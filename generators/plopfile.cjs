const componentGenerator = require('./component.generator.cjs')
const pageGenerator = require('./page.generator.cjs')
const hookGenerator = require('./hook.generator.cjs')

module.exports = function generator(plop) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('page', pageGenerator)
  plop.setGenerator('hook', hookGenerator)
}
