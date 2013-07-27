Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"navbar-wrapper\">\n  <div class=\"container\">\n\n    <div class=\"navbar navbar-inverse navbar-static-top\">\n      <div class=\"container\">\n	    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n	      <span class=\"icon-bar\"></span>\n	      <span class=\"icon-bar\"></span>\n	      <span class=\"icon-bar\"></span>\n	    </button>\n        <a class=\"navbar-brand\" href=\"#\">Baktapur</a>\n        <div class=\"nav-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#about\">About</a></li>\n            <li><a href=\"#contact\">Contact</a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li class=\"nav-header\">Nav header</li>\n                <li><a href=\"#\">Separated link</a></li>\n                <li><a href=\"#\">One more separated link</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<!-- FOOTER -->\n<footer>\n  <p class=\"pull-right\"><a href=\"#\">Back to top</a></p>\n  <p>&copy; 2013 Kumavis Tree &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n</footer>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSlide", "slide.index", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("slide.isCurrent:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></li>\n    ");
  return buffer;
  }

  data.buffer.push("<!-- Carousel\n================================================== -->\n<div id=\"myCarousel\" class=\"carousel slide\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("currentSlide.img")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" alt=\"\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentSlide.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n          <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentSlide.subtitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n          <p><a class=\"btn btn-large btn-primary\" href=\"#\">Sign up today</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img data-src=\"holder.js/1500x500/auto/#777:#7a7a7a/text:Second slide\" alt=\"\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>Another example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-large btn-primary\" href=\"#\">Learn more</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img data-src=\"holder.js/1500x500/auto/#777:#7a7a7a/text:Third slide\" alt=\"\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>One more for good measure.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-large btn-primary\" href=\"#\">Browse gallery</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"left carousel-control\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousSlide", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  <a class=\"right carousel-control\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSlide", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n</div><!-- /.carousel -->\n\n\n\n<!-- Marketing messaging and featurettes\n================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" data-src=\"holder.js/140x140\">\n      <h2>Ensure Safety</h2>\n      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n      <p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" data-src=\"holder.js/140x140\">\n      <h2>Build Foundation</h2>\n      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n      <p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" data-src=\"holder.js/140x140\">\n      <h2>Bolster Education</h2>\n      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n      <p><a class=\"btn btn-default\" href=\"#\">View details &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n\n\n  <!-- START THE FEATURETTES -->\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"featurette\">\n    <img class=\"featurette-image img-circle pull-right\" src=\"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp\">\n    <h2 class=\"featurette-heading\">Get stuff done. <span class=\"text-muted\">Not just a bucket fund.</span></h2>\n    <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"featurette\">\n    <img class=\"featurette-image img-circle pull-left\" src=\"https://www.filepicker.io/api/file/NPKHSc8HRZubhA69UX37/convert?w=538&h=300&fit=scale\">\n    <h2 class=\"featurette-heading\">Full Transparency. <span class=\"text-muted\">Know where your money goes.</span></h2>\n    <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"featurette\">\n    <img class=\"featurette-image img-circle pull-right\" src=\"https://www.filepicker.io/api/file/CN7zLt9OQABTn0wPMKeA/convert?w=520&h=330&fit=scale\">\n    <h2 class=\"featurette-heading\">Empower local groups. <span class=\"text-muted\">They know how things work.</span></h2>\n    <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <!-- /END THE FEATURETTES -->");
  return buffer;
  
});