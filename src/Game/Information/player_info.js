var playerInfo = null;

var Player_Info = BaseLayerTable.extend(
    {
        _gotoTab:null,
        ctor: function (gototab) {
            this._super("playerInfo");
            this._gotoTab = gototab;
            this.hscn = null;
            this.title = null;
            return true;
        },
        customizeGUI: function () {
            this.createTabView();

            if(this._gotoTab == "hscn"){
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_hscn.png",cc.size(268,45));
                this.onClickTab(1,0);
            }
            else if (this._gotoTab == "bmtk"){
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_bmtk.png",cc.size(347,49));
                this.onClickTab(1,1);
            }
            else{
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_lsgdpng",cc.size(314,49));
                this.onClickTab(1,2);
            }
        },

        createTabView: function () {
            var arrTitleTab = ["tx_info_s", "tx_bm_s", "tx_lsgd_s"];
            this._pTab = new LayoutTabView(this, cc.size(1072, 58), arrTitleTab, 1);
            this._pTab.setAnchorPoint(0.5, 0.5);
            this._pTab.setPosition(cc.p(639, 584));
            this.addChild(this._pTab);
        },

        onClickTab: function (tabIndex, index) {
            if (index == 0) {
                this.gotoHoSo();
            } else if (index == 1) {
                cc.log("2");
            } else if (index == 2) {
                cc.log("3");
            }
        },

        gotoHoSo : function(){
            if(this.hscn == null){
                this.hscn = new HoSoCaNhan(this);
                this.addChild(this.hscn);
            }
        },
    }
);



addPlayerInfo = function () {
    if(playerInfo) {
        playerInfo.removeAllChildren();
        playerInfo.removeFromParent(true);
        playerInfo = null;
    }
    playerInfo = new Player_Info("hscn");
    var curScene = SceneMgr.getInstance().getRunningScene();
    curScene.addGUI(playerInfo, BaseScene.INDEX_HALL_GUI, 1);
};



