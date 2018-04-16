var TranferMoney = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("TranferMoney");
            cc.log("CashMoney");
            this.createLayout(this,"pn_tranfermoney",cc.p(640,370),null,cc.size(1280,720),false);

            this.createText(this.pn_tranfermoney, "lb_1", cc.p(195, 510), "ID tài khoản: ", fontTahoma.fontName, 18);
            this.lb_1.ignoreContentAdaptWithSize(false);
            this.lb_1.setContentSize(cc.size(150, 26));
            this.lb_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_1.setColor(color_zo);

            this.createText(this.pn_tranfermoney, "lb_2", cc.p(195, 454), "Tên người nhận: ", fontTahoma.fontName, 18);
            this.lb_2.ignoreContentAdaptWithSize(false);
            this.lb_2.setContentSize(cc.size(150, 26));
            this.lb_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_2.setColor(color_zo);

            this.createText(this.pn_tranfermoney, "lb_3", cc.p(195, 398), "Số tiền: ", fontTahoma.fontName, 18);
            this.lb_3.ignoreContentAdaptWithSize(false);
            this.lb_3.setContentSize(cc.size(150, 26));
            this.lb_3.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_3.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_3.setColor(color_zo);

            this.createText(this.pn_tranfermoney, "lb_4", cc.p(195, 342), "Tiền thực nhận: ", fontTahoma.fontName, 18);
            this.lb_4.ignoreContentAdaptWithSize(false);
            this.lb_4.setContentSize(cc.size(150, 26));
            this.lb_4.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_4.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_4.setColor(color_zo);

            this.createText(this.pn_tranfermoney, "lb_5", cc.p(195, 260), "Nội dung: ", fontTahoma.fontName, 18);
            this.lb_5.ignoreContentAdaptWithSize(false);
            this.lb_5.setContentSize(cc.size(150, 26));
            this.lb_5.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_5.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_5.setColor(color_zo);

            this.createText(this.pn_tranfermoney, "lb_6", cc.p(195, 180), "Mã OTP: ", fontTahoma.fontName, 18);
            this.lb_6.ignoreContentAdaptWithSize(false);
            this.lb_6.setContentSize(cc.size(150, 26));
            this.lb_6.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_6.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.lb_6.setColor(color_zo);

            this.createImage(this.pn_tranfermoney, "sp_name_id", cc.p(460,510), res_login_scene + "bg_edit.png", cc.size(350, 51));
            this.createEditBox(this.pn_tranfermoney,"ed_name_id",cc.p(460,510),"","Nhập ID tài khoản người nhận",fontArial.fontName,22,cc.size(330,51   ),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_name_id.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_name_id.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_tranfermoney, "sp_name", cc.p(460,454), res_login_scene + "bg_edit.png", cc.size(350, 51));
            this.createEditBox(this.pn_tranfermoney,"ed_name",cc.p(460,454),"","Nhập tên người nhận",fontArial.fontName,22,cc.size(330,51),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_name.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_name.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_tranfermoney, "sp_money_tran", cc.p(460,398), res_login_scene + "bg_edit.png", cc.size(350, 51));
            this.createEditBox(this.pn_tranfermoney,"ed_money_tran",cc.p(460,398),"","Số tiền tối thiều 10.000",fontArial.fontName,22,cc.size(330,51),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_money_tran.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_money_tran.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_tranfermoney, "sp_money_ori", cc.p(460,342), res_login_scene + "bg_edit.png", cc.size(350, 51));
            this.createEditBox(this.pn_tranfermoney,"ed_money_ori",cc.p(460,342),"","Số tiền thực nhận",fontArial.fontName,22,cc.size(330,51),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_money_ori.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_money_ori.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_tranfermoney, "sp_content", cc.p(460,260), res_login_scene + "bg_edit.png", cc.size(350, 92));
            this.createEditBox(this.pn_tranfermoney,"ed_content",cc.p(460,260),"","",fontArial.fontName,22,cc.size(330,92),null,cc.TEXT_ALIGNMENT_CENTER,160);
            this.ed_content.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_content.setFontColor(cc.color.BLACK);

            this.createImage(this.pn_tranfermoney, "sp_otp", cc.p(379,180), res_login_scene + "bg_edit_s.png", cc.size(185, 56));
            this.createEditBox(this.pn_tranfermoney,"ed_otp",cc.p(379,180),"","Mã OTP",fontArial.fontName,22,cc.size(165,56),null,cc.TEXT_ALIGNMENT_CENTER,6);
            this.ed_otp.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_otp.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_name_id.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_name.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_money_tran.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_money_ori.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_content.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_name_id.nextTabFocus = this.ed_name;
                this.ed_name.nextTabFocus = this.ed_money_tran;
                this.ed_money_tran.nextTabFocus = this.ed_money_ori;
                this.ed_money_ori.nextTabFocus = this.ed_content;
                this.ed_content.nextTabFocus = this.ed_otp;
                this.ed_otp.nextTabFocus = this.ed_name_id;
            }

            this.createButton(this.pn_tranfermoney,"bt_get_otp",TranferMoney.BTN_GET_OTP,cc.p(557,180),true,res_Payment + "bt_otp.png",res_Payment + "bt_otp.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this.pn_tranfermoney,"bt_tranfer",TranferMoney.BTN_TRANFER,cc.p(460,93),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_tranfer.setTitleText("XÁC NHẬN");
            this.bt_tranfer.setTitleFontName(fontTahomaB.fontName);
            this.bt_tranfer.setTitleFontSize(25);

            this.createListView(this, "lv_content", cc.p(940, 334), cc.size(510, 350));
            this.lv_content.setScrollBarEnabled(false);
            this.lv_content.setTouchEnabled(false);
            this.lv_content.setScrollBarEnabled(false);

            var array = guildTranfer();
            this.initRichText(array);
        },

        initRichText : function(array){
            this.lv_content.removeAllItems();
            this.lv_content.removeAllChildren();

            for(var j = 0; j < array.length; j ++) {
                var cellList = new ccui.Layout();
                cellList.height = 30;
                cellList.width =  this.lv_content.width;
                cellList.setPosition(cc.p(0,0));

                var uiRichGold = new ccui.RichText();
                uiRichGold.ignoreContentAdaptWithSize(false);
                uiRichGold.setContentSize(cc.size(500, 20));
                uiRichGold.setPosition(cc.p(cellList.width/2, cellList.height/2));

                var content = array[j];
                var kc = 0;

                for (var i = 0; i < content.length; i++) {
                    var noidung = content[i][0];
                    var color = content[i][1];
                    if(color.search("sprite_") == -1) {
                        var lbgold = new ccui.RichElementText(1, GuiUtility.color(color), 255, noidung, fontArial.fontName, 18);
                    }else{
                        var lbgold = new ccui.RichElementImage(1, cc.color.WHITE, 255, noidung);
                        kc = kc + color.substring(7, color.length);
                    }
                    uiRichGold.pushBackElement(lbgold);
                }

                //cc.log("cell height " + kc);
                var numcell = Math.round(kc/20);
                //cc.log("cell num " + numcell);
                cellList.addChild(uiRichGold);
                this.lv_content.pushBackCustomItem(cellList);
                if(numcell > 0){
                    for(var h = 0; h < numcell; h ++){
                        var cellList = new ccui.Layout();
                        cellList.height = 20;
                        cellList.width =  this.lv_content.width;
                        cellList.setPosition(cc.p(0,0));
                        this.lv_content.pushBackCustomItem(cellList);
                    }
                }
            }
        },

        onEnter: function(){
            this._super();

        },
    }
)

TranferMoney.BTN_GET_OTP = 1;
TranferMoney.BTN_TRANFER = 1;

