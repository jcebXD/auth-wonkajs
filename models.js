(function(namespace) {

  var models = namespace.models;

  models.User = models.UserModel.extend({
    loginURL: '', //Set your login uri
    registerURL: '' //Set your register uri
  });

})(auth);