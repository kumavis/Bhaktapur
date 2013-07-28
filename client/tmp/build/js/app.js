var App=Ember.Application.create();App.Router.map(function(){this.route("about",{});this.route("projects",{});this.route("orgs",{});this.route("account",{});this.resource("project",{path:"/project/:project_id"},function(){})});App.Store=DS.Store.extend({revision:"12"});App.Project=DS.Model.extend({title:DS.attr("string"),description:DS.attr("string"),img:DS.attr("string"),isFunded:DS.attr("boolean"),isNew:DS.attr("boolean"),isNearDeadline:DS.attr("boolean")});App.ApplicationController=Em.Controller.extend({routeIsHome:function(){return this.get("currentPath")==="index"}.property("currentPath"),routeIsAbout:function(){return this.get("currentPath")==="about"}.property("currentPath"),routeIsProjects:function(){return this.get("currentPath")==="projects"}.property("currentPath"),routeIsOrgs:function(){return this.get("currentPath")==="orgs"}.property("currentPath"),routeIsAccount:function(){return this.get("currentPath")==="account"}.property("currentPath")});App.HomeSlide=Em.Object.extend({title:null,subtitle:null,img:null,index:function(){return this.get("controller.slides").indexOf(this)}.property("controller.currentSlideIndex"),isCurrent:function(){return this.get("controller.currentSlideIndex")===this.get("index")}.property("controller.currentSlideIndex")});App.IndexController=Em.Controller.extend({currentSlideIndex:0,currentSlide:function(){return this.get("slides")[this.get("currentSlideIndex")]}.property("currentSlideIndex"),slides:function(){return[App.HomeSlide.create({controller:this,title:"Nepal needs your help.",subtitle:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",img:"http://images.nationalgeographic.com/wpf/media-live/photos/000/120/cache/nepal-mustang-girls_12054_600x450.jpg"}),App.HomeSlide.create({controller:this,title:"Together we can heal the world.",subtitle:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",img:"http://chhayakhanal.com/wp-content/uploads/2013/02/nepal.jpg"}),App.HomeSlide.create({controller:this,title:"Empower local organizations.",subtitle:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",img:"https://upload.wikimedia.org/wikipedia/commons/0/07/Mera_Peak_Panorama_Nepal.JPG"})]}.property(),nextSlide:function(){this.setSlide(this.get("currentSlideIndex")+1)},previousSlide:function(){this.setSlide(this.get("currentSlideIndex")-1)},setSlide:function(newIndex){var slideCount=this.get("slides.length");newIndex=newIndex%slideCount;if(newIndex<0)newIndex+=slideCount;this.set("currentSlideIndex",newIndex)}});App.ProjectsController=Em.ArrayController.extend({content:function(){return[App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",isFunded:true}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",isNew:true}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",isNearDeadline:true}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp"}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp"}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp"}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp"}),App.Project.createRecord({title:"BioGas Toilets",description:"Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",img:"https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp"})]}.property()});App.ApplicationRoute=Em.Route.extend({events:{navigateHome:function(){this.transitionTo("index")},navigateAbout:function(){this.transitionTo("about")},navigateProjects:function(){this.transitionTo("projects")},navigateOrgs:function(){this.transitionTo("orgs")},navigateAccount:function(){this.transitionTo("account")}}});
//@ sourceMappingURL=bootstrap.js.map