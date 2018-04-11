var alam = null;
var ShowAlert = BaseLayer.extend(
    {
        ctor: function () {
            this.callbackOK = null;
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

            this.createImage(this.ShowAlert, "bg_alert", cc.p(640, 388), res_SignUp + "bg_signUp.png", cc.size(801, 534));
            this.createImage(this.ShowAlert, "txl_alert", cc.p(742, 579), res_login_scene + "tle_alert.png", cc.size(207, 43));
            this.createButton(this.ShowAlert,"bt_close",ShowAlert.CLOSE,cc.p(1000,579),true,res_SignUp + "b_close.png",res_SignUp + "b_close.png",ccui.Widget.PLIST_TEXTURE);

            this.createText(this.ShowAlert, "lb_content", cc.p(764, 400), "", fontTahoma.fontName, 20);
            this.lb_content.ignoreContentAdaptWithSize(false);
            this.lb_content.setContentSize(cc.size(400, 250));
            this.lb_content.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_content.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createButton(this.ShowAlert,"bt_ok",ShowAlert.BTN_OK,cc.p(893,171),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.createText(this.bt_ok, "lb_ok", cc.p(this.bt_ok.width/2, this.bt_ok.height/2), "ĐỒNG Ý", fontTahomaB.fontName, 25);

            this.createButton(this.ShowAlert,"bt_cancel",ShowAlert.BTN_CANCEL,cc.p(620,171),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.createText(this.bt_cancel, "lb_cancel", cc.p(this.bt_cancel.width/2, this.bt_cancel.height/2), "THOÁT", fontTahomaB.fontName, 25);

            this.bt_ok.setScaleX(0.7);
            this.bt_cancel.setScaleX(0.7);
            this.bt_ok.setVisible(false);
            this.bt_cancel.setVisible(false);

            this.ShowAlert.setScale(0);
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

            }
        },

        destroyAlam : function(){
            this.ShowAlert.runAction((cc.sequence(cc.scaleTo(0.1, 1.1), cc.delayTime(0.1), cc.scaleTo(0.15,0), cc.callFunc(function(){
                showalam.setVisible(false);
            }))));
        },

        designAlam : function(kind, content, callbackOK){
            this.lb_content.setString(content);
            if(kind == 1){
                this.callbackOK = callbackOK;
                this.bt_ok.setVisible(true);
                this.bt_cancel.setVisible(true);
                this.bt_close.setVisible(false);
            }else{
                this.bt_ok.setVisible(false);
                this.bt_cancel.setVisible(false);
                this.bt_close.setVisible(true);
            }
            this.showBackground();
        },

        showBackground : function(){
            this.setVisible(true);
            this.ShowAlert.runAction((cc.sequence(cc.scaleTo(0.05, 1.1), cc.delayTime(0.1), cc.scaleTo(0.1,1))));
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

ShowAlert.CLOSE = 1;
ShowAlert.BTN_OK = 2;
ShowAlert.BTN_CANCEL = 3;

