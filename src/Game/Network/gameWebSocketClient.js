/**
 * Created by PVC on 9/16/2017.
 */
var GameWebSocket = WebsocketClient.extend({
    ctor: function(){
        this._super();
    },
    send: function(pk,callBackSendClient){
        if(this.listener.gameWsState != CLIENT_STATE.CONNECTED){
            return false;
        }else{

            var d = new Date().getTime();
            if(!this["time"+pk._cmdId] || (d - this["time"+pk._cmdId] > 1000))
            {
                cc.log("time = " + (d - this["time"+pk._cmdId]) + " cmd = " + pk._cmdId);
                this["time"+pk._cmdId] = d;
                if(callBackSendClient)
                    callBackSendClient();
                WebsocketClient.prototype.send.call(this, pk);
                return true;
            }
        }
        return false;
    }

});


