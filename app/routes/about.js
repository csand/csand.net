import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    document.title = 'csand.net - About';
  }
});
