var LayoutSetting = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("LayoutSetting");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);
            this.shadow.setTag(LayoutSetting.CLOSE);
            this.shadow.addTouchEventListener(this.onTouchEventHandler,this);

            this.createLayout(this,"layout_setting",cc.p(640,370),null,cc.size(1280,720),false);
            this.createLayout(this.layout_setting,"dont_touch",cc.p(1080, 645),null,cc.size(230, 357),true);
            this.dont_touch.setAnchorPoint(cc.p(0.5,1));
            this.createImage(this.layout_setting, "bg_layout_setting", cc.p(1080, 645), res_MenuSetting + "tab_setting.png", cc.size(230, 357));
            this.bg_layout_setting.setAnchorPoint(cc.p(0.5,1));

            this.createListView(this.layout_setting, "list_bt_setting", cc.p(1070, 465), cc.size(207,325));
            this.list_bt_setting.setTouchEnabled(false);
            this.list_bt_setting.setBounceEnabled(true);
            this.list_bt_setting.setClippingEnabled(true);
            this.list_bt_setting.setDirection(ccui.ScrollView.DIR_VERTICAL);
            this.pushButtonSettingToList();
        },

        onTouchEventHandler: function(sender,type){
            switch (type){
                case ccui.Widget.TOUCH_BEGAN:
                    this.onButtonTouched(sender,sender.getTag());
                    break;
                case ccui.Widget.TOUCH_ENDED:
                    this.onButtonRelease(sender,sender.getTag());
                    break;
            }
        },

        pushButtonSettingToList : function(){
            for(var i = 0; i < LayoutSetting.arrButotnSetting.length; i ++){
                var bt_setting = new ccui.Layout();
                bt_setting.height = 56;
                bt_setting.width = this.list_bt_setting.width;

                this.createButton(bt_setting,LayoutSetting.arrButotnSetting[i].name,LayoutSetting.arrButotnSetting[i].tag,cc.p(bt_setting.width/2,bt_setting.height/2),true,
                    LayoutSetting.arrButotnSetting[i].res,LayoutSetting.arrButotnSetting[i].res,ccui.Widget.PLIST_TEXTURE);
                this[LayoutSetting.arrButotnSetting[i].name].setPressedActionEnabled(false);
                this[LayoutSetting.arrButotnSetting[i].name].setTag(LayoutSetting.arrButotnSetting[i].tag);

                if(i != (LayoutSetting.arrButotnSetting.length - 1)){
                    this.createImage(bt_setting, "line_st", cc.p(bt_setting.width/2, 2), res_MenuSetting + "line_set.png", cc.size(220, 2));
                }

                bt_setting.setScaleY(0);
                bt_setting.runAction(cc.sequence(cc.delayTime(i*0.08), cc.scaleTo(0.08,1,1.02), cc.scaleTo(0.04,1,1)));

                this.list_bt_setting.pushBackCustomItem(bt_setting);
            }
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case LayoutSetting.SHOP:
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.SOUND:
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.SERCURITY:
                    addPlayerInfo("bmtk");
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.HISTORY:
                    addPlayerInfo("lsgd");
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.CHANGEPASS:
                    addPlayerInfo("hscn");
                    playerInfo.hscn.addChangePassword()
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.SIGNOUT:
                    showAlam(1, "Bạn muốn thoát khỏi game!", hallscene.destroyHallScene);
                    this.destroyLayoutSetting();
                    break;
                case LayoutSetting.CLOSE:
                    this.destroyLayoutSetting();
                    break;
            }
        },

        destroyLayoutSetting : function(){
            for(var i = 0; i < LayoutSetting.arrButotnSetting.length; i ++){
                if(i !=(LayoutSetting.arrButotnSetting.length -1))
                    this[LayoutSetting.arrButotnSetting[i].name].runAction(cc.sequence(cc.delayTime(i*0.07), cc.scaleTo(0.05,1,0)));
                else
                    this[LayoutSetting.arrButotnSetting[i].name].runAction(cc.sequence(cc.delayTime(i*0.07), cc.scaleTo(0.05,1,0), cc.callFunc(function(){
                        hallscene.pn_button_setting.removeAllChildren(true);
                        hallscene.pn_button_setting = null;
                    })));
            }
        },

        onEnter: function(){
            this._super();

        },
    }
)
LayoutSetting.SHOP = 1;
LayoutSetting.SOUND = 2;
LayoutSetting.SERCURITY = 3;
LayoutSetting.HISTORY = 4;
LayoutSetting.CHANGEPASS = 5;
LayoutSetting.SIGNOUT = 6;
LayoutSetting.CLOSE = 7;

LayoutSetting.arrButotnSetting = [
    {
        name : "bt_shop",
        tag : LayoutSetting.SHOP,
        res : res_MenuSetting + "set_shop.png",
    },
    {
        name : "bt_sound",
        tag : LayoutSetting.SOUND,
        res : res_MenuSetting + "set_sound_on.png",
    },
    {
        name : "bt_sercurity",
        tag : LayoutSetting.SERCURITY,
        res : res_MenuSetting + "set_sercurity.png",
    },
    {
        name : "bt_history",
        tag : LayoutSetting.HISTORY,
        res : res_MenuSetting + "set_history.png",
    },
    {
        name : "bt_changepass",
        tag : LayoutSetting.CHANGEPASS,
        res : res_MenuSetting + "set_changepass.png",
    },
    {
        name : "bt_signout",
        tag : LayoutSetting.SIGNOUT,
        res : res_MenuSetting + "set_signout.png",
    },

]

