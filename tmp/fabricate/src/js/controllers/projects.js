

/***  src/js/controllers/projects  ***/

App.ProjectsController = Em.ArrayController.extend({
  
  content: (function(){return [
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
      isFunded: true,
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
      isNew: true,
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
      isNearDeadline: true,
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
    }),
    App.Project.createRecord({
      title: "BioGas Toilets",
      description: "Build BioGas toilets in rural villages to improve sanitation and produce natural gas for cooking",
      img: "https://www.filepicker.io/api/file/xfy9KrrOQi6lARs8aWZp",
    }),
  ]}).property(),

})
;
