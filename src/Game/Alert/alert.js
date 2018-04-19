var alam = null;
var ShowAlert = BaseLayer.extend(
    {
        ctor: function () {
            this.callbackOK = null;
            this._kind = null;
            this._super();

            return true;
        },
        customizeGUI: function () {
            //cc.log("ShowAlert");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);
            this.createLayout(this,"ShowAlert",cc.p(640,370),null,cc.size(1280,720),false);

            this.createImage(this.ShowAlert, "bg_alert", cc.p(640, 396), res_TableGui + "bg_alert.png", cc.size(543, 230));
            this.createImage(this.ShowAlert, "txl_alert", cc.p(640, 474), res_login_scene + "tle_alert.png", cc.size(207, 43));
            this.createButton(this.ShowAlert,"bt_close",ShowAlert.CLOSE,cc.p(876,471),true,res_SignUp + "b_close.png",res_SignUp + "b_close.png",ccui.Widget.PLIST_TEXTURE);

            this.createText(this.ShowAlert, "lb_content", cc.p(640, 396), "", fontTahoma.fontName, 20);
            this.lb_content.ignoreContentAdaptWithSize(false);
            this.lb_content.setContentSize(cc.size(500, 75));
            this.lb_content.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_content.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createButton(this.ShowAlert,"bt_ok",ShowAlert.BTN_OK,cc.p(542,333),true,res_TableGui + "bt_ok.png",res_TableGui + "bt_ok.png",ccui.Widget.PLIST_TEXTURE);

            this.createButton(this.ShowAlert,"bt_cancel",ShowAlert.BTN_CANCEL,cc.p(754,333),true,res_TableGui + "bt_cancel.png",res_TableGui + "bt_cancel.png",ccui.Widget.PLIST_TEXTURE);

            this.bt_ok.setVisible(false);
            this.bt_cancel.setVisible(false);

            this.createLayout(this.ShowAlert,"pn_check_captcha",cc.p(640,360),null,cc.size(1280,720),false);
            this.createImage(this.pn_check_captcha, "sp_captcha_check", cc.p(490,333), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_check_captcha,"ed_captcha_check",cc.p(490,333),"","Nhập mã",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_check.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_check.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_captcha_check.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
            }

            this.createButton(this.pn_check_captcha,"bt_refresh",ShowAlert.BTN_REFRESH,cc.p(750,333),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_check_captcha,"bt_send_captcha",ShowAlert.BTN_SEND_CAPTCHA,cc.p(835,333),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.createText(this.pn_check_captcha, "lb_send_captcha", cc.p(830,333), "GỬI", fontTahomaB.fontName, 25);
            this.bt_send_captcha.setScaleX(0.37)

            this.ShowAlert.setScale(0);
            this.pn_check_captcha.setVisible(false);
            this.setVisible(false);
        },

        onEnter: function(){
            this._super();

        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case ShowAlert.CLOSE:
                    this.destroyAlam();
                    break;
                case ShowAlert.BTN_OK:
                    this.callbackOK();
                    this.destroyAlam();
                    break;
                case ShowAlert.BTN_CANCEL:
                    this.destroyAlam();
                    break;
                case ShowAlert.BTN_REFRESH:
                    break;
                case ShowAlert.BTN_SEND_CAPTCHA:
                    this.sendCaptchaCheckOnline();
                    break;

            }
        },

        sendCaptchaCheckOnline : function(){
            var captcha = this.ed_captcha_check.getString();
            if (captcha == "" || captcha == null) {
                showAlam(0,"Mã xác nhận không chính xác!", null);
                return;
            }
            getConection(MODULE_PORTAL);
            var url = CmdgetCaptcha(captcha);
            conectsocket.gameClient.send(url);
        },

        destroyAlam : function(){
            this.ShowAlert.stopAllActions();
            this.ShowAlert.runAction((cc.sequence(cc.scaleTo(0.1, 1.1), cc.delayTime(0.1), cc.scaleTo(0.15,0), cc.callFunc(function(){
                showalam.setVisible(false);
            }))));
            if(captcha_base != null)
                captcha_base.destroySceneCaptcha();
        },

        designAlam : function(kind, content, callbackOK){
            this.lb_content.setString(content);
            this._kind = kind;
            if(kind == 1){
                this.callbackOK = callbackOK;
                this.bt_ok.setVisible(true);
                this.bt_cancel.setVisible(true);
                this.bt_close.setVisible(false);
                this.pn_check_captcha.setVisible(false);
            }else if(kind == 2){
                this.bt_ok.setVisible(false);
                this.bt_cancel.setVisible(false);
                this.bt_close.setVisible(false);
                this.pn_check_captcha.setVisible(true);
                this.addCaptchaAlert();
            }else{
                this.bt_ok.setVisible(false);
                this.bt_cancel.setVisible(false);
                this.bt_close.setVisible(true);
                this.pn_check_captcha.setVisible(false);
            }
            this.showBackground();
        },
        designCaptcha : function(kind, content, captcha){
            this.lb_content.setString(content);
            this._kind = kind;
            this.bt_ok.setVisible(false);
            this.bt_cancel.setVisible(false);
            this.bt_close.setVisible(false);
            this.pn_check_captcha.setVisible(true);
            this.addCaptchaAlert(captcha);
            this.showBackground();
        },


        addCaptchaAlert : function (captcha){
            if(captcha_base == null){
                captcha_base = new Captcha(this, 650, 333, captcha);
                this.pn_check_captcha.addChild(captcha_base);
            }else{
                captcha_base.showCaptcha(captcha, "");
            }
        },

        showBackground : function(){
            this.setVisible(true);
            if(this._kind == 1 || this._kind == 2)
                this.ShowAlert.runAction((cc.sequence(cc.scaleTo(0.12, 1.1), cc.scaleTo(0.12,0.95), cc.scaleTo(0.12,1), cc.delayTime(2.5))));
            else
                this.ShowAlert.runAction((cc.sequence(cc.scaleTo(0.12, 1.1), cc.scaleTo(0.12,0.95), cc.scaleTo(0.12,1), cc.delayTime(2.5), cc.callFunc(this.destroyAlam, this))));
        }
    }
)

showAlam = function (kind, content, callbackOK) {
   if(showalam != null){
       var callback = null;
       if (callbackOK != null && callbackOK != "" && callbackOK != undefined)
            callback = callbackOK;
       showalam.designAlam(kind, content, callback);
   }
};

showCaptcha = function (kind, content, captcha) {
    if(showalam != null){
        showalam.designCaptcha(kind, content, captcha);
    }
};

ShowAlert.CLOSE = 1;
ShowAlert.BTN_OK = 2;
ShowAlert.BTN_CANCEL = 3;
ShowAlert.BTN_REFRESH = 4;
ShowAlert.BTN_SEND_CAPTCHA = 5;

