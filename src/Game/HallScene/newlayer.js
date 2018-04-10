

var newlayer = null;

var NewLayer = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("customizeGUI");
        },

        onEnter: function(){
            this._super();

        },
    }
)

