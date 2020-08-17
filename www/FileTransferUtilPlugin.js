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


module.exports = HotSpotUtil;
