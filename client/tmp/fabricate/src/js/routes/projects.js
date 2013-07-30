

/***  src/js/routes/projects  ***/

App.ProjectsRoute = Em.Route.extend({

  // # We want our projects list to be populated w/ all of our projects
  setupController: function(controller) {
    App.Project.find()
    return this.controllerFor('projects').set('content', App.Project.all())
  },

})
;
