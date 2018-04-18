var DrawCau = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.pn_soicau = null;
            this.pn_thongke = null;
            this.max_column = 23;
            this.arrTableSC = [];
            this.arrLineSC = [];
            this.myPage = 1;
            return true;
        },
        customizeGUI: function () {
            cc.log("DrawCau");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);

            this.createImage(this,"bg_soicau",cc.p(640,360),res_TableGui + "bg_table.png",cc.size(1103, 642));
            this.createButton(this,"bt_close",DrawCau.BTN_CLOSE,cc.p(1140,639),true,res_SignUp + "b_close.png",res_SignUp + "b_close.png",ccui.Widget.PLIST_TEXTURE);
            this.createImage(this,"title",cc.p(640,640),res_TaiXiu + "tx_soicau.png",cc.size(172,45));

            this.createButton(this,"bt_back",DrawCau.BTN_BACK,cc.p(180,330),true,res_TaiXiu + "bt_back_sc.png",res_TaiXiu + "bt_back_sc.png",ccui.Widget.PLIST_TEXTURE);
            this.createButton(this,"bt_next",DrawCau.BTN_NEXT,cc.p(1100,330),true,res_TaiXiu + "bt_back_sc.png",res_TaiXiu + "bt_back_sc.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_next.setScaleX(-1);
            this.bt_back.loadTextureDisabled(res_TaiXiu + "bt_back_sc_s.png");
            this.bt_next.loadTextureDisabled(res_TaiXiu + "bt_back_sc_s.png");

            this.bt_back.setEnabled(false);
            this.bt_back.setBright(false);

            this.createListView(this, "list_soicau", cc.p(640, 330), cc.size(836, 545));
            this.list_soicau.setTouchEnabled(false);
            this.list_soicau.setBounceEnabled(true);
            this.list_soicau.setClippingEnabled(true);
            this.list_soicau.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
            for(var i = 0; i < 2; i ++){
                var celllist = new ccui.Layout();
                celllist.height = this.list_soicau.height;
                celllist.width = this.list_soicau.width;;
                celllist.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                if(i == 0) {
                    celllist.setBackGroundColor(GuiUtility.color("#000000"));
                    celllist.setBackGroundColorOpacity(0);
                    this.pn_soicau = celllist;
                }else {
                    celllist.setBackGroundColor(GuiUtility.color("#354000"));
                    this.pn_thongke = celllist;
                }
                this.list_soicau.pushBackCustomItem(celllist);
            }

            /// fix du lieu
            for(var i = 0; i < 50; i ++){
                var detoh = null;
                if(getRandomInt(0,1) == 0)
                    detoh = dataDetailSoiCauTai;
                else
                    detoh = dataDetailSoiCauXiu;
                dataSoiCauTX.push(detoh);
                dataSoiCauTXLine.push(detoh);
            }

            this.createLayoutSoiCau();
        },

        createLayoutSoiCau : function(){
            this.createSprite(this.pn_soicau,"sp_1",cc.p(150 ,518),res_TaiXiu + "bg_cau_t.png");
            this.createSprite(this.pn_soicau,"sp_2",cc.p(686 ,518),res_TaiXiu + "bg_cau_x.png");

            this.createText(this.pn_soicau, "lb_cau_tai_1", cc.p(150, 518), "TÀI: 0", fontTahoma.fontName, 35);
            this.lb_cau_tai_1.ignoreContentAdaptWithSize(false);
            this.lb_cau_tai_1.setContentSize(cc.size(150, 40));
            this.lb_cau_tai_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_1.setColor(cc.color.BLACK);
            this.createText(this.pn_soicau, "lb_cau_xiu_1", cc.p(686, 518), "XỈU: 0", fontTahoma.fontName, 35);
            this.lb_cau_xiu_1.ignoreContentAdaptWithSize(false);
            this.lb_cau_xiu_1.setContentSize(cc.size(150, 40));
            this.lb_cau_xiu_1.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_xiu_1.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createSprite(this.pn_soicau,"table_sc",cc.p(418 ,390),res_TaiXiu + "table_sc.png");
            this.createLayout(this.pn_soicau,"dataTableSC",cc.p(418,390),null,cc.size(759,199),false);
            this.dataTableSC.setClippingEnabled(true);

            this.createSprite(this.pn_soicau,"sp_3",cc.p(150 ,250),res_TaiXiu + "bg_cau_t.png");
            this.createSprite(this.pn_soicau,"sp_3",cc.p(686 ,250),res_TaiXiu + "bg_cau_x.png");

            this.createText(this.pn_soicau, "lb_cau_tai_2", cc.p(150, 250), "TÀI: 0", fontTahoma.fontName, 35);
            this.lb_cau_tai_2.ignoreContentAdaptWithSize(false);
            this.lb_cau_tai_2.setContentSize(cc.size(150, 40));
            this.lb_cau_tai_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_2.setColor(cc.color.BLACK);
            this.createText(this.pn_soicau, "lb_cau_xiu_2", cc.p(686, 250), "XỈU: 0", fontTahoma.fontName, 35);
            this.lb_cau_xiu_2.ignoreContentAdaptWithSize(false);
            this.lb_cau_xiu_2.setContentSize(cc.size(150, 40));
            this.lb_cau_xiu_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_xiu_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            this.createSprite(this.pn_soicau,"line_sc",cc.p(418 ,122),res_TaiXiu + "line_sc.png");
            this.createLayout(this.pn_soicau,"dataLineSC",cc.p(412,122),null,cc.size(751,190),false);
            this.dataLineSC.setClippingEnabled(true);

            TaiXiuLogic.soicau = new TaiXiuLogic.SoiCau();
            TaiXiuLogic.soicau.checkDataTableSoiCau();
        },

        drawTableSoiCau : function(){
            var bdY = 182;
            var posX = 17;
            var posY = 182;
            var num_inColumn = 1;
            var totalColum = 1;
            var arrEachColumn = [];


            for(var i = 0; i < dataSoiCauTX.length; i ++){
                var str = "";
                var col = null;
                if(dataSoiCauTX[i].result >= 11) {
                    str = "sc_t";
                    col = cc.color.WHITE;
                }else {
                    str = "sc_x";
                    col = cc.color.BLACK;
                }

                this.createSprite(this.dataTableSC,"sc_" + i,cc.p(posX ,posY),res_TaiXiu + str + ".png");
                this.createText(this["sc_" + i], "tx_" + i, cc.p(this["sc_" + i].width/2, this["sc_" + i].height/2), dataSoiCauTX[i].result, fontTahoma.fontName, 17);
                this["tx_" + i].setColor(col);
                this.arrTableSC.push(this["sc_" + i]);
                if(i != (dataSoiCauTX.length - 1)){
                    if(dataSoiCauTX[i + 1].result == dataSoiCauTX[i].result){
                        posX = posX;
                        posY = posY - 33;
                        num_inColumn = num_inColumn + 1;
                        if(num_inColumn > 6){
                            posX = posX + 32.9;
                            posY = bdY;
                            arrEachColumn.push(num_inColumn - 1);
                            num_inColumn = 1;
                            totalColum = totalColum + 1;
                        }
                    }else{
                        posX = posX + 32.9;
                        posY = bdY;
                        arrEachColumn.push(num_inColumn);
                        num_inColumn = 1;
                        totalColum = totalColum + 1;
                    }
                }else{
                    arrEachColumn.push(num_inColumn);
                }
            }
            //cc.log("total colum = " + totalColum);
            //cc.log("arrEachColumn = " + arrEachColumn);
            if(totalColum > this.max_column){
                var down_col = totalColum - this.max_column;
                for(var i = 0; i < this.arrTableSC.length; i ++){
                    this.arrTableSC[i].setPosition(cc.p(this.arrTableSC[i].getPositionX() - down_col * 32.9, this.arrTableSC[i].getPositionY()));
                }

            }
            var num_slice = 0;
            for(var i = 0; i < down_col; i++){
                num_slice = num_slice + arrEachColumn[i];
            }
            //cc.log("num_slice = " + num_slice);
            dataSoiCauTX = dataSoiCauTX.splice(num_slice,dataSoiCauTX.length);
            //cc.log("dataSoiCauTX = " + dataSoiCauTX);

            this.drawLineSoiCau();
        },

        drawLineSoiCau : function(){
            var bdX = 738.6;
            var posX = 736;
            var posY = 172;

            for(var i = (dataSoiCauTXLine.length - 1); i >= 0; i --){
                var str = "";
                if(dataSoiCauTXLine[i].result >= 11) {
                    str = "sc_t";
                    col = cc.color.WHITE;
                }else {
                    str = "sc_x";
                    col = cc.color.BLACK;
                }
                this.createSprite(this.dataLineSC,"sc_" + i,cc.p(posX ,posY),res_TaiXiu + str + ".png");
                this.createText(this["sc_" + i], "tx_" + i, cc.p(this["sc_" + i].width/2, this["sc_" + i].height/2), dataSoiCauTXLine[i].result, fontTahoma.fontName, 17);
                this["tx_" + i].setColor(col);
                this.arrLineSC.push(this["sc_" + i]);

                if(i > 0){
                    posY = posY;
                    posX = posX - 32.8;
                    if(posX < 0){
                        posX = bdX;
                        posY = posY - 38
                    }
                }
            }
            if(dataSoiCauTXLine.length > 115){
                dataSoiCauTXLine = dataSoiCauTXLine.splice((dataSoiCauTX.length - 115),dataSoiCauTX.length);
            }
        },

        createLayoutThongKe : function(){
            this.createLayout(this,"pn_thongke",cc.p(640,370),null,cc.size(835, 545),false);


            return this.pn_thongke;
        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case DrawCau.BTN_CLOSE:
                    this.destroySoiCau();
                    break;
                case DrawCau.BTN_BACK:
                    this.chosePageList(0);
                    break;
                case DrawCau.BTN_NEXT:
                    this.chosePageList(1);
                    break;
            }
        },

        chosePageList : function(nextback){
            if(nextback == 0) { // back
                this.bt_next.setEnabled(true);
                this.bt_next.setBright(true);
                this.bt_back.setEnabled(false);
                this.bt_back.setBright(false);
                this.myPage = 1;

            }else{ // next
                this.bt_next.setEnabled(false);
                this.bt_next.setBright(false);
                this.bt_back.setEnabled(true);
                this.bt_back.setBright(true);
                this.myPage = 2;
            }
            this.list_soicau.scrollToItem(this.myPage - 1, cc.p(0.5, 0.5), cc.p(0.5, 0.5), 0.5);
        },

        destroySoiCau : function(){
            this.removeAllChildren();
            taixiu.soicau .removeFromParent(true);
            taixiu.soicau = null;
            dataSoiCauTX = [];
        },

        onEnter: function(){
            this._super();

        },
    }
)

DrawCau.BTN_CLOSE = 1;
DrawCau.BTN_BACK = 2;
DrawCau.BTN_NEXT = 3;

