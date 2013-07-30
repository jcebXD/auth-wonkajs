auth-wonkajs
============

## Install

```sh
$ wonkajs candy auth
```

## Configure

Auth module needs any settings to work, everything is done inside **package.json** file on section settings.

* auth_module **required** [module name that will manage the authentication]
* home_route **optional** [by default: "#home"]
* login_route **optional** [by default: "#login"]

## Implement

Once you've configured the module, just modify the file **auth/models.js** to set the loginURL and registerURL.

```
(function(namespace) {

  var models = namespace.models;

  models.User = models.UserModel.extend({
    loginURL: '', //Set your login uri, for example uri('sessions.json') or 'http://example.com/api/sessions.json'
    registerURL: '' //Set your register uri, for example uri('users.json') or 'http://example.com/api/sessions.json'
  });

})(auth);
```

That's it, all you have to do is run server and go to http://localhost:9300/#login and fill the form with email and password.

You can overwrite the methods on User model:

* login
* register
* logout

Also can modify the views on auth module:

* Register
* Login
* Home

Enjoy!
