/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

app.import({
  development: 'vendor/ember-animated-outlet/dist/ember-animated-outlet.js',
  production: 'vendor/ember-animated-outlet/dist/ember-animated-outlet.min.js'
});
app.import('vendor/ember-animated-outlet/dist/ember-animated-outlet.css');

module.exports = app.toTree();
