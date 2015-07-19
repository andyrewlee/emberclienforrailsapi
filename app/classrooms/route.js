import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('classroom', {reload: true});
  },
  actions: {
    addClassroom: function() {
      var classroom = this.store.createRecord('classroom', {
        name : this.controller.get('name') 
      });
      classroom.save().then(() => {
        console.log('save successful'); 
      }, function() { 
        console.log('save failed');
      });
    },
    deleteClassroom: function(model) {
      model.deleteRecord();
      model.save();
    }
  }
});
