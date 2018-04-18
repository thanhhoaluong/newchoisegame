

var loginscene = null;
var ListSlot = [
    {
        name: "slot1",
        icon: res_ListGame + "slot1.png",
    },
    {
        name: "slot2",
        icon: res_ListGame + "slot2.png",
    },
    {
        name: "slot3",
        icon: res_ListGame + "slot3.png",
    }
];

var ListMinigame = [
    {
        name: "mini_tx",
        icon: res_ListGame + "mini_tx.png",
    },
    {
        name: "mini_ct",
        icon: res_ListGame + "mini_ct.png",
    },
    {
        name: "mini_poker",
        icon: res_ListGame + "mini_poker.png",
    },
    {
        name: "mini_slot",
        icon: res_ListGame + "mini_slot.png",
    }
];

var LoginScene = BaseLayer.extend(
    {
        ctor: function () {
            this.signUp = null;
            this.arrItemSlots = [];
            this.arrItemMiniGame = [];
            this.platform = null;
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("customizeGUI");
            if (cc.sys.isNative) {
                if(cc.sys.os == cc.sys.OS_ANDROID) {
                    this.platform = "ad";
                }else if(cc.sys.os == cc.sys.OS_IOS) {
                    this.platform = "ios";
                }else if(cc.sys.os == cc.sys.OS_WINRT) {
                    this.platform = "wp";
                }
            }else{
                this.platform = "web";
            }

            this.createLogin();
            this.createBottom();
            this.createListSlot();
            this.createListMiniGame();
            this.getConfig();
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

            this.ed_username_sign.setString("gamegame");
            this.ed_pass_sign.setString("game123");
        },

        createBottom : function(){
            this.createLayout(this,"bottom",cc.p(640,370),null,cc.size(1280,720),false);
            this.createButton(this.bottom,"bt_news",LoginScene.BTN_NEWS,cc.p(249,25),true,res_MenuSetting + "mn_new.png",res_MenuSetting + "mn_new.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_ios",LoginScene.BTN_IOS,cc.p(416,25),true,res_MenuSetting + "mn_ios.png",res_MenuSetting + "mn_ios.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_android",LoginScene.BTN_APK,cc.p(580,25),true,res_MenuSetting + "mn_apk.png",res_MenuSetting + "mn_apk.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_fanpage",LoginScene.BTN_FANPAGE,cc.p(753,25),true,res_MenuSetting + "mn_fanpage.png",res_MenuSetting + "mn_fanpage.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_payment",LoginScene.BTN_PAYMENT,cc.p(968,45),true,res_MenuSetting + "mn_shop.png",res_MenuSetting + "mn_shop.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.bottom,"bt_email",LoginScene.BTN_EMAIL,cc.p(376,25),true,res_MenuSetting + "btn_mail.png",res_MenuSetting + "btn_mail.png",ccui.Widget.PLIST_TEXTURE);
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

        createListSlot : function(){
            this.createListView(this, "list_slot", cc.p(414, 335), cc.size(679,440));
            this.list_slot.setTouchEnabled(true);
            this.list_slot.setBounceEnabled(true);
            this.list_slot.setClippingEnabled(true);
            this.list_slot.setDirection(ccui.ScrollView.DIR_HORIZONTAL);

            for(var i = 0; i < ListSlot.length; i ++){
                var itemSlot = new ccui.Layout();
                itemSlot.height = this.list_slot.height;
                itemSlot.width = 230;
                var bt_Slot = new ItemSlots(ListSlot[i], cc.size(215, itemSlot.height));
                bt_Slot.setTouchEnabled(true);
                //bt_Slot.setAudio(this.audioMenuSlots);
                bt_Slot.setPosition(cc.p(itemSlot.width/2, itemSlot.height/2));
                itemSlot.addChild(bt_Slot);
                //bt_Slot.addTouchEventListener(this.onTouchListSlot, this);
                this.list_slot.pushBackCustomItem(itemSlot);
                this.arrItemSlots.push(bt_Slot);
            }
        },

        createListMiniGame : function(){
            this.createListView(this, "list_minigame", cc.p(980, 335), cc.size(434,440));
            this.list_minigame.setTouchEnabled(true);
            this.list_minigame.setBounceEnabled(true);
            this.list_minigame.setClippingEnabled(true);
            this.list_minigame.setDirection(ccui.ScrollView.DIR_HORIZONTAL);

            for(var i = 0; i < ListMinigame.length; i ++){
                if (i % 2 == 0) {
                    var itemMiniGame = new ccui.Layout();
                    itemMiniGame.height = this.list_minigame.height - 10;
                    itemMiniGame.width = 220;
                    var bt_Mini = new ItemMiniGame(ListMinigame[i], cc.size(215, itemMiniGame.height));
                    bt_Mini.setTouchEnabled(true);
                    bt_Mini.setTag(i);
                    bt_Mini.setPosition(cc.p(itemMiniGame.width/2, 3/4*itemMiniGame.height));
                    itemMiniGame.addChild(bt_Mini);
                    bt_Mini.addTouchEventListener(this.onTouchListMiniGame, this);
                    this.arrItemMiniGame.push(bt_Mini);

                    if (i < ListMinigame.length - 1) {
                        var bt_Mini = new ItemMiniGame(ListMinigame[i + 1], cc.size(215, itemMiniGame.height));
                        bt_Mini.setTouchEnabled(true);
                        bt_Mini.setPosition(cc.p(itemMiniGame.width/2, 1/4*itemMiniGame.height - 5));
                        bt_Mini.setTag(i + 1);
                        itemMiniGame.addChild(bt_Mini);
                        bt_Mini.addTouchEventListener(this.onTouchListMiniGame, this);
                        this.arrItemMiniGame.push(bt_Mini);
                    }
                    this.list_minigame.pushBackCustomItem(itemMiniGame);
                }
            }
        },

        onTouchListMiniGame: function (sender, type) {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:
                    if(userInfo._isSignIned == false){
                        showAlam(0, "Vui lòng đăng nhập vào game!", null);
                        return;
                    }

                    var gameTag = sender.getTag();
                   // tam fix vao tai xiu
                    addTaiXiu();
                    break;
            }
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case LoginScene.BTN_REGISTER:
                    this.addRegisterScene();
                    break;
                case LoginScene.BTN_SIGN_IN:
                    this.callLogin();
                    break;
                case LoginScene.BTN_PAYMENT:
                    if(userInfo._isSignIned == false) {
                        showAlam(0, "Vui lòng đăng nhập vào game!", null);
                        return;
                    }
                    addPayment("addmoney");
                    break;
            }
        },

        callLogin : function(){
            var user = this.ed_username_sign.getString();
            var pass = this.ed_pass_sign.getString();

            if (user == null || user.length < 6) {
                showAlam(0, "Bạn chưa nhập tên đăng nhập hoặc sai tên đăng nhập!", null);
                return;
            }
            if (pass == null || pass.length < 6) {
                showAlam(0, "Bạn chưa nhập mật khẩu hoặc nhập sai mật khẩu!", null);
                return;
            }
            getConection(MODULE_PORTAL);
            cc.log("stt server: = " + findSocket(MODULE_PORTAL));
            conectsocket.loginToGame(user, pass, this.platform);
        },

        LoginSuccess : function(info, error){
            cc.log("info = " + info.nickname);
            // update thong tin player
            if(error != ""){
                showAlam(0, error, null);
                return;
            }

            userInfo.userName = info.Name;
            var pass = this.ed_pass_sign.getString();
            userInfo.passWord = pass;
            this.ed_username_sign.setString("");
            this.ed_pass_sign.setString("");
            userInfo._isSignIned = true;

            userInfo.Info.nickname = info.Alias;
            userInfo.Info.accessToken = info.Token;
            userInfo.Info.zoMoney = info.Coin;
            userInfo.Info.xuMoney = info.Gold;
            userInfo.Info.avatar = info.Avatar;

            intoHallScene();
            this.SignIn.setVisible(false);
            this.changeBottomWhenSignIn();
        },

        addRegisterScene : function(){
            if(this.signUp == null){
                this.signUp = new SignUp(this)
                this.addChild(this.signUp);
            }
        },

        getConfig : function(){
            sceneMgr.addLoading("Đang tải dữ liệu!");
            var url = urlGetConfig()
            sendRequest(url, null, false, this.callbackGetConfig, this.callBackErrorGetAPI);
        },

        callbackGetConfig : function(response){
            cc.log("config game = " + response);
            var jsonData = JSON.parse(response);

            configMyGame.servers = jsonData["servers"];
            configMyGame.module = jsonData["module"];
            configMyGame.version = jsonData["version"];
            configMyGame.isUpdate = jsonData["isUpd"];
            configMyGame.urlUpdate = jsonData["urlUpd"];
            configMyGame.urlResource = jsonData["urlRes"];

            loginscene.openSocketServer();
            sceneMgr.clearLoading();
        },

        callBackErrorGetAPI : function(){
            sceneMgr.addLoading("Xảy ra lỗi. Vui lòng quay lại sau!");
        },

        connectSocketClient : function(){
            if(conectsocket == null){
                conectsocket = new ConectSocketClient(this)
                this.addChild(conectsocket);
            }
        },

        openSocketServer : function(){
            for(var i =0; i < configMyGame.servers.length; i++){
                var conection = null;
                conection = new ConectSocketClient(this)
                this.addChild(conection);
                this["conection" + configMyGame.servers[i].sId] = conection;
            }
        },

        changeBottomWhenSignIn : function (){
            if(userInfo._isSignIned == false){
                this.bt_news.setPosition(cc.p(249,this.bt_news.getPositionY()));
                this.bt_ios.setPosition(cc.p(416,this.bt_ios.getPositionY()));
                this.bt_android.setPosition(cc.p(580,this.bt_android.getPositionY()));
                this.bt_fanpage.setPosition(cc.p(753,this.bt_fanpage.getPositionY()));
                this.bt_payment.setPosition(cc.p(968,this.bt_payment.getPositionY()));
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

var captcha_base = null;
var conectsocket = null;

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

