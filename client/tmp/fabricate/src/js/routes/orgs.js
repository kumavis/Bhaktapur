

/***  src/js/routes/orgs  ***/

App.OrgsRoute = Em.Route.extend({

  // # We want our orgs list to be populated w/ all of our orgs
  setupController: function(controller) {
    App.Org.find()
    return this.controllerFor('orgs').set('content', App.Org.all())
  },

})
;
