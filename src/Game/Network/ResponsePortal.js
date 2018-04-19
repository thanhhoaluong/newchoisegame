var CMD_LOGIN = 50;
var CMD_REGISTER = 52;
var CMD_CAPTCHA = 1;
var CMD_CHANGE_PASSWORD = 54;
var CMD_CHANGE_AVATAR = 55;
var CMD_CHAT = 100;
var CMD_SEND_CHAT = 101;

var CmdSendLogin = function (username, password, des) {
    return JSON.stringify({"i":1,"c":50,"d":{"name": username,"pass": password ,"des":des}});

}
var CmdSendRegister = function (username, nickname, password, captcha, des) {
    return JSON.stringify({"i":1,"c":52,"d":{"name": username ,"alias":nickname,"pass": password , "captcha" : captcha,"des":des}});

}

var CmdgetCaptcha = function (captcha) {
    return JSON.stringify({"i":1,"c":1,"d":captcha});
}

var CmdChangePassword = function (oldpass, newpass, captcha) {
    return JSON.stringify({"i":1,"c":54,"d":{"pass":oldpass,"passNew":newpass, "captcha":captcha}});
}

var CmdChangeAvatar = function (avatar) {
    return JSON.stringify({"i":1,"c":55,"d":avatar});
}

var CmdEnterModule = function (module, accessToken) {
    return JSON.stringify({"i":module,"c":2,"d":accessToken});
}

var CmdLeaveModule = function (module) {
    return JSON.stringify({"i":module,"c":3,"d":""});
}

var CmdSendChat = function (content) {
    return JSON.stringify({"i":2,"c":101,"d": content});
}

