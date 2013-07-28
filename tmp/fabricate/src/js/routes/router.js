

/***  src/js/routes/router  ***/

App.Router.map(function() {

  this.route('about', {});
  this.route('projects', {});
  this.route('orgs', {});
  this.route('account', {});

  this.resource('project', {
    path: '/project/:project_id'
  },function() {

  });

});
