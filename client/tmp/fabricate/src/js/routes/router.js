

/***  src/js/routes/router  ***/

App.Router.map(function() {

  this.route('about', {})
  this.route('projects', {})
  this.route('orgs', {})
  this.route('account', {})

  // project profile
  this.resource('project', {
    path: '/project/:project_id'
  },function() {

  })

  // org profile
  this.resource('org', {
    path: '/org/:org_id'
  },function() {

  })

})
;
