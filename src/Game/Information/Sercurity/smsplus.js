
var SMSPlus = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("SMSPlus");
            this.createLayout(this,"pn_smsplus",cc.p(640,360),null,cc.size(1280,720),false);
            this.createText(this.pn_smsplus, "lb_1", cc.p(640, 440), "THAY ĐỔI SỐ ĐIỆN THOẠI BẢO MẬT", fontTahoma.fontName, 25);
            this.lb_1.setColor(color_zo);

            this.createText(this.pn_smsplus, "lb_2", cc.p(640, 400), "Tên nhân vật: " + userInfo.Info.nickname, fontTahoma.fontName, 21);
            this.createText(this.pn_smsplus, "lb_3", cc.p(640, 370), "Số điện thoại: " + MahoaNoiDung(userInfo.Info.mobile), fontTahoma.fontName, 21);

            this.createImage(this.pn_smsplus, "sp_new_mobile", cc.p(640,310), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_smsplus,"ed_new_mobile",cc.p(640,310),"","Số điện thoại mới",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,11);
            this.ed_new_mobile.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_new_mobile.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_smsplus, "sp_captcha_sms", cc.p(574,240), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_smsplus,"ed_captcha_sms",cc.p(574,240),"","Mã xác thực",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_sms.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_sms.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_new_mobile.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_captcha_sms.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_new_mobile.nextTabFocus = this.ed_captcha_sms;
                this.ed_captcha_sms.nextTabFocus = this.ed_new_mobile;
            }

            this.createButton(this.pn_smsplus,"bt_refresh",SMSPlus.BTN_REFRESH,cc.p(830,240),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);

            this.createButton(this.pn_smsplus,"bt_change_mobile",SMSPlus.BTN_CHANGE_MOBILE,cc.p(640,150),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_change_mobile.setTitleText("THAY ĐỔI");
            this.bt_change_mobile.setTitleFontName(fontTahomaB.fontName);
            this.bt_change_mobile.setTitleFontSize(25);

        },

        onEnter: function(){
            this._super();

        },
    }
)
SMSPlus.BTN_REFRESH = 1;
SMSPlus.BTN_CHANGE_MOBILE = 2;
