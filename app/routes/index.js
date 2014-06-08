export default Ember.Route.extend({
  model: function() {
    return {
      githubUrl: 'http://github.com/csand',
      twitterUrl: 'http://twitter.com/csand_'
    };
  }
});
