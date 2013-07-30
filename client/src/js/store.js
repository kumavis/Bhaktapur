
App.Store = DS.Store.extend({
  revision: "12",
  adapter: App.Adapter.create(),
})

// App.__container__.lookup('store:')