

var hallscene = null;

var HallScene = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.pn_button_setting = null;
            return true;
        },
        customizeGUI: function () {
            cc.log("hallscene");
            this.createLayout(this,"top_menu",cc.p(640,685),null,cc.size(1280,85),false);

            var posy = this.top_menu.height/2;

            this.createButton(this.top_menu,"bt_sign_out",HallScene.BTN_SIGN_OUT,cc.p(107,posy),true,res_MenuSetting + "signout.png",res_MenuSetting + "signout.png",ccui.Widget.PLIST_TEXTURE);
            this.createImage(this.top_menu, "bg_player", cc.p(280, posy), res_MenuSetting + "Top/bg_profile.png", cc.size(207, 56));
            this.createText(this.top_menu, "lb_nickname", cc.p(305, posy), "dell salah", fontTahoma.fontName, 20);
            this.lb_nickname.ignoreContentAdaptWithSize(false);
            this.lb_nickname.setContentSize(cc.size(150, 30));
            this.lb_nickname.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_nickname.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            //this.createButton(this.top_menu,"bt_avatar",HallScene.BTN_PLAYER_INFO,cc.p(185, posy + 2),true,res_MenuSetting + "sp_avatar.png",res_MenuSetting + "sp_avatar.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.top_menu,"bt_avatar",HallScene.BTN_PLAYER_INFO,cc.p(185, posy + 2),true,res_Avatar + userInfo.Info.avatar +".png",res_MenuSetting + "sp_avatar.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_avatar.setPressedActionEnabled(false);

            this.createImage(this.top_menu, "bg_money_zo", cc.p(545, posy), res_MenuSetting + "Top/bg_coin.png", cc.size(246, 57));
            this.createImage(this.top_menu, "bg_money_xu", cc.p(817, posy), res_MenuSetting + "Top/bg_xu.png", cc.size(245, 57));

            this.createText(this.top_menu, "lb_money_zo", cc.p(545, posy), formatMoney(0,3,userInfo.Info.zoMoney), fontTahoma.fontName, 20);
            this.lb_money_zo.ignoreContentAdaptWithSize(false);
            this.lb_money_zo.setContentSize(cc.size(160, 30));
            this.lb_money_zo.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_money_zo.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.lb_money_zo.setColor(color_zo);


            this.createText(this.top_menu, "lb_money_xu", cc.p(817, posy), formatMoney(0,3,userInfo.Info.xuMoney), fontTahoma.fontName, 20);
            this.lb_money_xu.ignoreContentAdaptWithSize(false);
            this.lb_money_xu.setContentSize(cc.size(160, 30));
            this.lb_money_xu.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_money_xu.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.lb_money_xu.setColor(color_xu);

            this.createButton(this.top_menu,"bt_gift",HallScene.BTN_GIFT,cc.p(993,posy),true,res_MenuSetting + "btn_gift.png",res_MenuSetting + "btn_gift.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.top_menu,"bt_spin",HallScene.BTN_SPIN,cc.p(1077,posy),true,res_MenuSetting + "spin.png",res_MenuSetting + "spin.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.top_menu,"bt_setting",HallScene.BTN_SETTING,cc.p(1162,posy),true,res_MenuSetting + "btn_menu.png",res_MenuSetting + "btn_menu.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.top_menu,"bt_add_zo",HallScene.BTN_ADD_ZO,cc.p(645,posy + 1),true,res_MenuSetting + "btn_add.png",res_MenuSetting + "btn_add.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.top_menu,"bt_add_xu",HallScene.BTN_ADD_XU,cc.p(917,posy + 1),true,res_MenuSetting + "btn_add.png",res_MenuSetting + "btn_add.png",ccui.Widget.PLIST_TEXTURE);


        },

        onEnter: function(){
            this._super();

        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case HallScene.BTN_SIGN_OUT:
                    showAlam(1, "Bạn muốn thoát khỏi game!", hallscene.destroyHallScene);
                    break;
                case HallScene.BTN_PLAYER_INFO:
                    addPlayerInfo();
                    break;
                case HallScene.BTN_SETTING:
                    this.addButtonSetting();
                    break;
            }
        },

        addButtonSetting : function(){
            if(this.pn_button_setting == null){
                this.pn_button_setting = new SMSPlus(this);
                this.addChild(this.pn_button_setting);
            }
        },

        destroyHallScene : function(){
            hallscene.removeFromParent(true);
            hallscene = null;
            loginscene.SignIn.setVisible(true);
            userInfo._isSignIned = false;
            loginscene.changeBottomWhenSignIn();
        }
    }
)

HallScene.BTN_SIGN_OUT = 1;
HallScene.BTN_GIFT = 2;
HallScene.BTN_SPIN = 3;
HallScene.BTN_SETTING = 4;
HallScene.BTN_ADD_ZO = 5;
HallScene.BTN_ADD_XU = 6;
HallScene.BTN_PLAYER_INFO = 7;

intoHallScene = function () {
    if (hallscene === null) {}
    else{
        hallscene.removeFromParent(true);
        hallscene = null;
    }
    hallscene = new HallScene();
    var curScene = SceneMgr.getInstance().getRunningScene();
    curScene.addGUI(hallscene, BaseScene.INDEX_GAME_GUI, 0);
};

