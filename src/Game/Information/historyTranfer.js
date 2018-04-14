

//var sercurity = null;

var HistoryTranfer = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("HistoryTranfer");
        },

        onEnter: function(){
            this._super();

        },
    }
)

