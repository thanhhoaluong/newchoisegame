var countConnect = 3;

var GameListener = cc.Class.extend(
    {
        ctor: function () {
            this.isLoggined = false;
            this.gameWsState = CLIENT_STATE.NOT_CONNECTED;
        },
        onFinishConnect: function (isSuccess) {
             cc.log("Connect Socket " + isSuccess);
            conectSocketClient = isSuccess;
            if (isSuccess) {
                getConection(MODULE_PORTAL);
                conectsocket.clearReconnectSocket();
                this.gameWsState = CLIENT_STATE.CONNECTED;
            } else {
                this.gameWsState = CLIENT_STATE.NOT_CONNECTED;
                showAlam(0, "Không thể kết nối máy chủ. Vui lòng quay lại sau!", null);

            }
        },
        onDisconnected: function () {
            cc.log(" Disconnect connect socket" );
            if(hallscene)
                hallscene.destroyHallScene();
            if(showalam)
                showalam.destroyAlam();

            showAlam(0, "Không thể kết nối máy chủ. Vui lòng quay lại sau!", null);
            conectSocketClient = false;

            this.gameWsState = CLIENT_STATE.NOT_CONNECTED;

            //popup.openCountdownAlert(15000, Minigame.reconnectSocket, Minigame);
        },

        onReceived: function (data) {
            cc.log("Received cmd = " + data);
            var jsonData = JSON.parse(data);
            switch (jsonData["c"]) {
                case CMD_LOGIN:
                    loginscene.LoginSuccess(jsonData["d"], jsonData["m"]);
                    break;
                case CMD_REGISTER:
                    loginscene.signUp.RegisterSuccess(jsonData["d"], jsonData["m"]);
                    break;
                case CMD_CAPTCHA:
                    if(jsonData["d"] == "" && jsonData["m"] == ""){
                        showalam.destroyAlam();
                        return;
                    }
                    if(LISTEN_CAPTCHA == TYPE_CAPTCHA.GET)
                        captcha_base.showCaptcha(jsonData["d"], jsonData["m"]);
                    else{
                        LISTEN_CAPTCHA = TYPE_CAPTCHA.CHECK;
                        var str = "Vui lòng nhập mã Captcha";
                        if(jsonData["m"] != "")
                            str = jsonData["m"];
                        showCaptcha(2, str, jsonData["d"]);
                    }
                    break;
                case CMD_CHANGE_PASSWORD:
                    playerInfo.hscn.changePass.changePassSuccess(jsonData["d"], jsonData["m"]);
                    break;
                case CMD_CHANGE_AVATAR:
                    playerInfo.hscn.updateAvatarSucces(jsonData["d"], jsonData["m"]);
                    break;
                case CMD_CHAT:
                    taixiu.createChat(jsonData["d"], jsonData["m"]);
                    break;
                case CMD_SEND_CHAT:
                    if(taixiu.showChat == true)
                        taixiu.sendChatSuccess(jsonData["d"], jsonData["m"]);
                    break;
            }

            return;
        }
    }
);
