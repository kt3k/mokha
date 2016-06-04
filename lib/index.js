const Suite = require('./domain/suite')
const SuiteBuilder = require('./service/suite-builder')
const ROOT_SUITE_NAME = require('./const').ROOT_SUITE_NAME

const builder = new SuiteBuilder(new Suite(ROOT_SUITE_NAME))

/**
 * Describes the topic.
 * @param {string} topic The topic to describe
 */
exports.describe = (topic, description) => {
  builder.describe(topic, description)
}
