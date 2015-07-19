import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('classrooms');

  this.route('notebooks', function() {});

  this.route('classrooms', function() {
    this.route('edit_classroom', { path:":classroom_id/edit"});
  });
});

export default Router;
