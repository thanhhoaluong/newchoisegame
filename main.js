cc.game.onStart = function(){
    // cc.log("onStart begin");
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) {
        cc.log(" -----------> remove cocosLoading child")
        document.body.removeChild(document.getElementById("cocosLoading"));
    }
    cc.resPath = "./res";
    //jsb.fileUtils.addSearchPath("/");
    //jsb.fileUtils.addSearchPath("res/");
    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    if(cc.sys.isNative){
        cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL);


    }else {
        cc.view.setDesignResolutionSize(window.innerWidth, window.innerHeight, cc.ResolutionPolicy.NO_BORDER);
        cc.view._orientationChanging = false;
    }



    cc.view.resizeWithBrowserSize(true);
    cc.view.setResizeCallback(function()
    {
        cc.log("onresize");
        cc.view.setDesignResolutionSize(window.innerWidth,window.innerHeight,cc.ResolutionPolicy.NO_BORDER);

        var scaleContent = 1;
        var scaleContentX = 1;
        var scaleContentY = 1;

        if (cc.sys.isNative) {
        } else {
            scaleContentX = window.innerWidth/1920;
            scaleContentY = window.innerHeight/1080;
            if(window.innerWidth/1920 >= window.innerHeight/1080)
                scaleContent = window.innerWidth/1920;
            else
                scaleContent = window.innerHeight/1080;
            baseLobby.positionCenter = cc.p(960*scaleContentX,540*scaleContentY);
            baseLobby.positionContent = cc.p(960*scaleContentX,630*scaleContentY);
            baseLobby.imageBg = "res/Base/web.jpg";
            baseLobby.bg.setPosition(baseLobby.positionCenter);
            baseLobby.main_content.setPosition(baseLobby.positionContent);
            baseLobby.bg.setScale(scaleContent);
            baseLobby.main_content.setScale(scaleContent);
        }


    });



    time1 = new Date().getTime();

    //load resources
    cc.LoaderScene.preload(g_resources, function () {

        BaseScene.BG_GUI = new cc.Layer();
        BaseScene.GAME_GUI = new cc.Layer();
        BaseScene.MINI_GAME_GUI = new cc.Layer();
        BaseScene.ALERT_GUI = new cc.Layer();
        BaseScene.HALL_GUI = new cc.Layer();
        BaseScene.BG_GUI.retain();
        BaseScene.GAME_GUI.retain();
        BaseScene.MINI_GAME_GUI.retain();
        BaseScene.ALERT_GUI.retain();
        BaseScene.HALL_GUI.retain();

        var time2 = new Date().getTime();
        loginscene = new LoginScene();
        cc.director.runScene(makeScene(loginscene));

        if(!cc.sys.isNative)
        {
            cc.director.getScheduler().scheduleUpdate(engine.HandlerManager.getInstance(),0,false);
        }

    }, this);
};
cc.game.run();
