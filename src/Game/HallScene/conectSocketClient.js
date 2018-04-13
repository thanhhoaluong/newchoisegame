var conectSocketClient = null;

var ConectSocketClient = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.gameClient = null;
            return true;
        },
        customizeGUI: function () {
            cc.log("customizeGUI");
            this.connectSocket();
        },

        onEnter: function(){
            this._super();

        },

        connectSocket: function () {
            if (this.gameClient == null) {
                this.gameClient = new GameWebSocket();
                this.gameClient.listener = new GameListener();
            }
            if (this.gameClient.listener.gameWsState == CLIENT_STATE.NOT_CONNECTED) {
                this.gameClient.connect("35.200.230.63", 8689, isHttps, this.gameClient.listener);
                this.gameClient.listener.gameWsState = CLIENT_STATE.CONNECTING;
            }
        },
        reconnectSocket: function (time) {
            this.timeReconnect = 1000;

            var _self = this;
            this.clearReconnectSocket(true);
            this.reconnectTimeout = setTimeout(function () {
                _self.connectSocket();
            }, this.timeReconnect);
        },
        clearReconnectSocket: function () {
            if(this.reconnectTimeout) {
                clearTimeout(this.reconnectTimeout);
                this.reconnectTimeout = null;
            }
        },

        loginToGame : function(username, password, des){
            if(conectSocketClient){
                var url = CmdSendLogin(username, password, des);
                this.gameClient.send(url);
            }
        },
    }
)

