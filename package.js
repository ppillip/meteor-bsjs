Package.describe({
  summary: "JavaScript lib for DOM, CORE, utility and so on"
});

Package.on_use(function (api, where) {
  api.add_files('bsjs.js', ['client']);
});

Package.on_test(function (api) {
  api.use('bsjs');

  api.add_files('bsjs_tests.js', ['client']);
});
