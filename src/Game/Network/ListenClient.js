var countOnConect = 3;

var GameListener = cc.Class.extend(
    {
        ctor: function () {
            this.isLoggined = false;
            this.gameWsState = CLIENT_STATE.NOT_CONNECTED;
        },
        onFinishConnect: function (isSuccess) {
             cc.log("MinigameListener Finish connect Minigame" + isSuccess);
            conectSocketClient = isSuccess;
            if (isSuccess) {
                loginscene.conectsocket.clearReconnectSocket();
                this.gameWsState = CLIENT_STATE.CONNECTED;
            } else {
                this.gameWsState = CLIENT_STATE.NOT_CONNECTED;
                showAlam(0, "Không th? k?t n?i ??n máy ch?! Vui lòng th? l?i sau", null);

            }
        },
        onDisconnected: function () {
             cc.log(" Finish connect socket" );
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
            }

            return;
        }
    }
);
