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
            this.ShowAlert.stopAllActions();
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

ShowAlert.CLOSE = 1;
ShowAlert.BTN_OK = 2;
ShowAlert.BTN_CANCEL = 3;

