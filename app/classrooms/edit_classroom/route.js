import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('classroom', params.classroom_id, {reload: true}); 
  },
  actions: {
    updateClassroom: function(model) {
      model.save().then(() => {
        console.log('save successful'); 
        this.transitionTo('classrooms');
      }, function() { 
        console.log('save failed');
      });
    },
    close: function() {
      this.transitionTo('classrooms');
    }
  }

});
