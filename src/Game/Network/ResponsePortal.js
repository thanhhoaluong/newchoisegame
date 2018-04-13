var CMD_LOGIN = 50;

var CmdSendLogin = function (username, password, des) {
    return JSON.stringify({"i":1,"c":50,"d":{"name": username,"pass": password ,"des":des}});

}