

/***  src/js/models/org  ***/

App.Org = DS.Model.extend({
  
  // attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  img: DS.attr('string'),

  // relations
  projects: DS.hasMany('App.Project'),

  // computed props

  
})
;
