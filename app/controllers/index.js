export default Ember.ObjectController.extend({

  actions: {
    github: function() {
      window.location = this.get('githubUrl');
    },

    twitter: function() {
      window.location = this.get('twitterUrl');
    }
  }
});
