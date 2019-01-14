// your account sid
var accountSid = 'AC780efe2cc96c83e6e642fee50f96c4a6';

// your runtime domain
var serviceBaseUrl = 'regalia-dragonfly-5137.twil.io';

// set to /plugins.json for local dev
// set to /plugins.local.build.json for testing your build
// set to "" for the default live plugin loader
var pluginServiceUrl = '';

var appConfig = {
  serviceBaseUrl: serviceBaseUrl + '/',
  pluginService: {
    enabled: true,
    url: pluginServiceUrl,
  },
  sso: {
    accountSid: accountSid,
    tokenizerUrl: serviceBaseUrl + '/tokenizer',
  },
  ytica: false,
  logLevel: 'debug',
  showSupervisorDesktopView: true,
};
