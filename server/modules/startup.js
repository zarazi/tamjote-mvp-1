let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _generateJotes();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

var _generateJotes = () => Modules.server.generateJotes();

Modules.server.startup = startup;
