

var hallscene = null;

var HallScene = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("hallscene");
        },

        onEnter: function(){
            this._super();

        },
    }
)

openMenuTab = function () {
    if (hallscene === null) {
    }else
    {
        hallscene.removeFromParent(true);
        hallscene = null;
    }
    hallscene = new HallScene();
    var curScene = SceneMgr.getInstance().getRunningScene();
    curScene.addGUI(hallscene, BaseScene.INDEX_ALERT_GUI, 0);
};

