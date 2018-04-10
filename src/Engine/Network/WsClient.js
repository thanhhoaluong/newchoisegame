
var WebsocketrClient = cc.Class.extend({
    ctor: function(){
        this.listener = null;
        this.ws = null;
        if(!cc.sys.isNative)
        {
            cc.director.getScheduler().scheduleUpdate(this,0,false);
        }
        this.data = [];
        this.event = -1;
    },
    getHandshakeRequest: function()
    {
        var obj = {};
        obj.c = 0;
        obj.a = 0;
        obj.p = {};
        obj.p["cl"] = "JavaScript";
        obj.p["api"] = "1.2.0";

        return JSON.stringify(obj);
    },

    connect: function(host,port,isSsl, listenner)
    {
        cc.log("connect: " + host + " port: " + port);
        if(!useTCP){
            if(port % 2 == 1){
                port = port + 1;
            }
        }
        if (isSsl) {
            port = port + 1;
        }
    },

    closeSocket:function()
    {

        if(!cc.sys.isNative || !useTCP){
            this.ws.close();
        }
        else{
            this.ws.disconnect();
        }

    },


});
