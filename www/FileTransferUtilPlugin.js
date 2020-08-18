var exec = require('cordova/exec');


exports.enableAccessPoint = function (settings, successCallBack, failureCallBack) {
  exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'enableHostAP', [settings]);
};

exports.disableAccessPoint = function (successCallBack, failureCallBack) {
  exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'disableHostAP', []);
};


