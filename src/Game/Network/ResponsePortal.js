var CMD_LOGIN = 50;
var CMD_REGISTER = 52;
var CMD_CAPTCHA = 1;

var CmdSendLogin = function (username, password, des) {
    return JSON.stringify({"i":1,"c":50,"d":{"name": username,"pass": password ,"des":des}});

}
var CmdSendRegister = function (username, password, captcha, des) {
    return JSON.stringify({"i":1,"c":52,"d":{"name": username,"pass": password , "captcha" : captcha,"des":des}});

}

var CmdgetCaptcha = function () {
    return JSON.stringify({"i":1,"c":1,"d":"0"});
}