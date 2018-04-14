

var hosocanhan = null;
var num_avatar = 13;

var HoSoCaNhan = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.changePass = null;
            return true;
        },
        customizeGUI: function () {
            //cc.log("HoSoCaNhan");
            this.createLayout(this,"ProfileUser",cc.p(640,370),null,cc.size(1280,720),false);
            this.createHoSo();
        },

        createHoSo : function(){
            this.createLayout(this.ProfileUser,"HoSoCaNhan",cc.p(640,370),null,cc.size(1280,720),false);
            this.createSprite(this.HoSoCaNhan,"sp_avatar",cc.p(296,384),res_Avatar + userInfo.Info.avatar + ".png");
            this.createButton(this.HoSoCaNhan,"bt_selfphi",HoSoCaNhan.BTN_CAMERA,cc.p(231,449),true,res_HoSo + "bt_selphi.png",res_HoSo + "bt_selphi.png",ccui.Widget.PLIST_TEXTURE);

            this.createButton(this.HoSoCaNhan,"bt_change_pass",HoSoCaNhan.BTN_CHANGE_PASS,cc.p(296,198),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_change_pass.setTitleText("ĐỔI MẬT KHẨU");
            this.bt_change_pass.setTitleFontName(fontTahomaB.fontName);
            this.bt_change_pass.setTitleFontSize(25);

            this.createText(this.HoSoCaNhan, "lb_1", cc.p(623, 467), "Tên nhân vật: ", fontTahoma.fontName, 21);
            this.lb_1.ignoreContentAdaptWithSize(false);
            this.lb_1.setContentSize(cc.size(140, 26));
            this.lb_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_1.setColor(color_zo);

            this.createText(this.HoSoCaNhan, "lb_2", cc.p(623, 408), "ID: ", fontTahoma.fontName, 21);
            this.lb_2.ignoreContentAdaptWithSize(false);
            this.lb_2.setContentSize(cc.size(140, 26));
            this.lb_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_2.setColor(color_zo);

            this.createText(this.HoSoCaNhan, "lb_3", cc.p(623, 346), "Số dư Zo: ", fontTahoma.fontName, 21);
            this.lb_3.ignoreContentAdaptWithSize(false);
            this.lb_3.setContentSize(cc.size(140, 26));
            this.lb_3.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_3.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_3.setColor(color_zo);

            this.createText(this.HoSoCaNhan, "lb_4", cc.p(623, 292), "Số dư Xu: ", fontTahoma.fontName, 21);
            this.lb_4.ignoreContentAdaptWithSize(false);
            this.lb_4.setContentSize(cc.size(140, 26));
            this.lb_4.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_4.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_4.setColor(color_zo);

            this.createText(this.HoSoCaNhan, "lb_5", cc.p(623, 232), "Số điện thoại: ", fontTahoma.fontName, 21);
            this.lb_5.ignoreContentAdaptWithSize(false);
            this.lb_5.setContentSize(cc.size(140, 26));
            this.lb_5.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_5.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_5.setColor(color_zo);

            this.createText(this.HoSoCaNhan, "lb_6", cc.p(759, 127), "CHÚ Ý: Khách hàng vui lòng cập nhập thông tin cá nhân để nhận sự hỗ trợ" +
                "\ntốt nhất từ nhà phát triển: ", fontTahoma.fontName, 20);;
            this.lb_6.ignoreContentAdaptWithSize(false);
            this.lb_6.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_6.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createText(this.HoSoCaNhan, "lb_nickname", cc.p(800, 467), userInfo.Info.nickname, fontTahoma.fontName, 21);
            this.lb_nickname.ignoreContentAdaptWithSize(false);
            this.lb_nickname.setContentSize(cc.size(200, 26));
            this.lb_nickname.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_nickname.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.HoSoCaNhan, "lb_id", cc.p(800, 408), userInfo.Info.id, fontTahoma.fontName, 21);
            this.lb_id.ignoreContentAdaptWithSize(false);
            this.lb_id.setContentSize(cc.size(200, 26));
            this.lb_id.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_id.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.HoSoCaNhan, "lb_money_zo", cc.p(800, 346), userInfo.Info.zoMoney + " " + DON_VI_TIEN_THAT, fontTahoma.fontName, 21);
            this.lb_money_zo.ignoreContentAdaptWithSize(false);
            this.lb_money_zo.setContentSize(cc.size(200, 26));
            this.lb_money_zo.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_money_zo.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.HoSoCaNhan, "lb_money_xu", cc.p(800, 292), userInfo.Info.xuMoney + " " + DON_VI_TIEN_TANG, fontTahoma.fontName, 21);
            this.lb_money_xu.ignoreContentAdaptWithSize(false);
            this.lb_money_xu.setContentSize(cc.size(200, 26));
            this.lb_money_xu.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_money_xu.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            var str_mo = "Chưa cập nhật";
            if(userInfo.Info.mobile !=  "") {
                str_mo = userInfo.Info.mobile;
            }else{
                this.createButton(this.HoSoCaNhan,"bt_edit",HoSoCaNhan.BTN_EDIT,cc.p(1000,232),true,res_HoSo + "bt_edit.png",res_HoSo + "bt_edit.png",ccui.Widget.PLIST_TEXTURE);
            }
            this.createText(this.HoSoCaNhan, "lb_mobile", cc.p(800, 232), str_mo, fontTahoma.fontName, 21);
            this.lb_mobile.ignoreContentAdaptWithSize(false);
            this.lb_mobile.setContentSize(cc.size(200, 26));
            this.lb_mobile.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_mobile.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createLayout(this.ProfileUser,"pnavatar",cc.p(640,360),null,cc.size(1280,720),false);

        },

        createAvatar : function(){
            this.HoSoCaNhan.setVisible(false);
            this.createListView(this.pnavatar, "lv_avatar", cc.p(640, 330), cc.size(1070, 420));
            this.lv_avatar.setTouchEnabled(true);
            this.lv_avatar.setBounceEnabled(true);
            this.lv_avatar.setClippingEnabled(true);
            this.lv_avatar.setDirection(ccui.ScrollView.DIR_VERTICAL);
            var num_row =  parseInt(num_avatar/5);
            var num_du = num_avatar - num_row*5;
            cc.log("num_row " + num_row);

            var stt = 1;
            var maxfor = 0;
            if (num_du > 0)
                maxfor = num_row + 1

            for(var i = 0; i < maxfor ; i ++){
                var listview = new ccui.ListView();
                listview.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
                listview.setTouchEnabled(false);
                listview.setBounceEnabled(true);
                listview.setClippingEnabled(true);
                listview.setContentSize(cc.size(1075, 206));
                var st = 5;
                if(i == maxfor - 1)
                    st = num_du;
                for (var j = 0; j < st; j++) {
                    var cellList = new ccui.Layout();
                    cellList.height = 206;
                    cellList.width =  213;

                    var button = new ccui.Button();
                    GuiUtility.loadTextureNormal(button, res_Avatar + stt + ".png");
                    GuiUtility.loadTexturePressed(button, res_Avatar + stt + ".png");
                    GuiUtility.loadTextureDisabled(button, res_Avatar + stt + ".png");
                    button.setPosition(cellList.width/2, cellList.height/2);
                    button.setName(stt);

                    button.addTouchEventListener(function (sender, type) {
                        switch (type) {
                            case ccui.Widget.TOUCH_ENDED:
                                this.Click_Avatar(sender.name);
                                break;
                        }

                    }, this);
                    cellList.addChild(button);
                    this.createSprite(cellList,"sp_checkGreen_" + stt,cc.p(42,cellList.height - 38),res_HoSo + "checkGreen.png");
                    if(stt == userInfo.Info.avatar){
                        this["sp_checkGreen_" + stt].setVisible(true);
                    }else{
                        this["sp_checkGreen_" + stt].setVisible(false);
                    }
                    stt++;
                    listview.pushBackCustomItem(cellList);
                }
                this.lv_avatar.pushBackCustomItem(listview);
            }

            this.createButton(this.pnavatar,"bt_update_avatar",HoSoCaNhan.BTN_UPDATE_AVATAR,cc.p(640,85),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_update_avatar.setTitleText("CẬP NHẬT");
            this.bt_update_avatar.setTitleFontName(fontTahomaB.fontName);
            this.bt_update_avatar.setTitleFontSize(25);
            this.createButton(this.pnavatar,"bt_back",HoSoCaNhan.BTN_BACK,cc.p(138,634),true,res_TableGui + "bt_back.png",res_TableGui + "bt_back.png",ccui.Widget.PLIST_TEXTURE);
        },

        Click_Avatar : function(stt){
            cc.log("click ava : " + stt);
            for(var i = 1; i < 14; i ++) {
                this["sp_checkGreen_" + i].setVisible(false);
            }

            this["sp_checkGreen_" + stt].setVisible(true);
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case HoSoCaNhan.BTN_CAMERA:
                    this.createAvatar();
                    break;
                case HoSoCaNhan.BTN_BACK:
                    this.backToHoSo();
                    break;
                case HoSoCaNhan.BTN_UPDATE_AVATAR:
                    this.updateAvatarUser();
                    this.HoSoCaNhan.setVisible(true);
                    this.pnavatar.removeAllChildren();
                    break;
                case HoSoCaNhan.BTN_CHANGE_PASS:
                    this.addChangePassword();
                    break;
            }
        },

        addChangePassword : function(){
            if(this.changePass == null){
                this.changePass = new ChangePassword(this);
                this.addChild(this.changePass);
            }
        },

        backToHoSo : function(){
            this.HoSoCaNhan.setVisible(true);
            this.pnavatar.removeAllChildren();
        },

        updateAvatarUser : function(){
            cc.log("update avatar User");
        },

        onEnter: function(){
            this._super();

        },
    }
)

HoSoCaNhan.BTN_CAMERA = 1;
HoSoCaNhan.BTN_CHANGE_PASS = 2;
HoSoCaNhan.BTN_EDIT = 3;
HoSoCaNhan.BTN_UPDATE_AVATAR = 4;
HoSoCaNhan.BTN_BACK = 5;


