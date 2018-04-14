var ChangePassword = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("ChangePassword");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);
            this.createLayout(this,"pn_changePass",cc.p(640,370),null,cc.size(1280,720),false);

            this.createImage(this.pn_changePass, "bg_sign_up", cc.p(640, 388), res_SignUp + "bg_signUp.png", cc.size(801, 534));
            this.createImage(this.pn_changePass, "txl_sign_up", cc.p(742, 579), res_HoSo + "tx_changepass.png", cc.size(343, 54));
            this.createButton(this.pn_changePass,"bt_close",ChangePassword.CLOSE,cc.p(1000,579),true,res_SignUp + "b_close.png",res_SignUp + "b_close.png",ccui.Widget.PLIST_TEXTURE);

            this.createImage(this.pn_changePass, "sp_old_pass", cc.p(745,500), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_changePass,"ed_old_pass",cc.p(745,500),"","Mật khẩu cũ",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_old_pass.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_old_pass.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_changePass, "sp_new_pass", cc.p(745,420), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_changePass,"ed_new_pass",cc.p(745,420),"","Mật khẩu mới",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_new_pass.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_new_pass.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_changePass, "sp_re_new_pass", cc.p(745,340), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_changePass,"ed_re_new_pass",cc.p(745,340),"","Nhập lại mật khẩu mới",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_re_new_pass.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_re_new_pass.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_changePass, "sp_captcha_change", cc.p(679,260), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_changePass,"ed_captcha_change",cc.p(679,260),"","Nhập mã",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_change.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_change.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_old_pass.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_new_pass.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_re_new_pass.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_captcha_change.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_old_pass.nextTabFocus = this.ed_new_pass;
                this.ed_new_pass.nextTabFocus = this.ed_re_new_pass;
                this.ed_re_new_pass.nextTabFocus = this.ed_captcha_change;
                this.ed_captcha_change.nextTabFocus = this.ed_old_pass;
            }

            this.createButton(this.pn_changePass,"bt_refresh",ChangePassword.BTN_REFRESH,cc.p(960,260),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);

            this.createButton(this.pn_changePass,"bt_change_pass",ChangePassword.BTN_CHANGE_PASS,cc.p(735,171),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_change_pass.setTitleText("TIẾP TỤC");
            this.bt_change_pass.setTitleFontName(fontTahomaB.fontName);
            this.bt_change_pass.setTitleFontSize(25);

            this.pn_changePass.runAction(cc.sequence(cc.scaleTo(0.05,1.1), cc.delayTime(0.1), cc.scaleTo(0.10,1)));
            this.addSceneCaptcha();
        },

        addSceneCaptcha : function(){
            if(captcha_base == null){
                captcha_base = new Captcha(this, 850, 260);
                this.pn_changePass.addChild(captcha_base);
            }
        },

        onEnter: function(){
            this._super();
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case ChangePassword.CLOSE:
                    this.destroyBase();
                    break;
                case ChangePassword.BTN_CREATE:
                    this.callRegisterAccount();
                    break;
                case ChangePassword.BTN_REFRESH:
                    if(captcha_base != null)
                        captcha_base.getCatpcha();
                    break;
                case ChangePassword.BTN_CHANGE_PASS:
                    this.callChangePassword();
                    break;
            }
        },

        callChangePassword:function(){
            var oldpass = this.ed_old_pass.getString();
            var newpass = this.ed_new_pass.getString();
            var renewpass = this.ed_re_new_pass.getString();
            var captcha = this.ed_captcha_change.getString();

            if (userInfo.passWord != null && userInfo.passWord != "") {
                if (oldpass != userInfo.passWord) {
                    showAlam(0, "Mật khẩu hiện tại không chính xác!", null);
                    return;
                }
            }
            var str = "";
            if (oldpass == "") {
                str = "Mật khẩu hiện tại không chính xác!";
            } else if (newpass == null || newpass.length < 6 || newpass.length > 16) {
                str = ""
                gI.popUp.openPanel_Alert_Lobby("Password trong khoảng từ 6 - 16 ký tự!");
            } else if (newpass == "123456" || newpass == "abc123" || newpass == "ABC123" || newpass == "000000" || newpass == "111111" || newpass == "222222"
                || newpass == "333333" || newpass == "444444" || newpass == "555555" || newpass == "666666" || newpass == "777777" || newpass == "888888"
                || newpass == "999999") {
                str = "Mật khẩu quá đơn giản. Vui lòng nhập lại!";
            } else if (newpass == "") {
                str = "Bạn chưa nhập mật khẩu mới!";
            } else if (oldpass == newpass) {
                str = "Mật khẩu mới giống mật khẩu hiện tại của bạn!";
            } else if (renewpass == "" || newpass != renewpass) {
                str = "Nhập lại mật khẩu không chính xác!";
            }

            if(str != ""){
                showAlam(0, str, null);
                return;
            }

            var url = CmdChangePassword(oldpass, newpass, captcha);
            conectsocket.gameClient.send(url);
        },

        changePassSuccess : function(data, error){
            cc.log("change pass = " + data + " loi = " + error);
            if(error != ""){
                showAlam(0, error, null);
                return;
            }

            if(data != ""){
                showAlam(0, data, null);
                this.destroyBase();
            }
        },

        destroyBase : function (){
            this.runAction((cc.sequence(cc.scaleTo(0.1, 1.1), cc.delayTime(0.1), cc.scaleTo(0.15,0), cc.callFunc(function(){
                playerInfo.hscn.changePass.removeAllChildren(true);
                playerInfo.hscn.changePass = null;
                if(captcha_base != null)
                    captcha_base.destroySceneCaptcha();
            }))));
        }
    }
)
ChangePassword.CLOSE = 1;
ChangePassword.BTN_REFRESH = 2;
ChangePassword.BTN_CHANGE_PASS = 3;
