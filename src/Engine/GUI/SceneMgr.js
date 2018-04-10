var LOADING_TAG = 21112;

var SceneMgr = cc.Class.extend({
    ctor: function(){

    },

    getRunningScene: function(){
        var currentScene = cc.director.getRunningScene();
        if(currentScene instanceof cc.TransitionScene)
        {
            currentScene = cc.director.getRunningScene().getInScene();
        }
        return currentScene;
    },

    replaceWithScene: function(scene,transition){
        if(!transition)
        {
            cc.director.runScene(new cc.TransitionFade(.35,scene));
        }
        else
        {
            cc.director.runScene(transition);
        }
        //gameSound.screenAppear();
    },

    showYesNoDialog: function(title,message,target,selector,parent){
        this.dialog = new Dialog();
        if(parent)
        {
            parent.addChild(this.dialog);
        }
        else
            this.getRunningScene().getMainLayer().addChild(this.dialog);
        this.dialog.setLocalZOrder(Dialog.ZODER);
        this.dialog.setTag(Dialog.TAG);
        this.dialog.set(title,message,target,selector);

        return this.dialog;
    },

    addLoading: function(text,fog){
        // cc.log("addLoading 0");
        var loading = MainContent.getChildByTag(parseInt(parseInt(LOADING_TAG)));
        // cc.log("addLoading 1");

        //if(loading)
        //{
        //    loading.stopAllActions();
        //    loading.removeFromParent();
        //}

        if(this.loading){
            this.loading.stopAllActions();
            this.loading.removeFromParent();
            // cc.log("addLoading 3");
        }
        // cc.log("addLoading 4");
        if(fog === "undefined")
            fog = true;
        var size = MainContent.getContentSize();
        // cc.log("addLoading 5");
        var loading = new Loading(text,fog,size);
        this.loading = loading;
        loading.setLocalZOrder(10000);
        MainContent.addChild(loading);
        loading.setTag(parseInt(LOADING_TAG));
        // cc.log("addLoading 6");
        return loading;

    },

    clearLoading: function(){

        //var loading = MainContent.getChildByTag(parseInt(LOADING_TAG));
        //if(loading)
        //{
        //    //loading.remove();
        //    loading.removeFromParent();
        //}
        // cc.log("clear loading1");
        if(this.loading)
        {
            //loading.remove();
            this.loading.removeFromParent();
            this.loading = null;
        }
    },

    takeScreenShot: function() {
        if(jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "screentshot.png"))
        {
            jsb.fileUtils.removeFile(jsb.fileUtils.getWritablePath() + "screentshot.png");
        }
        var text = new cc.RenderTexture(cc.winSize.width,cc.winSize.height);
        text.setPosition(cc.winSize.width/2,cc.winSize.height/2);
        text.begin();
        sceneMgr.getRunningScene().visit();
        text.end();

        var ret = text.saveToFile("screentshot.png",1);

        var path = "";
        if(ret)
        {
            gameSound.playChupanh();
            path = jsb.fileUtils.getWritablePath() + "screentshot.png";
        }
        return path;
    },

    updateCurrentGUI: function(data) {
        var gui = this.getRunningScene().getMainLayer();
        gui.onUpdateGUI(data);
    },

    // hungdd's function
    openWithScene : function (layer,callback,direct) {
        var curLayer = null;
        if(direct === undefined)
        {
            direct = false;
        }
        if(this._isWaitingCallBack && !direct)
        {
            curLayer = new window[this._waitingScene];

            this._isWaitingCallBack = false;
            this._waitingScene = "";
        }
        else
        {
            curLayer = layer;
        }

        if(callback !== undefined)
        {
            if(callback != "" || callback != null)
            {
                this._isWaitingCallBack = true;
                this._waitingScene = callback;
            }
        }

        var scene = new BaseScene();
        scene.addChild(curLayer);

        cc.director.runScene(new cc.TransitionFade(BaseLayer.TIME_APPEAR_GUI,scene));
    },

    showOkCancelDialog: function(message,target,selector){
        if(this.dialog != null)
        {
            //this.dialog.removeFromParent();
        }
        this.dialog = new Dialog();
        this.getRunningScene().getMainLayer().addChild(this.dialog);
        this.dialog.setLocalZOrder(Dialog.ZODER);
        this.dialog.setTag(Dialog.TAG);
        this.dialog.setOkCancel(message,target,selector);

    },

    showOKDialog: function(message){
        if(this.dialog != null)
        {
            this.dialog.removeFromParent();
        }
        this.dialog = new Dialog();
        this.getRunningScene().getMainLayer().addChild(this.dialog);
        this.dialog.setLocalZOrder(Dialog.ZODER);
        this.dialog.setTag(Dialog.TAG);
        this.dialog.setOKNotify(message);
    },

    showChangeGoldDialog : function (message,target,selector) {
        if(this.dialog != null)
        {
            //this.dialog.removeFromParent();
        }
        this.dialog = new Dialog();
        this.getRunningScene().getMainLayer().addChild(this.dialog);
        this.dialog.setLocalZOrder(Dialog.ZODER);
        this.dialog.setTag(Dialog.TAG);
        this.dialog.setChangeGold(message,target,selector);
    },

    showAddGDialog : function (message,target,selector) {
        if(this.dialog != null)
        {
            //this.dialog.removeFromParent();
        }
        this.dialog = new Dialog();
        this.getRunningScene().getMainLayer().addChild(this.dialog);
        this.dialog.setLocalZOrder(Dialog.ZODER);
        this.dialog.setTag(Dialog.TAG);
        this.dialog.setAddG(message,target,selector);
    },

    showSupportBean : function (bean, numSupport) {
        var sp = new SupportBeanGUI();
        this.getRunningScene().getMainLayer().addChild(sp,Dialog.SUPPORT_ZODER,Dialog.SUPPORT_TAG);
        sp.showSupportBean(bean,numSupport);
    },

    showSupportStartup : function () {
        var curLayer = this.getRunningScene().getMainLayer();
        // cc.log(curLayer._id);
        if(curLayer instanceof LobbyScene)
        {
            var sp = new SupportBeanGUI();
            curLayer.addChild(sp,Dialog.SUPPORT_ZODER,Dialog.SUPPORT_TAG);
            sp.showSupportStartup();
        }
    },

    checkSupportBean : function (waitSupport) {
        if (gamedata.userData.bean < gamedata.gameConfig.chanelConfig[0].minGold)
        {
            GameClient.getInstance().sendPacket(new CmdSendGetSupportBean());
        }

        if(typeof  waitSupport != 'undefined')
        {
            gamedata.showSupportTime = waitSupport;
        }
    },
    shakeScreen: function(){
        //this.getRunningScene().getMainLayer().runAction(       engine.CCShake.actionWithDuration(.55,12));
        this.getRunningScene().getMainLayer().runAction(cc.show());
    }



});

