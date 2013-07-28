
App.ApplicationController = Em.Controller.extend({

  // current route
  
  routeIsHome: (function(){
    return this.get('currentPath') === 'index'
  }).property('currentPath'),

  routeIsAbout: (function(){
    return this.get('currentPath') === 'about'
  }).property('currentPath'),

  routeIsProjects: (function(){
    return this.get('currentPath') === 'projects'
  }).property('currentPath'),

  routeIsOrgs: (function(){
    return this.get('currentPath') === 'orgs'
  }).property('currentPath'),

  routeIsAccount: (function(){
    return this.get('currentPath') === 'account'
  }).property('currentPath'),



})