

var loginscene = null;

var LoginScene = BaseLayer.extend(
    {
        ctor: function () {
            this.signUp = null;
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("customizeGUI");
            this.createLogin();
            this.createBottom();
        },

        createLogin : function(){
            this.createLayout(this,"SignIn",cc.p(640,370),null,cc.size(1280,720),false);
            this.createButton(this.SignIn,"bt_signin",LoginScene.BTN_REGISTER,cc.p(244,678),true,res_login_scene + "btn_reg.png",res_login_scene + "btn_reg.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.SignIn,"bt_signin",LoginScene.BTN_SIGN_IN,cc.p(405,678),true,res_login_scene + "btn_login.png",res_login_scene + "btn_login.png",ccui.Widget.PLIST_TEXTURE);

            this.createImage(this.SignIn, "sp_user_sign", cc.p(590,678), res_login_scene + "bg_username.png", cc.size(184, 41));
            this.createImage(this.SignIn, "sp_pass_sign", cc.p(810, 678), res_login_scene + "bg_pass.png", cc.size(184, 41));
            this.createEditBox(this.SignIn,"ed_username_sign",cc.p(590,678),"","Tên tài khoản",fontArial.fontName,18,cc.size(174,41),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.createEditBox(this.SignIn,"ed_pass_sign",cc.p(810,678),"","Mật khẩu",fontArial.fontName,18,cc.size(174,41),null,cc.TEXT_ALIGNMENT_CENTER,16);

            if (!cc.sys.isNative) {
                this.ed_username_sign.setTextAlign(cc.TEXT_ALIGNMENT_CENTER);
                this.ed_pass_sign.setTextAlign(cc.TEXT_ALIGNMENT_CENTER);

                this.ed_username_sign.nextTabFocus = this.ed_pass_sign;
                this.ed_pass_sign.nextTabFocus = this.ed_username_sign;
            }

            this.createButton(this.SignIn,"bt_sign_fb",LoginScene.BTN_SIGN_IN_FB,cc.p(942,678),true,res_login_scene + "lg_fb.png",res_login_scene + "lg_fb.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.SignIn,"bt_sign_gg",LoginScene.BTN_SIGN_IN_GG,cc.p(1005,678),true,res_login_scene + "lg_gg.png",res_login_scene + "lg_gg.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.SignIn,"bt_for_pass",LoginScene.BTN_FOR_PASS,cc.p(1126,678),true,res_login_scene + "btn_get_pass.png",res_login_scene + "btn_get_pass.png",ccui.Widget.PLIST_TEXTURE);

        },

        createBottom : function(){
            this.createLayout(this,"bottom",cc.p(640,370),null,cc.size(1280,720),false);
            this.createButton(this.bottom,"bt_news",LoginScene.BTN_NEWS,cc.p(249,25),true,res_MenuSetting + "mn_new.png",res_MenuSetting + "mn_new.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_ios",LoginScene.BTN_IOS,cc.p(416,25),true,res_MenuSetting + "mn_ios.png",res_MenuSetting + "mn_ios.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_android",LoginScene.BTN_APK,cc.p(580,25),true,res_MenuSetting + "mn_apk.png",res_MenuSetting + "mn_apk.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_fanpage",LoginScene.BTN_FANPAGE,cc.p(753,25),true,res_MenuSetting + "mn_fanpage.png",res_MenuSetting + "mn_fanpage.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_payment",LoginScene.BTN_PAYMENT,cc.p(968,45),true,res_MenuSetting + "mn_shop.png",res_MenuSetting + "mn_shop.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_email",LoginScene.BTN_EMAIL,cc.p(376,45),true,res_MenuSetting + "btn_mail.png",res_MenuSetting + "btn_mail.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_email.setVisible(false);
        },

        onEnter: function(){
            this._super();

            //cc.log(formatMoneyK(1000000));
            //cc.log(formatMoneyK(123456789));
            //this.runAction(cc.sequence(cc.delayTime(0.1),cc.callFunc(function(){
            //    openPopUp();
            //}.bind(this))));

        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case LoginScene.BTN_REGISTER:
                    this.addRegisterScene();
                    break;
                case LoginScene.BTN_SIGN_IN:
                    showAlam(0, "Vui lòng đăng nhập vào hệ thống", null);
                    break;
            }
        },

        addRegisterScene : function(){
            if(this.signUp == null){
                this.signUp = new SignUp(this)
                this.addChild(this.signUp);
            }
        },

        changeBottomWhenSignIn : function (){
            if(userInfo._isSignIned == false){
                this.bt_news.setPosition(cc.p(249,this.bt_news.getPositionY()));
                this.bt_ios.setPosition(cc.p(249,this.bt_ios.getPositionY()));
                this.bt_android.setPosition(cc.p(249,this.bt_android.getPositionY()));
                this.bt_fanpage.setPosition(cc.p(249,this.bt_fanpage.getPositionY()));
                this.bt_payment.setPosition(cc.p(249,this.bt_payment.getPositionY()));
                this.bt_email.setVisible(false);
            }else{
                this.bt_news.setPosition(cc.p(222,this.bt_news.getPositionY()));
                this.bt_ios.setPosition(cc.p(519,this.bt_ios.getPositionY()));
                this.bt_android.setPosition(cc.p(653,this.bt_android.getPositionY()));
                this.bt_fanpage.setPosition(cc.p(798,this.bt_fanpage.getPositionY()));
                this.bt_payment.setPosition(cc.p(1007,this.bt_payment.getPositionY()));
                this.bt_email.setVisible(true);
            }
        },
    }
)


LoginScene.BTN_SIGN_IN = 1;
LoginScene.BTN_REGISTER = 2;
LoginScene.BTN_SIGN_IN_FB = 3;
LoginScene.BTN_SIGN_IN_GG = 4;
LoginScene.BTN_FOR_PASS = 5;
LoginScene.BTN_NEWS = 6;
LoginScene.BTN_IOS = 7;
LoginScene.BTN_APK = 8;
LoginScene.BTN_FANPAGE = 9;
LoginScene.BTN_PAYMENT = 10;
LoginScene.BTN_EMAIL = 11;

