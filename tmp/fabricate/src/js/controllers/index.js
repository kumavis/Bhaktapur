

/***  src/js/controllers/index  ***/

App.HomeSlide = Em.Object.extend({
  title: null,
  subtitle: null,
  img: null,
  index: (function(){
    return this.get('controller.slides').indexOf(this)
  }).property('controller.currentSlideIndex'),
  isCurrent: (function(){
    return this.get('controller.currentSlideIndex') === this.get('index')
  }).property('controller.currentSlideIndex'),
})


App.IndexController = Em.Controller.extend({
  
  currentSlideIndex: 0,
  currentSlide: (function(){
    return this.get('slides')[this.get('currentSlideIndex')]
  }).property('currentSlideIndex'),

  slides: (function(){
    return [App.HomeSlide.create({
      controller: this,
      title: "Nepal needs your help.",
      subtitle: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      img: "http://images.nationalgeographic.com/wpf/media-live/photos/000/120/cache/nepal-mustang-girls_12054_600x450.jpg",
    }),App.HomeSlide.create({
      controller: this,
      title: "Together we can heal the world.",
      subtitle: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      img: "http://chhayakhanal.com/wp-content/uploads/2013/02/nepal.jpg",
    }),App.HomeSlide.create({
      controller: this,
      title: "Empower local organizations.",
      subtitle: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Mera_Peak_Panorama_Nepal.JPG",
    })]
  }).property(),

  nextSlide: function(){
    this.setSlide(this.get('currentSlideIndex')+1)
  },
  previousSlide: function(){
    this.setSlide(this.get('currentSlideIndex')-1)
  },
  setSlide: function(newIndex){
    // normalize new index
    var slideCount = this.get('slides.length')
    newIndex = newIndex % slideCount
    if (newIndex<0) newIndex += slideCount
    // set new index
    this.set('currentSlideIndex',newIndex)
  },
})
;
