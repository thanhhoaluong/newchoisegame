

var BaoMatLogin = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("BaoMatLogin");
            this.createLayout(this,"pn_bmdangnhap",cc.p(640,360),null,cc.size(1280,720),false);
            this.createText(this.pn_bmdangnhap, "lb_1", cc.p(640, 440), "Sử dụng chức năng này, khi đăng nhập bạn phải nhập thêm mã OTP xác nhận.", fontTahoma.fontName, 21);
            this.createText(this.pn_bmdangnhap, "lb_2", cc.p(640, 400), "Số dư tài khoản lớn hơn số " + DON_VI_TIEN_THAT + " tối thiểu và số "+DON_VI_TIEN_THAT+" tối thiểu" +
                " phải lớn hơn 0 thì chức năng mới hoạt động.", fontTahoma.fontName, 21);

            this.createImage(this.pn_bmdangnhap, "sp_min_zo", cc.p(640,340), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_bmdangnhap,"ed_min_zo",cc.p(640,340),"","Số "+ DON_VI_TIEN_THAT +" tối thiểu",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,11);
            this.ed_min_zo.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_min_zo.setFontColor(cc.color.BLACK);

            this.createText(this.pn_bmdangnhap, "lb_3", cc.p(640, 280), "Số " + DON_VI_TIEN_THAT + " tối thiểu đang là: ", fontTahoma.fontName, 21);
            this.lb_3.setAnchorPoint(cc.p(1,0.5));

            this.createText(this.pn_bmdangnhap, "lb_4", cc.p(640, 280), " " + formatMoney(0,3,userInfo.Info.minZoLogin), fontTahoma.fontName, 21);
            this.lb_4.ignoreContentAdaptWithSize(false);
            this.lb_4.setAnchorPoint(cc.p(0,0.5));
            this.lb_4.setColor(color_zo);

            this.createImage(this.pn_bmdangnhap, "sp_captcha_bmdn", cc.p(574,210), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_bmdangnhap,"ed_captcha_bmdn",cc.p(574,210),"","Mã xác thực",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_bmdn.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_bmdn.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_min_zo.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_captcha_bmdn.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_min_zo.nextTabFocus = this.ed_captcha_bmdn;
                this.ed_captcha_bmdn.nextTabFocus = this.ed_min_zo;
            }

            this.createButton(this.pn_bmdangnhap,"bt_refresh",BaoMatLogin.BTN_REFRESH,cc.p(830,210),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_bmdangnhap,"bt_tieptuc_bmdn",BaoMatLogin.BTN_TIEPTUC_BMDN,cc.p(640,130),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_tieptuc_bmdn.setTitleText("ÁP DỤNG");
            this.bt_tieptuc_bmdn.setTitleFontName(fontTahomaB.fontName);
            this.bt_tieptuc_bmdn.setTitleFontSize(25);
        },

        onEnter: function(){
            this._super();

        },
    }
)

BaoMatLogin.BTN_REFRESH = 1;
BaoMatLogin.BTN_TIEPTUC_BMDN = 2;

