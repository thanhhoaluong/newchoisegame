var payment = null;

var Payment = LayerTableFrame.extend(
    {
        _gotoTab:null,
        ctor: function (gototab) {
            this._super("payment");
            this._gotoTab = gototab;
            this.addmoney = null;
            this.cashmoney = null;
            this.tranfer = null;
            this.title = null;
            return true;
        },
        customizeGUI: function () {
            this.createTabView();

            if(this._gotoTab == "addmoney"){
                this.onClickTab(1,0);
            }
            else if (this._gotoTab == "cashmoney"){
                this.onClickTab(1,1);
            }
            else{
                this.onClickTab(1,2);
            }
            this.createImage(this,"title",cc.p(640,640),res_TableGui + "tt_payment.png",cc.size(347,52));
        },

        createTabView: function () {
            var arrTitleTab = ["tx_nap", "tx_doithuong", "tx_chuyenkhoan"];
            this._pTab = new TabViewFrame(this, cc.size(1072, 58), arrTitleTab, 1);
            this._pTab.setAnchorPoint(0.5, 0.5);
            this._pTab.setPosition(cc.p(639, 584));
            this.addChild(this._pTab);
        },

        onClickTab: function (tabIndex, index) {
            this.RemoveChildInTab();
            if (index == 0) {
                this.gotoAddMoney();
            } else if (index == 1) {
                cc.log("2");
                this.gotoCashMoney();
            } else if (index == 2) {
                cc.log("3");
                this.gotoTranferMoney();
            }
        },

        gotoAddMoney : function(){
            if(this.addmoney == null){
                this.addmoney = new AddMoney(this);
                this.addChild(this.addmoney);
            }
        },

        gotoCashMoney : function(){
            if(this.cashmoney == null){
                this.cashmoney = new CashMoney(this);
                this.addChild(this.cashmoney);
            }
        },

        gotoTranferMoney : function(){
            if(this.tranfer == null){
                this.tranfer = new TranferMoney(this);
                this.addChild(this.tranfer);
            }
        },

        RemoveChildInTab : function(){
            if(this.addmoney != null){
                this.addmoney.removeAllChildren();
                this.addmoney.removeFromParent(true);
                this.addmoney = null;
            }
            if(this.cashmoney != null){
                this.cashmoney.removeAllChildren();
                this.cashmoney.removeFromParent(true);
                this.cashmoney = null;
            }
            if(this.tranfer != null){
                this.tranfer.removeAllChildren();
                this.tranfer.removeFromParent(true);
                this.tranfer = null;
            }
        },
    }
);



addPayment = function (target) {
    if(payment) {
        payment.removeAllChildren();
        payment.removeFromParent(true);
        payment = null;
    }
    payment = new Payment(target);
    var curScene = SceneMgr.getInstance().getRunningScene();
    curScene.addGUI(payment, BaseScene.INDEX_HALL_GUI, 1);
};



