/**
 * Export the eslint configuration
 */
module.exports = JSON.parse(require('fs').readFileSync('./dist/.eslintrc'));
