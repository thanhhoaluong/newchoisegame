

//var sercurity = null;

var Sercurity = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.smsplus = null;
            this.baomatdangnhap = null;
            this.ketsat = null;
            return true;
        },
        customizeGUI: function () {
            cc.log("Sercurity");
            this.createLayout(this,"Sercurity",cc.p(640,370),null,cc.size(1280,720),false);
            if(userInfo.Info.sercurity == 1){ // chua bao mat
                this.createText(this.Sercurity, "lb_1", cc.p(640, 360), "Vui lòng cập nhật thông tin và bảo mật cho tài khoản của bạn để nhận được\n" +
                    "hỗ trợ tốt nhất từ nhà phát hành!", fontTahoma.fontName, 21);
                this.lb_1.ignoreContentAdaptWithSize(false);
                this.lb_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
                this.lb_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            }else{
                this.createTabView();
                this.gotoSmsPlus();
            }
        },

        createTabView: function () {
            var arrTitleTab = ["SMS PLUS", "BẢO MẬT ĐĂNG NHẬP", "KÉT AN TOÀN"];
            this._pTab = new OtherTabViewFrame(this, cc.size(1072, 58), arrTitleTab, 1);
            this._pTab.setAnchorPoint(0.5, 0.5);
            this._pTab.setPosition(cc.p(639, 527));
            this.addChild(this._pTab);
        },

        onClickTabOtherFrame : function(tabIndex, index){
            this.removeAllChildSercurity();
            if (index == 0) {
                this.gotoSmsPlus();
            } else if (index == 1) {
                cc.log("2");
                this.gotoBMDN();
            } else if (index == 2) {
                cc.log("3");
                this.gotoKetSat();
            }
        },

        gotoSmsPlus : function(){
            if(this.smsplus == null){
                this.smsplus = new SMSPlus(this);
                this.Sercurity.addChild(this.smsplus);
            }
        },

        gotoBMDN : function(){
            if(this.baomatdangnhap == null){
                this.baomatdangnhap = new BaoMatLogin(this);
                this.Sercurity.addChild(this.baomatdangnhap);
            }
        },

        gotoKetSat : function(){
            if(this.ketsat == null){
                this.ketsat = new KeyBoxSercurity(this);
                this.Sercurity.addChild(this.ketsat);
            }
        },

        removeAllChildSercurity : function(){
            this.Sercurity.removeAllChildren();
            if(this.smsplus != null){
                this.smsplus.removeAllChildren();
                this.smsplus.removeFromParent(true);
                this.smsplus = null;
            }
            if(this.baomatdangnhap != null){
                this.baomatdangnhap.removeAllChildren();
                this.baomatdangnhap.removeFromParent(true);
                this.baomatdangnhap = null;
            }
            if(this.ketsat != null){
                this.ketsat.removeAllChildren();
                this.ketsat.removeFromParent(true);
                this.ketsat = null;
            }
        },

        onEnter: function(){
            this._super();

        },
    }
)

