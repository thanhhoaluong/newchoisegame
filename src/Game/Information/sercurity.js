

//var sercurity = null;

var Sercurity = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("Sercurity");
        },

        onEnter: function(){
            this._super();

        },
    }
)

