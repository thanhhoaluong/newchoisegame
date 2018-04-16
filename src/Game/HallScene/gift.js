var GiftGame = LayerTableFrame.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("GiftGame");
            this.createImage(this,"title",cc.p(640,640),res_TableGui + "tx_gift.png",cc.size(347,52));

            this.createLayout(this,"pn_gift",cc.p(640,370),null,cc.size(1280,720),false);

            this.createImage(this.pn_gift, "sp_gift", cc.p(640,522), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.pn_gift,"ed_gift",cc.p(640,522),"","Nhập mã Giftcode",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_gift.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_gift.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_gift, "sp_captcha_gift", cc.p(574,445), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.pn_gift,"ed_captcha_gift",cc.p(574,445),"","Nhập mã",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_captcha_gift.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha_gift.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_gift.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_captcha_gift.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_gift.nextTabFocus = this.ed_captcha_gift;
                this.ed_captcha_gift.nextTabFocus = this.ed_gift;
            }

            this.createButton(this.pn_gift,"bt_refresh",GiftGame.BTN_REFRESH,cc.p(855,445),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_gift,"bt_Push_gift",GiftGame.PUSH_GIFT,cc.p(640,346),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_Push_gift.setTitleText("XÁC NHẬN");
            this.bt_Push_gift.setTitleFontName(fontTahomaB.fontName);
            this.bt_Push_gift.setTitleFontSize(25);

            this.createSprite(this.pn_gift,"sp_line",cc.p(640,270),res_MenuSetting + "line.png");

            this.createText(this.pn_gift, "lb_1", cc.p(160, 210), "Lưu ý", fontTahoma.fontName, 23);
            this.lb_1.setColor(cc.color(255,255,0));

            this.createText(this.pn_gift, "lb_2", cc.p(640, 164), "Giftcode sẽ được nhận miễn phí từ các sự kiện tại Fanpage, " +
                "Group của NPH và Đại lý chính thức của " + TEN_GAME_HOA, fontTahoma.fontName, 21);
            this.lb_2.ignoreContentAdaptWithSize(false);
            this.lb_2.setContentSize(cc.size(1020, 26));
            this.lb_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.createText(this.pn_gift, "lb_3", cc.p(640, 125), "Giftcode chỉ sử dụng 1 lần và mỗi tài khoản chỉ sử dụng được 1 loại code", fontTahoma.fontName, 21);
            this.lb_3.ignoreContentAdaptWithSize(false);
            this.lb_3.setContentSize(cc.size(1020, 26));
            this.lb_3.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_3.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            this.addSceneCaptcha();
        },

        addSceneCaptcha : function(){
            if(captcha_base == null){
                captcha_base = new Captcha(this, 745, 445);
                this.pn_gift.addChild(captcha_base);
            }
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case GiftGame.BTN_REFRESH:
                    if(captcha_base != null)
                        captcha_base.getCatpcha();
                    break;
            }
        },

        onEnter: function(){
            this._super();

        },
    }
)

GiftGame.BTN_REFRESH = 1;
GiftGame.PUSH_GIFT = 2;