var Loading = cc.Layer.extend({

    ctor: function (text, fog , size) {
        // cc.log("ctor1");
        this._super();
        this._layerColor = null;
        this._message = "";
        this._fog = true;
        //this.setContentSize(size);
        this.size = size;
        if (text)
            this._message = text;

        if (fog != null) {
            this._fog = fog;
        }
        if (this._fog) {
            this._layerColor = new cc.LayerColor(cc.BLACK);
            this._layerColor.setOpacity(0)
            this._layerColor.runAction(cc.fadeTo(.25, 150));
           //this.addChild(this._layerColor);
        }

        this.sload1 = null;
        this.sload2 = null;
        this.sload3 = null;
        this.sload4 = null;
        this.sloadw = null;
        this.sloadc = null;
        // cc.log("ctor2");
    },

    timeout: function (time) {
        //Phu test
        // cc.log("run Phu test timeout");
        //this.runAction(cc.sequence(cc.delayTime(time), cc.hide()));
        //this.runAction(cc.sequence(cc.delayTime(time), cc.removeSelf()));
    },

    onEnter: function () {
        cc.Layer.prototype.onEnter.call(this);

        var pn_layout = new ccui.Layout();
        pn_layout.setAnchorPoint(0.5, 0.5);
        pn_layout.setContentSize(cc.size(1920, 1080));
        pn_layout.setTouchEnabled(true);
        pn_layout.setCascadeOpacityEnabled(true);
        pn_layout.setPosition(cc.p(640, 360));

        this.addChild(pn_layout);

        pn_layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        pn_layout.setBackGroundColor(GuiUtil.color("#000000"));
        pn_layout.setBackGroundColorOpacity(180);
        // cc.log("onEnter0");
        //test
        var bg = new cc.Sprite("res/LoadingUI/bg_load.png");
        bg.setPosition(this.size.width / 2, this.size.height / 2 + 15);
        this.addChild(bg);

        this.sload1 = new cc.Sprite("res/LoadingUI/loading_p.png");
        this.sload1.setScale(0.7);
        this.sload1.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sload1);

        this.sload2 = new cc.Sprite("res/LoadingUI/loading_p.png");
        this.sload2.setScale(0.7);
        this.sload2.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sload2);

        this.sload3 = new cc.Sprite("res/LoadingUI/loading_p.png");
        this.sload3.setScale(0.7);
        this.sload3.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sload3);

        this.sload4 = new cc.Sprite("res/LoadingUI/loading_p.png");
        this.sload4.setVisible(true);
        this.sload4.setScale(0.7);
        this.sload4.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sload4);

        this.sloadc = new cc.Sprite("res/LoadingUI/loading_c.png");
        this.sloadc.setVisible(false);
        this.sloadc.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sloadc);

        this.sloadw = new cc.Sprite("res/LoadingUI/loading_pw.png");
        this.sloadw.setScale(0);
        this.sloadw.setPosition(this.size.width / 2, this.size.height / 2 + 40);
        this.addChild(this.sloadw);



        this.animateLoad();

        //for (var i = 0; i < 5; i++) {
        //    this.test = new cc.Sprite("res/LoadingUI/loadingCircle.png");
        //    var y = this.test.getContentSize().height / 2;
        //    this.test.setPositionY(this.size.height - 6);
        //    this.test.setPositionX(0)
        //    this.addChild(this.test);
        //
        //    if(!cc.sys.isNative)
        //    {
        //        this.test.setVisible(false);
        //    }
        //    this.test.runAction(cc.repeatForever(cc.sequence(cc.delayTime(i * .125), engine.CircleMove.create(2, this.size.width / 2), cc.delayTime((5 - i) * .125))));
        //}

        var scale = cc.director.getWinSize().width / 1280;
        scale = (scale > 1) ? 1 : scale;

        // cc.log("onEnter2");
        this._label = new ccui.Text();
        // cc.log("onEnter2.2");
        this._label.setAnchorPoint(cc.p(0.5, 0.5));
        //this._label.setFontName("res/LoadingUI/fonts/tahoma.ttf");
        this._label.setFontName(fontArialB.fontName);
        this._label.setFontSize(23);
        this._label.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this._label.setColor(cc.WHITE);
        this._label.setString(this._message);
        this._label.setScale(scale);
        this._label.setPosition(this.size.width / 2, this.size.height / 2 - 70);
        this.addChild(this._label);
        // cc.log("onEnter2");

        if (this._fog) {
            this._listener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: this.onTouchBegan,
                onTouchMoved: this.onTouchMoved,
                onTouchEnded: this.onTouchEnded
            });

            cc.eventManager.addListener(this._listener, this);
        }
        // cc.log("onEnter3");
    },

    animateLoad : function(){
        this.sload1.stopAllActions();
        this.sload2.stopAllActions();
        this.sload3.stopAllActions();
        this.sload4.stopAllActions();
        this.sloadc.stopAllActions();
        this.sloadw.stopAllActions();

        this.sload1.runAction(cc.spawn(cc.scaleTo(1,1.3),cc.fadeOut(1)));

        this.sload2.runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.scaleTo(1,1.3),cc.fadeOut(1))));

        this.sload3.runAction(cc.sequence(cc.delayTime(2), cc.spawn(cc.scaleTo(2,1.3),cc.fadeOut(2))));

        this.sload4.runAction(cc.sequence(cc.delayTime(2.8), cc.scaleTo(1.2,1), cc.callFunc(function(){
            sceneMgr.loading.actionPer2();
        })));
    },

    actionPer2 : function(){
        cc.log("ok");
        this.sloadw.runAction(cc.sequence(cc.scaleTo(0.2,1.2), cc.scaleTo(0.2,1.1), cc.scaleTo(0.2,1.14), cc.callFunc(function(){
            sceneMgr.loading.sloadc.setVisible(true);
            sceneMgr.loading.sload4.runAction(cc.fadeOut(0));
            var r_toata = cc.rotateBy(3,1080);
            sceneMgr.loading.sloadc.runAction(cc.sequence(r_toata, cc.callFunc(function(){
                sceneMgr.loading.finishAction();
            })));
        }), cc.scaleTo(0.2,0.72), cc.scaleTo(0.2,0.78)));
    },
    finishAction : function(){
        this.sloadw.runAction(cc.sequence(cc.scaleTo(0.3,1.14),cc.callFunc(function(){
            sceneMgr.loading.sloadc.setVisible(false);
            sceneMgr.loading.sload1.setScale(0.7);
            sceneMgr.loading.sload1.runAction(cc.fadeIn(0));

            sceneMgr.loading.sload2.setScale(0.7);
            sceneMgr.loading.sload2.runAction(cc.fadeIn(0));

            sceneMgr.loading.sload3.setScale(0.7);
            sceneMgr.loading.sload3.runAction(cc.fadeIn(0));

            sceneMgr.loading.sload4.setScale(0.7);
            sceneMgr.loading.sload4.runAction(cc.fadeIn(0));
        }) ,cc.scaleTo(0.3,0), cc.callFunc(function(){
            sceneMgr.loading.sload4.runAction(cc.sequence(cc.scaleTo(0.1,0.75), cc.scaleTo(0.1,0.7),cc.scaleTo(0.1,0.75), cc.scaleTo(0.1,0.7), cc.delayTime(1), cc.callFunc(function(){
                sceneMgr.loading.animateLoad();

            })));
        })));
    },

    remove: function () {
        if (this._layerColor) {
            this._layerColor.runAction(cc.fadeTo(.25, 0));
        }
        this.runAction(cc.sequence(cc.delayTime(.25), cc.removeSelf()));
        //this.runAction(cc.sequence(cc.delayTime(.25), cc.hide()));
    },

    onTouchBegan: function (touch, event) {
        return true;
    },

    onTouchMoved: function (touch, event) {

    },

    onTouchEnded: function (touch, event) {

    }
});

SceneMgr.sharedInstance = null;
SceneMgr.firstInit = true;

SceneMgr.getInstance = function(){
    if(SceneMgr.firstInit)
    {
        SceneMgr.sharedInstance = new SceneMgr();
        SceneMgr.firstInit = false;
    }
    return SceneMgr.sharedInstance;
}

var sceneMgr = SceneMgr.getInstance();
