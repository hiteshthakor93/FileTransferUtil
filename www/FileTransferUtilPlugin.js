var exec = require('cordova/exec');
 var HotSpotUtil = {};

 HotSpotUtil.enableAccessPoint = function(settings, successCallBack, failureCallBack)
{
    exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'enableHostAP', [settings]);
};

HotSpotUtil.disableAccessPoint = function(successCallBack, failureCallBack)
{
  exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'disableHostAP',[]);
};

// exports.enableAccessPoint = function(settings, successCallBack, failureCallBack)
// {
//     exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'enableHostAP', [settings]);
// };

// exports.disableAccessPoint = function(successCallBack, failureCallBack)
// {
//   exec(successCallBack, failureCallBack, 'FileTransferUtilPlugin', 'disableHostAP',[]);
// };

module.exports = HotSpotUtil;

// exports.coolMethod = function (arg0, success, error) {
    // exec(success, error, 'FileTransferUtilPlugin', 'coolMethod', [arg0]);
// };
