

/***  src/js/routes/application  ***/

App.ApplicationRoute = Em.Route.extend({

  events: {
    navigateHome: function(){ this.transitionTo('index') },
    navigateAbout: function(){ this.transitionTo('about') },
    navigateProjects: function(){ this.transitionTo('projects') },
    navigateOrgs: function(){ this.transitionTo('orgs') },
    navigateAccount: function(){ this.transitionTo('account') },
  },

})
;
