

var Dialog = BaseLayer.extend({

    ctor: function(){

        this._btnOK = null;
        this._btnCancel = null;
        this._pCenter = null;
        this._pLeft = null;
        this._pRight = null;
        this._lb_message= null;
        this._lb_title= null;
        this._target= null;
        this._callback= null;
        this._enable = true;

        this._super("Dialog");
        this.initWithBinaryFile("Dialog.json");
    },

    initGUI: function(){

        var bg = this.getControl("bg");

        this._btnOK = this.customButton("btnOK",Dialog.BTN_OK,bg);
        this._btnCancel =this.customButton("btnCancel",Dialog.BTN_CANCEL,bg);
        this.customButton("btnQuit",Dialog.BTN_QUIT,bg);

        this._label = new ccui.Text();
        this._label.setAnchorPoint(cc.p(0.5,0.5));
        this._label.setFontName("res/Font/arial.ttf");
        this._label.setFontSize(20);
        this._label.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this._label.setColor(cc.color.WHITE);
        this._label.setString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        this._lb_message = this.getControl("lb_message",bg);
        this._label.setPosition(this._lb_message.getPosition());
        bg.addChild(this._label);
        this._lb_message = this._label;
        this._lb_message.wrapText = 1;
        var thongbaoSprite = cc.Sprite('res/GUI/gui_notify/thongbao.png');
        bg.addChild(thongbaoSprite);
        var bg_size = bg.getSize();
        thongbaoSprite.setPosition(bg_size.width/2,bg_size.height-30);
        this._lb_title = this.getControl("lb_title",bg);
        this._lb_title.setVisible(false);
        var btnQuit = this.getControl("btnQuit");
        btnQuit.setVisible(false);
        //var iconHeart = this.getControl("Image_1");
        //iconHeart.setVisible(false);
        this._pLeft = this._btnOK.getPosition();
        this._pRight = this._btnCancel.getPosition();
        this._pCenter = ccui.Helper.seekWidgetByName(ccui.Helper.seekWidgetByName(this._layout,"bg"),"btnCenter").getPosition();


    },

    onEnter: function(){
        BaseLayer.prototype.onEnter.call(this);

        cc.eventManager.addListener(this._listener,this);

        this._layerColor.setVisible(true);


        var bg = this.getControl("bg");
        this._layerColor.runAction(cc.fadeTo(.25,150));

        this.setShowHideAnimate(bg,true);
    },

    onButtonRelease:function(sender,id){
        if(!this._enable)
            return;

        this._enable = false;
        if(this._callback != null)
            this._callback.call(this._target,id);

        this.onClose();

        this.runAction(cc.sequence(cc.delayTime(.2),cc.removeSelf()));
        SceneMgr.getInstance().dialog = null;
    },

    set: function(title,message,target,selector) {
        this.setMessage(message);
        this._lb_title.setString(title);
        this._target = target;
        this._callback = selector;

        this._btnOK.loadTextures("gui_notify/btn_ok.png","gui_notify/btn_ok.png","");
    },

    setOkCancel: function(message,target,selector) {
        this.setMessage(message);
        this._target = target;
        this._callback = selector;

        this._btnOK.loadTextures("gui_notify/btn_ok.png","gui_notify/btn_ok.png","");
    },

    setOKButton: function() {
        this._btnOK.setVisible(true);
        this._btnOK.setPosition(this._pCenter);
        this._btnCancel.setVisible(false);
        this._btnOK.loadTextures("gui_notify/btn_ok.png","gui_notify/btn_ok.png","");
    },
    setCancelButton: function() {
        this._btnCancel.setVisible(true);
        this._btnCancel.setPosition(this._pCenter);
        this._btnOK.setVisible(false);
        this._btnCancel.loadTextures("gui_notify/btnCancel.png","gui_notify/btnCancel.png","");
    },

    setOKNotify : function (message) {
        this.setMessage(message);

        this._btnOK.setVisible(true);
        this._btnOK.setPosition(this._pCenter);
        this._btnCancel.setVisible(false);

        this._btnOK.loadTextures("gui_notify/btn_ok.png","gui_notify/btn_ok.png","");
    },

    setChangeGold : function (message, target, selector) {
        this.setMessage(message);
        this._target = target;
        this._callback = selector;

        this._btnOK.setVisible(true);
        this._btnOK.setPosition(this._pLeft);
        this._btnCancel.setVisible(true);
        this._btnCancel.setPosition(this._pRight);

        this._btnOK.loadTextures("Dialog/btnGold.png","Dialog/btnGold.png","");
    },

    setAddG : function (message, target, selector) {
        this.setMessage(message);
        this._target = target;
        this._callback = selector;

        this._btnOK.setVisible(true);
        this._btnOK.setPosition(this._pLeft);
        this._btnCancel.setVisible(true);
        this._btnCancel.setPosition(this._pRight);

        this._btnOK.loadTextures("Dialog/btnG.png","Dialog/btnG.png","");
    },

    setMessage : function (message) {
        this.setLabelText(message,this._lb_message);
    },
    
    onBackDetect : function () {
        var ok = this._btnOK.isVisible();
        var cancel = this._btnCancel.isVisible();
        if(ok && cancel)
        {
            this.onButtonRelease(this._btnCancel,Dialog.BTN_CANCEL);
        }
        else if(ok && !cancel)
        {
            this.onButtonRelease(this._btnOK,Dialog.BTN_OK);
        }
    },
});

Dialog.BTN_OK = 0;
Dialog.BTN_CANCEL = 1;
Dialog.BTN_QUIT = 2;

Dialog.ZODER         = 2550;
Dialog.TAG           = 2552;
Dialog.SUPPORT_ZODER = 254;
Dialog.SUPPORT_TAG   = 254;