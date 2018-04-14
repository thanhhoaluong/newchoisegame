var playerInfo = null;

var Player_Info = LayerTableFrame.extend(
    {
        _gotoTab:null,
        ctor: function (gototab) {
            this._super("playerInfo");
            this._gotoTab = gototab;
            this.hscn = null;
            this.bmtk = null;
            this.lsgd = null;
            this.title = null;
            return true;
        },
        customizeGUI: function () {
            this.createTabView();

            if(this._gotoTab == "hscn"){
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_hscn.png",cc.size(347,52));
                this.onClickTab(1,0);
            }
            else if (this._gotoTab == "bmtk"){
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_bmtk.png",cc.size(347,52));
                this.onClickTab(1,1);
            }
            else{
                this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_lsgd.png",cc.size(347,52));
                this.onClickTab(1,2);
            }
        },

        createTabView: function () {
            var arrTitleTab = ["tx_info_s", "tx_bm_s", "tx_lsgd_s"];
            this._pTab = new TabViewFrame(this, cc.size(1072, 58), arrTitleTab, 1);
            this._pTab.setAnchorPoint(0.5, 0.5);
            this._pTab.setPosition(cc.p(639, 584));
            this.addChild(this._pTab);
        },

        onClickTab: function (tabIndex, index) {
            this.RemoveChildInTab();
            if (index == 0) {
                this.gotoHoSo();
            } else if (index == 1) {
                cc.log("2");
                this.gotoSercurity();
            } else if (index == 2) {
                cc.log("3");
                this.gotoHistoryTranfer();
            }
        },

        gotoHoSo : function(){
            if(this.hscn == null){
                this.hscn = new HoSoCaNhan(this);
                this.addChild(this.hscn);
                GuiUtility.changeImage(this.title, res_TableGui + "tt_hscn.png");
            }
        },

        gotoSercurity : function(){
            if(this.bmtk == null){
                this.bmtk = new Sercurity(this);
                this.addChild(this.bmtk);
                GuiUtility.changeImage(this.title, res_TableGui + "tt_bmtk.png");
            }
        },

        gotoHistoryTranfer : function(){
            if(this.lsgd == null){
                this.lsgd = new HistoryTranfer(this);
                this.addChild(this.lsgd);
                GuiUtility.changeImage(this.title, res_TableGui + "tt_lsgd.png");
            }
        },

        RemoveChildInTab : function(){
            if(this.hscn != null){
                this.hscn.removeAllChildren();
                this.hscn.removeFromParent(true);
                this.hscn = null;
            }
            if(this.bmtk != null){
                this.bmtk.removeAllChildren();
                this.bmtk.removeFromParent(true);
                this.bmtk = null;
            }
            if(this.lsgd != null){
                this.lsgd.removeAllChildren();
                this.lsgd.removeFromParent(true);
                this.lsgd = null;
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



