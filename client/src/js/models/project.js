
App.Project = DS.Model.extend({
  
  // attributes
  title: DS.attr('string'),
  description: DS.attr('string'),
  img: DS.attr('string'),

  // relations
  org: DS.belongsTo('App.Org'),

  // computed props
  isFunded: DS.attr('boolean'),
  isNew: DS.attr('boolean'),
  isNearDeadline: DS.attr('boolean'),
})