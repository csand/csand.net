export default Ember.Route.extend({
  model: function() {
    document.title = 'csand.net';
    return {
      githubUrl: 'http://github.com/csand',
      twitterUrl: 'http://twitter.com/csand_'
    };
  }
});
