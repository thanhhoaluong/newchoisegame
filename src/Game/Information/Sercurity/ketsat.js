
var KeyBoxSercurity = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.type_ketsat = 0; // dong bang
            return true;
        },
        customizeGUI: function () {
            cc.log("KeyBoxSercurity");
            this.createLayout(this,"pn_ketsat",cc.p(640,360),null,cc.size(1280,720),false);
            this.createText(this.pn_ketsat, "lb_1", cc.p(550, 440), "Số " + DON_VI_TIEN_THAT + " khả dụng: ", fontTahoma.fontName, 21);
            this.lb_1.ignoreContentAdaptWithSize(false);
            this.lb_1.setContentSize(cc.size(250, 26));
            this.lb_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.pn_ketsat, "lb_2", cc.p(550, 400), "Số " + DON_VI_TIEN_THAT + " đóng băng: ", fontTahoma.fontName, 21);
            this.lb_2.ignoreContentAdaptWithSize(false);
            this.lb_2.setContentSize(cc.size(250, 26));
            this.lb_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.pn_ketsat, "lb_3", cc.p(700, 440), formatMoney(0,3,userInfo.Info.zoMoney), fontTahoma.fontName, 21);
            this.lb_3.ignoreContentAdaptWithSize(false);
            this.lb_3.setContentSize(cc.size(250, 26));
            this.lb_3.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_3.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT);
            this.lb_3.setColor(color_zo);

            this.createText(this.pn_ketsat, "lb_4", cc.p(700, 400), formatMoney(0,3,userInfo.Info.zoInBox), fontTahoma.fontName, 21);
            this.lb_4.ignoreContentAdaptWithSize(false);
            this.lb_4.setContentSize(cc.size(250, 26));
            this.lb_4.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_4.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT);
            this.lb_4.setColor(color_zo);

            this.createText(this.pn_ketsat, "lb_5", cc.p(420, 340), "Chọn thao tác: ", fontTahoma.fontName, 21);
            this.createCheckBox(this.pn_ketsat, "ckb_dong_bang", cc.p(510, 340), true, res_SignUp + "/ck.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png");
            this.createText(this.pn_ketsat, "lb_6", cc.p(600, 340), "Đóng băng " + DON_VI_TIEN_THAT, fontTahoma.fontName, 21);
            this.createCheckBox(this.pn_ketsat, "ckb_mo_bang", cc.p(720, 340), true, res_SignUp + "/ck.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png");
            this.createText(this.pn_ketsat, "lb_7", cc.p(830, 340), "Mở đóng băng " + DON_VI_TIEN_THAT, fontTahoma.fontName, 21);

            this.ckb_mo_bang.setSelected(false);

            this.createImage(this.pn_ketsat, "sp_captcha_ketsat", cc.p(574,270), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_ketsat,"ed_captcha_ketsat",cc.p(574,270),"","Mã xác thực",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_ketsat.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_ketsat.setFontColor(cc.color.BLACK);
            if (!cc.sys.isNative) {
                this.ed_captcha_ketsat.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
            }
            this.createButton(this.pn_ketsat,"bt_refresh",KeyBoxSercurity.BTN_REFRESH,cc.p(830,270),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_ketsat,"bt_tieptuc_ketsat",KeyBoxSercurity.BTN_TIEPTUC_BMDN,cc.p(640,130),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_tieptuc_ketsat.setTitleText("THỰC HIỆN");
            this.bt_tieptuc_ketsat.setTitleFontName(fontTahomaB.fontName);
            this.bt_tieptuc_ketsat.setTitleFontSize(25);

            this.ckb_dong_bang.addEventListener(this.DongBang.bind(this));
            this.ckb_mo_bang.addEventListener(this.MoDongBang.bind(this));
        },
        DongBang: function (sender, eventType) {
            if (eventType == ccui.CheckBox.EVENT_SELECTED) {
                this.ckb_mo_bang.setSelected(false);
                this.type_ketsat = 0;
            } else if (eventType == ccui.CheckBox.EVENT_UNSELECTED) {
                this.ckb_mo_bang.setSelected(true);
                this.type_ketsat = 1;
            }
        },

        MoDongBang: function (sender, eventType) {
            if (eventType == ccui.CheckBox.EVENT_SELECTED) {
                this.ckb_dong_bang.setSelected(false);
                this.type_ketsat = 1;
            } else if (eventType == ccui.CheckBox.EVENT_UNSELECTED) {
                this.ckb_dong_bang.setSelected(true);
                this.type_ketsat = 0;
            }
        },

        onEnter: function(){
            this._super();

        },
    }
)

KeyBoxSercurity.BTN_REFRESH = 1;
KeyBoxSercurity.BTN_TIEPTUC_BMDN = 2;
