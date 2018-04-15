

//var sercurity = null;

var HistoryTranfer = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this._kindMoney = MONEY_THAT;
            return true;
        },
        customizeGUI: function () {
            cc.log("HistoryTranfer");
            this.createTabView();
            this.createContentListView();
            this.createControlView();
        },

        createTabView: function () {
            var arrTitleTab = ["CHƠI " + DON_VI_TIEN_THAT, "CHƠI " + DON_VI_TIEN_TANG, "NHẬN " + DON_VI_TIEN_THAT, "NHẬN " + DON_VI_TIEN_TANG, "TIÊU " + DON_VI_TIEN_THAT];
            this._pTab = new OtherTabViewFrame(this, cc.size(1072, 58), arrTitleTab, 1);
            this._pTab.setAnchorPoint(0.5, 0.5);
            this._pTab.setPosition(cc.p(639, 527));
            this.addChild(this._pTab);
        },

        createContentListView: function () {
            this._pContent = new DataViewFrame(this, cc.size(1074, 400), HistoryTranfer.dataColumn);
            this._pContent.setAnchorPoint(0.5, 0.5);
            this._pContent.setPosition(cc.p(640, 301));
            this.addChild(this._pContent);


            this._pContent.setData(HistoryTranfer.dataFuck);
        },

        createControlView: function () {
            this._pControl = new ControlerTableFrame(this, 1);
            this._pControl.setAnchorPoint(0.5, 0.5);
            this._pControl.setPosition(cc.p(640, 66));
            this.addChild(this._pControl);
        },

        onClickTabOtherFrame : function(tabIndex, index){
            return;
            if (index == 0) {
                this.gotoSmsPlus();
            } else if (index == 1) {
                cc.log("2");
                this.gotoBMDN();
            } else if (index == 2) {
                cc.log("3");
                this.gotoKetSat();
            }
        },

        onTouchCell: function (cell, colum) {
            cc.log("cell = " + cell + " colum = " + colum);
            //if(this.datas[cell].description.length >= 25){
            //    openDetailLSGDGame(this,this.datas[cell].transId,this.datas[cell].transactionTime,this.datas[cell].serviceName,this.datas[cell].moneyExchange,this.datas[cell].currentMoney,this.datas[cell].description,this._moneyType);
            //}
        },

        onEnter: function(){
            this._super();

        },
    }
)
HistoryTranfer.dataFuck = [
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "Xem",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },{
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    },
    {
        chitiet : "Xem",
        currentMoney :"9.814.427",
        description : "Phòng: 43, Bàn: 434",
        description1:"Phòng: 43, Bàn: 434",
        moneyExchange:"-500",
        serviceName:"Chơi game Poker",
        transId :42791,
        transactionTime :"2018-04-13 15:20:16",
    }
];

HistoryTranfer.dataColumn = [
    {
        title: "MÃ GD",
        width: 126,
        color: DataViewFrame.COLOR_NORMAL,
        apiName: "transId",
        action: false,
        textAlignment: cc.TEXT_ALIGNMENT_CENTER,
        fontSize : 18
    },
    {
        title: "THỜI GIAN",
        width: 238,
        color: DataViewFrame.COLOR_NORMAL,
        apiName: "transactionTime",
        action: false,
        textAlignment: cc.TEXT_ALIGNMENT_CENTER,
        fontSize : 18
    },
    {
        title: "DỊCH VỤ",
        width: 187,
        color: DataViewFrame.COLOR_NORMAL,
        apiName: "serviceName",
        action: false,
        textAlignment: cc.TEXT_ALIGNMENT_CENTER,
        fontSize : 18
    },
    {
        title: "PHÁT SINH",
        width: 187,
        color: DataViewFrame.COLOR_MONEY_HISTORY,
        apiName: "moneyExchange",
        action: false,
        textAlignment: cc.TEXT_ALIGNMENT_RIGHT,
        fontSize : 18
    },
    {
        title: "SỐ DƯ",
        width: 196,
        color: DataViewFrame.COLOR_MONEY_HISTORY,
        apiName: "currentMoney",
        action: false,
        textAlignment: cc.TEXT_ALIGNMENT_RIGHT,
        fontSize : 18
    },
    {
        title: "CHI TIẾT",
        width: 140,
        color: DataViewFrame.COLOR_MONEY_HISTORY,
        apiName: "chitiet",
        action: true,
        textAlignment: cc.TEXT_ALIGNMENT_CENTER,
        fontSize : 18
    }
];

