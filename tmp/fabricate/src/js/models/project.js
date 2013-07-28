

/***  src/js/models/project  ***/

App.Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  img: DS.attr('string'),
  isFunded: DS.attr('boolean'),
  isNew: DS.attr('boolean'),
  isNearDeadline: DS.attr('boolean'),
})
;
