var DrawCau = ToolTipBaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.pn_soicau = null;
            this.pn_thongke = null;
            this.is_create_thongke = false;
            this.max_column = 23;
            this.arrTableSC = [];
            this.arrLineSC = [];

            this.arrTable = []; /// ben ve duong line
            this.arrTableLineColor = [];

            this.save_stt = 0;
            this.myPage = 1;

            this.lineTotal = null;
            this.lineXX1 = null;
            this.lineXX2 = null;
            this.lineXX3 = null;

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
                    celllist.setBackGroundColorOpacity(0);
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
            ////
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
            this.createSprite(this.pn_soicau,"line_sc",cc.p(418 ,132),res_TaiXiu + "line_sc.png");
            this.createLayout(this.pn_soicau,"dataTableSC",cc.p(418,315),null,cc.size(759,479),false);
            this.dataTableSC.setClippingEnabled(false);

            this.createSprite(this.dataTableSC,"pn_tooltip_Tb",cc.p(0 ,-25),res_TaiXiu + "bg_tooltip.png");
            this.createText(this.pn_tooltip_Tb, "lb_tooltip_Tb", cc.p(this.pn_tooltip_Tb.width/2, 24), "1000\n123123", fontTahoma.fontName, 16);
            this.lb_tooltip_Tb.ignoreContentAdaptWithSize(false);
            this.lb_tooltip_Tb.setName("lb_tooltip");
            this.lb_tooltip_Tb.setContentSize(cc.size(170, 40));
            this.lb_tooltip_Tb.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_tooltip_Tb.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.pn_tooltip_Tb.setLocalZOrder(200);
            this.pn_tooltip_Tb.setVisible(false);

            this.createSprite(this.pn_soicau,"sp_3",cc.p(150 ,255),res_TaiXiu + "bg_cau_t.png");
            this.createSprite(this.pn_soicau,"sp_3",cc.p(686 ,255),res_TaiXiu + "bg_cau_x.png");

            this.createText(this.pn_soicau, "lb_cau_tai_2", cc.p(150, 255), "TÀI: 0", fontTahoma.fontName, 35);
            this.lb_cau_tai_2.ignoreContentAdaptWithSize(false);
            this.lb_cau_tai_2.setContentSize(cc.size(150, 40));
            this.lb_cau_tai_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            this.lb_cau_tai_2.setColor(cc.color.BLACK);
            this.createText(this.pn_soicau, "lb_cau_xiu_2", cc.p(686, 255), "XỈU: 0", fontTahoma.fontName, 35);
            this.lb_cau_xiu_2.ignoreContentAdaptWithSize(false);
            this.lb_cau_xiu_2.setContentSize(cc.size(150, 40));
            this.lb_cau_xiu_2.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
            this.lb_cau_xiu_2.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

            TaiXiuLogic.soicau = new TaiXiuLogic.SoiCau();
            TaiXiuLogic.soicau.checkDataTableSoiCau();
        },

        drawTableSoiCau : function(){
            var bdY = 397;
            var posX = 17;
            var posY = 397;
            var num_inColumn = 1;
            var totalColum = 1;
            var arrEachColumn = [];

            for(var i = 0; i < dataSoiCauTX.length; i ++){
                if(i != (dataSoiCauTX.length - 1)){
                    if(dataSoiCauTX[i + 1].result == dataSoiCauTX[i].result){
                        num_inColumn = num_inColumn + 1;
                        if(num_inColumn > 6){
                            arrEachColumn.push(num_inColumn - 1);
                            num_inColumn = 1;
                            totalColum = totalColum + 1;
                        }
                    }else{
                        arrEachColumn.push(num_inColumn);
                        num_inColumn = 1;
                        totalColum = totalColum + 1;
                    }
                }else{
                    arrEachColumn.push(num_inColumn);
                }
            }
            //cc.log("totalColum 1 = " + totalColum);
            if(totalColum > this.max_column){
                var down_col = totalColum - this.max_column;
            }
            var num_slice = 0;
            for(var i = 0; i < down_col; i++){
                num_slice = num_slice + arrEachColumn[i];
            }
            dataSoiCauTX = dataSoiCauTX.splice(num_slice,dataSoiCauTX.length);

            //cc.log("dataSoiCauTX 1 = " + dataSoiCauTX.length);
            num_inColumn = 1;

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
                this["sc_" + i].setName(this.save_stt);
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
                this.save_stt++;
            }

            this.drawLineSoiCau();
        },

        drawLineSoiCau : function(){
            var bdX = 17;
            var posX = 17;
            var posY = -20;
            var gtX = 32.8;

            if(dataSoiCauTXLine.length > 115){
                dataSoiCauTXLine = dataSoiCauTXLine.splice((dataSoiCauTXLine.length - 115),dataSoiCauTXLine.length);
            }

            for(var i = 0 ; i < dataSoiCauTXLine.length; i ++){
                var str = "";
                if(dataSoiCauTXLine[i].result >= 11) {
                    str = "sc_t";
                    col = cc.color.WHITE;
                }else {
                    str = "sc_x";
                    col = cc.color.BLACK;
                }
                this.createSprite(this.dataTableSC,"sc_" + i,cc.p(posX ,posY),res_TaiXiu + str + ".png");
                this.createText(this["sc_" + i], "tx_" + i, cc.p(this["sc_" + i].width/2, this["sc_" + i].height/2), dataSoiCauTXLine[i].result, fontTahoma.fontName, 17);
                this["tx_" + i].setColor(col);
                this["sc_" + i].setName(this.save_stt);
                this.arrTableSC.push(this["sc_" + i]);

                if(i != (dataSoiCauTX.length - 1)){
                    posY = posY;
                    posX = posX + gtX;
                    if(posX > 754.4){
                        gtX = -32.8;
                        posX = posX + gtX;
                        posY = posY + 38
                    }else if(posX < 0){
                        gtX = 32.8;
                        posX = posX + gtX;
                        posY = posY + 38
                    }
                }
                this.save_stt++
            }
            var arrAllData = dataSoiCauTX.concat(dataSoiCauTXLine);
            this.addToolTipTable(this.dataTableSC, this.arrTableSC, arrAllData, this.pn_tooltip_Tb);
        },

        createLayoutThongKe : function(){
            if(this.is_create_thongke == true)
                return;
            var arrTB1 = [18,15,12,9,6,3];
            var arrTB2 = [6,5,4,3,2,1];
            this.createSprite(this.pn_thongke,"table_1",cc.p(418 ,380),res_TaiXiu + "table_sc.png");
            this.createSprite(this.pn_thongke,"table_2",cc.p(418 ,140),res_TaiXiu + "table_sc.png");

            for(var i =0; i < arrTB1.length; i++){
                this.createText(this.pn_thongke, "lb_" + i, cc.p(15, 478 - i*32.5), arrTB1[i], fontTahoma.fontName, 20);
                this["lb_" + i].setColor(color_zo);
            }
            for(var i =0; i < arrTB2.length; i++){
                this.createText(this.pn_thongke, "lb_" + i, cc.p(15, 238 - i*32.5), arrTB2[i], fontTahoma.fontName, 20);
                this["lb_" + i].setColor(color_zo);
            }
            this.createLayout(this.pn_thongke,"dataTable",cc.p(418,255),null,cc.size(759,479),false);
            //// xu ly data
            dataSoiCauDetail = dataSoiCauTXLine.splice((dataSoiCauTXLine.length - 23),dataSoiCauTXLine.length);
            var posX = 0;
            var docao = 7*32.5;
            for(var i =0; i < dataSoiCauDetail.length; i++){
                var docaoY = dataSoiCauDetail[i].result * docao/18;
                var str = "";
                var col = null;
                if (dataSoiCauDetail[i].result >= 11){
                    str = "sc_t";
                    col = cc.color.WHITE;
                }else{
                    str = "sc_x";
                    col = cc.color.BLACK;
                }
                this.createSprite(this.dataTable,"sc_" + i,cc.p(posX ,(478 - docao) + docaoY),res_TaiXiu + str + ".png");
                this.createText(this["sc_" + i], "tx_" + i, cc.p(this["sc_" + i].width/2, this["sc_" + i].height/2), dataSoiCauDetail[i].result, fontTahoma.fontName, 17);
                this["tx_" + i].setColor(col);
                this.arrTable.push(this["sc_" + i]);
                posX = posX + 32.9;
            }
            this.lineTotal = new cc.DrawNode();
            this.dataTable.addChild(this.lineTotal);

            for(var i =0; i < this.arrTable.length; i++){
                if(i < this.arrTable.length - 1) {
                    this.lineTotal.drawSegment(cc.p(this.arrTable[i].getPositionX(), this.arrTable[i].getPositionY()), cc.p(this.arrTable[i + 1].getPositionX(), this.arrTable[i + 1].getPositionY()), 1.5, colorLineT);
                    this.lineTotal.setLocalZOrder(-1);
                }
            }
            /// ve color mau
            this.lineXX1 = new cc.DrawNode();
            this.dataTable.addChild(this.lineXX1);

            this.lineXX2 = new cc.DrawNode();
            this.dataTable.addChild(this.lineXX2);

            this.lineXX3 = new cc.DrawNode();
            this.dataTable.addChild(this.lineXX3);
            var posX = 0;
            docao = 6*32.9;
            for(var i =0; i < dataSoiCauDetail.length; i++){
                var docaoX1 = dataSoiCauDetail[i].xucxac1 * docao/6;
                var posY1 = (222 - docao) + docaoX1;
                this.lineXX1.drawDot(cc.p(posX, posY1), 10, colorLine1);
                if(i < dataSoiCauDetail.length - 1){
                    var docaoX1_2 = dataSoiCauDetail[i + 1].xucxac1 * docao/6;
                    var posY1_2 = (222 - docao) + docaoX1_2;
                    this.lineXX1.drawSegment(cc.p(posX, posY1), cc.p(posX + 33, posY1_2), 1.5, colorLine1);
                }

                var docaoX2 = dataSoiCauDetail[i].xucxac2 * docao/6;
                var posY2 = (222 - docao) + docaoX2;
                this.lineXX2.drawDot(cc.p(posX, posY2), 9, colorLine2);
                if(i < dataSoiCauDetail.length - 1){
                    var docaoX2_2 = dataSoiCauDetail[i + 1].xucxac2 * docao/6;
                    var posY2_2 = (222 - docao) + docaoX2_2;
                    this.lineXX1.drawSegment(cc.p(posX, posY2), cc.p(posX + 33, posY2_2), 1.5, colorLine2);
                }

                var docaoX3 = dataSoiCauDetail[i].xucxac3 * docao/6;
                var posY3 = (222 - docao) + docaoX3;
                this.lineXX3.drawDot(cc.p(posX, posY3), 8, colorLine3);
                if(i < dataSoiCauDetail.length - 1){
                    var docaoX3_2 = dataSoiCauDetail[i + 1].xucxac3 * docao/6;
                    var posY3_2 = (222 - docao) + docaoX3_2;
                    this.lineXX1.drawSegment(cc.p(posX, posY3), cc.p(posX + 33, posY3_2), 1.5, colorLine3);
                }
                posX = posX + 33;
            }


            this.is_create_thongke = true;
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
                cc.eventManager.resumeTarget(this.dataTableSC, true);

            }else{ // next
                this.bt_next.setEnabled(false);
                this.bt_next.setBright(false);
                this.bt_back.setEnabled(true);
                this.bt_back.setBright(true);
                this.myPage = 2;
                this.createLayoutThongKe();
                cc.eventManager.pauseTarget(this.dataTableSC, true);
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

