var exec = require('cordova/exec');


modules.exports.enableAccessPoint = function (settings, successCallBack, failureCallBack) {
  exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'enableHostAP', [settings]);
};

modules.exports.disableAccessPoint = function (successCallBack, failureCallBack) {
  exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'disableHostAP', []);
};


