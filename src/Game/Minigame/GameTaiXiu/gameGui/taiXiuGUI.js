var taixiu = null;

var TaiXiuGUI = MiniGameLayer.extend(
    {
        ctor: function () {
            this._super();
            this.pn_taixiu = null;
            this.arrSpriteHis = [];
            this.showChat = false;
            this.pn_chat = null;
            this.soicau = null;
            this.numItemInListChat = null;
            return true;
        },
        customizeGUI: function () {
            cc.log("tai xiu");
            this.createSprite(this,"pn_taixiu",cc.p(640,430),res_SameImage + "table_mini.png");

            this.createButton(this.pn_taixiu,"bt_soicau",TaiXiuGUI.BTN_SOICAU,cc.p(12,105),true,res_TaiXiu + "bt_soicau.png",res_TaiXiu + "bt_soicau.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_nan",TaiXiuGUI.BTN_SQUEZZE,cc.p(58,263),true,res_TaiXiu + "bt_nan.png",res_TaiXiu + "bt_nan.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_change_room",TaiXiuGUI.BTN_CHANGE_ROOM,cc.p(245,257),true,res_SameImage + "coin.png",res_SameImage + "coin.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_nan",TaiXiuGUI.BTN_TOP,cc.p(457,280),true,res_TaiXiu + "bt_top.png",res_TaiXiu + "bt_top.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_guild",TaiXiuGUI.BTN_GUILD,cc.p(520,280),true,res_TaiXiu + "bt_guild.png",res_TaiXiu + "bt_guild.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_lsgd",TaiXiuGUI.BTN_LSGD,cc.p(584,280),true,res_TaiXiu + "bt_lsgd.png",res_TaiXiu + "bt_lsgd.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_close",TaiXiuGUI.BTN_CLOSE,cc.p(644,280),true,res_SameImage + "bt_close_mini.png",res_SameImage + "bt_close_mini.png",ccui.Widget.PLIST_TEXTURE);

            this.createImage(this.pn_taixiu, "shadow", cc.p(353.5,340), res_TaiXiu + "shadow.png", cc.size(544, 107));
            this.createButton(this.pn_taixiu,"bt_event1",TaiXiuGUI.BTN_EVENT,cc.p(353.5,335),true,res_TaiXiu + "bt_event.png",res_TaiXiu + "bt_event.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_taixiu,"bt_event2",TaiXiuGUI.BTN_EVENT,cc.p(353.5,383),true,res_TaiXiu + "bt_crown.png",res_TaiXiu + "bt_crown.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_event2.setPressedActionEnabled(false);

            this.createImage(this.pn_taixiu, "bg_id", cc.p(353.5,280), res_TaiXiu + "bg_id.png", cc.size(124, 30));
            this.createText(this.pn_taixiu, "lb_id", cc.p(353.5, 280), "#000000", fontTahoma.fontName, 18);
            this.lb_id.ignoreContentAdaptWithSize(false);
            this.lb_id.setContentSize(cc.size(120, 26));
            this.lb_id.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_id.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createImage(this.pn_taixiu, "bg_khunggiua", cc.p(353.5,160), res_TaiXiu + "khungchoi.png", cc.size(225, 226));
            this.createText(this.pn_taixiu, "lb_notice", cc.p(353.5, 203), "Cân Cửa", fontTahomaB.fontName, 25);
            this.lb_notice.ignoreContentAdaptWithSize(false);
            this.lb_notice.setContentSize(cc.size(150, 30));
            this.lb_notice.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_notice.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.createText(this.pn_taixiu, "lb_time", cc.p(353.5, 150), "00:00", fontTahomaB.fontName, 42);
            this.lb_time.ignoreContentAdaptWithSize(false);
            this.lb_time.setContentSize(cc.size(150, 45));
            this.lb_time.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_time.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);


            this.createImage(this.pn_taixiu, "bg_point", cc.p(447,207), res_TaiXiu + "bg_point.png", cc.size(54, 54));
            this.createText(this.pn_taixiu, "lb_point", cc.p(447, 207), "13", fontTahomaB.fontName, 26);
            this.lb_point.ignoreContentAdaptWithSize(false);
            this.lb_point.setContentSize(cc.size(60, 30));
            this.lb_point.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_point.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);


            this.createSprite(this.pn_taixiu,"sp_tai",cc.p(152,227),res_TaiXiu + "tai.png");
            this.createSprite(this.pn_taixiu,"sp_tai",cc.p(562,227),res_TaiXiu + "xiu.png");

            this.createSprite(this.pn_taixiu,"per_tai",cc.p(120,175),res_TaiXiu + "ico_per.png");
            this.createSprite(this.pn_taixiu,"per_tai",cc.p(538,175),res_TaiXiu + "ico_per.png");

            this.createText(this.pn_taixiu, "lb_per_tai", cc.p(200, 175), "1000", fontTahoma.fontName, 20);
            this.lb_per_tai.ignoreContentAdaptWithSize(false);
            this.lb_per_tai.setContentSize(cc.size(120, 26));
            this.lb_per_tai.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_per_tai.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.pn_taixiu, "lb_per_xiu", cc.p(618, 175), "1000", fontTahoma.fontName, 20);
            this.lb_per_xiu.ignoreContentAdaptWithSize(false);
            this.lb_per_xiu.setContentSize(cc.size(120, 26));
            this.lb_per_xiu.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_per_xiu.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createSprite(this.pn_taixiu,"sp_put_tai",cc.p(152,105),res_TaiXiu + "bg_put.png");
            this.createSprite(this.pn_taixiu,"sp_put_tai",cc.p(562,105),res_TaiXiu + "bg_put.png");
            this.createEditBox(this.pn_taixiu,"ed_put_tai",cc.p(152,105),"","Đặt",fontArial.fontName,22,cc.size(170,35),null,cc.TEXT_ALIGNMENT_CENTER,11);
            this.ed_put_tai.setPlaceholderFontColor(cc.color.YELLOW);
            this.ed_put_tai.setFontColor(cc.color.YELLOW);
            this.createEditBox(this.pn_taixiu,"ed_put_xiu",cc.p(562,105),"","Đặt",fontArial.fontName,22,cc.size(170,35),null,cc.TEXT_ALIGNMENT_CENTER,11);
            this.ed_put_xiu.setPlaceholderFontColor(cc.color.YELLOW);
            this.ed_put_xiu.setFontColor(cc.color.YELLOW);

            this.createText(this.pn_taixiu, "lb_my_tai", cc.p(152, 68), "1000", fontTahoma.fontName, 25);
            this.lb_my_tai.ignoreContentAdaptWithSize(false);
            this.lb_my_tai.setContentSize(cc.size(250, 28));
            this.lb_my_tai.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_my_tai.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createText(this.pn_taixiu, "lb_my_xiu", cc.p(562, 68), "1000", fontTahoma.fontName, 25);
            this.lb_my_xiu.ignoreContentAdaptWithSize(false);
            this.lb_my_xiu.setContentSize(cc.size(250, 28));
            this.lb_my_xiu.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_my_xiu.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createButton(this.pn_taixiu,"bt_chat",TaiXiuGUI.BTN_CHAT,cc.p(694,105),true,res_TaiXiu + "bt_chat.png",res_TaiXiu + "bt_chat.png",ccui.Widget.PLIST_TEXTURE);

            this.addLayerMaster(this.pn_taixiu);

            this.createLayout(this.pn_taixiu,"pn_history",cc.p(341,30),null,cc.size(482,34),true);
            this.createSprite(this.pn_history,"pn_tooltip",cc.p(0 ,-25),res_TaiXiu + "bg_tooltip.png");
            this.createText(this.pn_tooltip, "lb_tooltip", cc.p(this.pn_tooltip.width/2, 24), "1000\n123123", fontTahoma.fontName, 18);
            this.lb_tooltip.ignoreContentAdaptWithSize(false);
            this.lb_tooltip.setContentSize(cc.size(170, 40));
            this.lb_tooltip.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_tooltip.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.pn_tooltip.setVisible(false);

            this.addListenHistory();
            this.drawHistoryLayer();
        },

        drawHistoryLayer : function(){
            /// fix tam ket qua
            for(var i = 0; i < 18; i ++){
                var gt = TaiXiuGUI.detailHis;
                TaiXiuGUI.arrHistory.push(gt);
            }
            ////

            var posx = 14;
            for(var i = 0; i < TaiXiuGUI.arrHistory.length; i ++){
                var str = "";
                if(TaiXiuGUI.arrHistory[i].result >= 11)
                    str = "rs_tai";
                else
                    str = "rs_xiu";
                this.createSprite(this.pn_history,"sh_" + i,cc.p(posx ,this.pn_history.height/2),res_TaiXiu + str + ".png");
                this["sh_" + i].setTag(i);
                this.arrSpriteHis.push(this["sh_" + i]);
                posx = posx + 28;
            }
        },

        addListenHistory : function(){
            if (cc.sys.capabilities.hasOwnProperty('mouse')){
                this.toolTipHis = cc.EventListener.create({
                    event: cc.EventListener.MOUSE,
                    onMouseDown: function (event) {
                    },
                    onMouseMove: function (event) {
                        var pos = event.getLocation();
                        target = event.getCurrentTarget();
                        var locationInNode = target.convertToNodeSpace(event.getLocation());
                        var s = target.getContentSize();
                        //cc.log("Mouse Moved: " + locationInNode.x);
                        for (var i = 0; i < TaiXiuGUI.arrHistory.length; i++) {
                            if (cc.rectContainsPoint(cc.rect(taixiu.arrSpriteHis[i].getPosition().x - 14, taixiu.arrSpriteHis[i].getPosition().y - 14, 28, 28), locationInNode)){
                                //cc.log("show phien" + taixiu.arrSpriteHis[i].getTag());
                                taixiu.showToolTip(taixiu.arrSpriteHis[i].getTag());
                                break;
                            } else {
                                taixiu.closeTooltip();
                            }
                        }
                    },
                    onMouseUp: function (event) {
                    }
                });
            }
            if ('mouse' in cc.sys.capabilities) {
                cc.eventManager.addListener(this.toolTipHis, this.pn_history);
            }
        },

        showToolTip : function(str){
            var subtext = TaiXiuGUI.arrHistory[str].id +"\n";
            if(TaiXiuGUI.arrHistory[str].result >= 11)
                subtext = subtext + "TÀI ";
            else
                subtext = subtext + "XỈU "

            subtext = subtext + "(" + TaiXiuGUI.arrHistory[str].xucxac1 + "," + TaiXiuGUI.arrHistory[str].xucxac2 + "," + TaiXiuGUI.arrHistory[str].xucxac3 + ")";
            this.lb_tooltip.setString(subtext);
            this.pn_tooltip.setPosition(cc.p(taixiu.arrSpriteHis[str].getPositionX(),this.pn_tooltip.getPositionY()));
            this.pn_tooltip.setVisible(true);
        },
        closeTooltip : function(){
            this.lb_tooltip.setString("");
            this.pn_tooltip.setVisible(false);
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case TaiXiuGUI.BTN_CLOSE:
                    this.destroyBase();
                    break;
                case TaiXiuGUI.BTN_CHAT:
                    this.checkShowChat();
                    break;
                case TaiXiuGUI.BTN_CLOSE_CHAT:
                    this.checkShowChat();
                    break;
                case TaiXiuGUI.BTN_SOICAU:
                    this.createSoiCau();
                    break;
                case TaiXiuGUI.BTN_SEND_CHAT:
                    this.sendChatToServer();
                    break;
            }
        },
        sendChatToServer : function(){
            var content = this.ed_chat.getString();
            if(content == "" || content == null || content == undefined)
                return;
            getConection(MODULE_CHAT);
            var url = CmdSendChat(content);
            conectsocket.gameClient.send(url);
            this.ed_chat.setString("");
        },

        sendChatSuccess : function (data, error){
            if(error != ""){
                showAlam(0, error, null);
                return;
            }
            var txtnick = data[0].a + ":";
            var nickname = new cc.LabelTTF(txtnick, fontTahomaB.fontName, 15, cc.size(288, 0), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            var mes = data[0].c;
            var lbgame = new cc.LabelTTF(mes, fontTahoma.fontName, 15, cc.size(288, 0), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            if(data[0].a.toLowerCase() == "admin"){
                nickname.setColor(GuiUtility.color("#ffde00"));
                lbgame.setColor(GuiUtility.color("#90ff36"));
            }else{
                nickname.setColor(GuiUtility.color("#ffd200"));
                lbgame.setColor(GuiUtility.color("#ffffff"));
            }

            var cl1 = new ccui.Layout();
            cl1.height = nickname.height + 5 + lbgame.height;
            cl1.width = 300;
            nickname.setPosition(cc.p((nickname.width/2) + 5,(lbgame.height) + (nickname.height / 2)));
            lbgame.setPosition(cc.p((lbgame.width / 2) + 5, (nickname.y - (nickname.height/2) - (lbgame.height/2))));

            cl1.addChild(nickname);
            cl1.addChild(lbgame);
            this.lv_chat.pushBackCustomItem(cl1);
            this.lv_chat.jumpToBottom();
            if(this.numItemInListChat < 100){
                this.numItemInListChat = this.numItemInListChat + 1;
            }else{
                this.lv_chat.removeItem(0);
            }
        },

            checkShowChat : function(){
            if(this.pn_chat == null) {
                this.showChat = true;
               this.EnterModuleChat();
            }else{
                if(this.showChat == true){
                    this.showChat = false;
                    this.pn_chat.setVisible(false);
                    this.LeaveModuleChat();
                }else{
                    this.showChat = true;
                    this.pn_chat.setVisible(true);
                    this.EnterModuleChat();
                }
            }
        },

        EnterModuleChat : function(){
            getConection(MODULE_CHAT);
            var url = CmdEnterModule(MODULE_CHAT,userInfo.Info.accessToken);
            conectsocket.gameClient.send(url);
        },
        LeaveModuleChat : function(){
            getConection(MODULE_CHAT);
            var url = CmdLeaveModule(MODULE_CHAT);
            conectsocket.gameClient.send(url);
        },

        createChat : function(data, error){
            //cc.log("data chat = " + data);
            if(error != ""){
                showAlam(0, error, null);
                return;
            }
            if(this.pn_chat == null) {
                this.createSprite(this.pn_taixiu, "pn_chat", cc.p(882, 196), res_TaiXiu + "bg_chat.png");
                this.createButton(this.pn_chat, "bt_close_chat", TaiXiuGUI.BTN_CLOSE_CHAT, cc.p(282, 370), true, res_SignUp + "b_close.png", res_SignUp + "b_close.png", ccui.Widget.PLIST_TEXTURE);
                this.createListView(this.pn_chat, "lv_chat", cc.p(151, 202), cc.size(290, 288));
                this.lv_chat.setTouchEnabled(true);
                this.lv_chat.setBounceEnabled(true);
                this.lv_chat.setClippingEnabled(true);

                this.createEditBox(this.pn_chat, "ed_chat", cc.p(129, 31), "", "Nhập nội dung chat", fontArial.fontName, 18, cc.size(243, 36), null, cc.TEXT_ALIGNMENT_CENTER, 150);
                this.ed_chat.setPlaceholderFontColor(cc.color.GRAY);
                this.ed_chat.setFontColor(cc.color.BLACK);

                this.createButton(this.pn_chat, "bt_send_chat", TaiXiuGUI.BTN_SEND_CHAT, cc.p(279, 31), true, res_TaiXiu + "bt_send.png", res_TaiXiu + "bt_send.png", ccui.Widget.PLIST_TEXTURE);
                if (!cc.sys.isNative) {
                    this.ed_chat.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                }
            }
            this.fillDataToChatList(data);
        },

        fillDataToChatList : function(data){
            this.lv_chat.removeAllChildren();
            this.lv_chat.removeAllItems();

            for(var i =0; i< data.length; i ++){
                var txtnick = data[i].a + ":";
                var nickname = new cc.LabelTTF(txtnick, fontTahomaB.fontName, 15, cc.size(288, 0), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
                var mes = data[i].c;
                var lbgame = new cc.LabelTTF(mes, fontTahoma.fontName, 15, cc.size(288, 0), cc.TEXT_ALIGNMENT_LEFT, cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
                if(data[i].a.toLowerCase() == "admin"){
                    nickname.setColor(GuiUtility.color("#ffde00"));
                    lbgame.setColor(GuiUtility.color("#90ff36"));
                }else{
                    nickname.setColor(GuiUtility.color("#ffd200"));
                    lbgame.setColor(GuiUtility.color("#ffffff"));
                }

                var cl1 = new ccui.Layout();
                cl1.height = nickname.height + 5 + lbgame.height;
                cl1.width = 300;
                nickname.setPosition(cc.p((nickname.width/2) + 5,(lbgame.height) + (nickname.height / 2)));
                lbgame.setPosition(cc.p((lbgame.width / 2) + 5, (nickname.y - (nickname.height/2) - (lbgame.height/2))));

                cl1.addChild(nickname);
                cl1.addChild(lbgame);
                this.lv_chat.pushBackCustomItem(cl1);

            }
            this.lv_chat.jumpToBottom();
            this.numItemInListChat = data.length;
        },

        createSoiCau : function(){
            if(this.soicau == null){
                this.soicau = new DrawCau(this);
                this.addChild(this.soicau);
            }
        },

        destroyBase : function(){
            if(taixiu == null){
                return
            }
            TaiXiuGUI.arrHistory = [];
            taixiu.removeAllChildren();
            taixiu.removeFromParent(true);
            taixiu = null;
        },

        onEnter: function(){
            this._super();

        },
    }
)

TaiXiuGUI.arrHistory = [];
TaiXiuGUI.detailHis = {
    id : "#123456",
    result : 13,
    xucxac1 : 1,
    xucxac2 : 6,
    xucxac3 : 6,
}

TaiXiuGUI.BTN_SOICAU = 2;
TaiXiuGUI.BTN_SQUEZZE = 3;
TaiXiuGUI.BTN_CHANGE_ROOM = 4;
TaiXiuGUI.BTN_TOP = 5;
TaiXiuGUI.BTN_GUILD = 6;
TaiXiuGUI.BTN_LSGD = 7;
TaiXiuGUI.BTN_CLOSE = 8;
TaiXiuGUI.BTN_EVENT = 9;
TaiXiuGUI.BTN_CHAT = 10;
TaiXiuGUI.BTN_CLOSE_CHAT = 11;
TaiXiuGUI.BTN_SEND_CHAT = 12

addTaiXiu = function () {
    if (taixiu) return;
    taixiu = new TaiXiuGUI();
    var curScene = SceneMgr.getInstance().getRunningScene();
    curScene.addGUI(taixiu, BaseScene.INDEX_MINIGAME_GUI, centerRing.INDEX_TAI_XIU);
};

TaiXiuLogic = {};

