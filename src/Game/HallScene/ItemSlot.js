ItemSlots = ccui.Button.extend({
    _spComingSoon: null,
    _size: null,
    _spStatus: null,
    _lbPrize: null,
    _lbPotRoom1: null,
    _lbPotRoom2: null,
    _lbPotRoom3: null,
    _spX2PotRoom1: null,
    _spX2PotRoom2: null,
    _spX2PotRoom3: null,

    _LayerThangLon: null,
    _layerNoHu: null,
    _spGrowThangLon: null,
    _spGrowNoHu: null,
    _spBgTextThangLon: null,
    _spBgTextNoHu: null,
    _lbPrizeThangLon: null,
    _lbPrizeNoHu: null,
    _isX2Pot1: false,
    _isX2Pot2: false,
    _isX2Pot3: false,
    _isPlay: false,
    _valuePot1: 500000,
    _valuePot2: 5000000,
    _valuePot3: 50000000,

    _totalValuePot1: 0,
    _totalValuePot2: 0,
    _totalValuePot3: 0,
    _gameName: "",
    _nameSocket: "",
    _openGame: null,
    _result: {
        result: 0,
        prize: 0,
        currentMoney: 0
    },
    _btnDungQuay: null,
    _audio: null,
    _sumPot: 3,
    _isComingSoon: false,
    _isWaitingDownLoad: false,
    _am: null,
    _manifestPath: null,
    _toragePath: null,
    _ShowDownload: null,
    _content: {
        //gameKey: KEY_SLOT,
        name: "slot1",
        //isComingSoon: false,
        icon: res_ListGame + "slot1.png",
        //nameSocket: "vqv",
        //openGame: null,
        //manifestPath: "res/VuongQuocVin/project.manifest",
        //toragePath: "update/res/VuongQuocVin",
        //resource: g_resources_slot_vqv
    },
    _pots: {
        gameKey: 1,
        potRoom100: 500000,
        potRoom1000: 5000000,
        potRoom10000: 50000000,
        x2Room100: 0,
        x2Room1000: 0,
        x2Room10000: 0
    },
    isF: {
        potRoom100: true,
        potRoom1000: true,
        potRoom10000: true
    },
    _potRun: {
        potRoom100: 500000,
        potRoom1000: 5000000,
        potRoom10000: 50000000
    },
    _spaceRun: {
        potRoom100: 1,
        potRoom1000: 1,
        potRoom10000: 1
    },
    countPotCurrent: 0,
    testCountRun: 0,
    ctor: function (content, size) {
        //cc.spriteFrameCache.addSpriteFrames("res/MenuSlots/PlistMenuSlots.plist");
        //cc.spriteFrameCache.addSpriteFrames("res/MenuSlots/hieu_ung/PlistHieuUng.plist");
        this._content = content;
        this._size = size;
        //this._isComingSoon = this._content.isComingSoon;
        //var fontNamePot = fontRobotoMedium.fontName;
        //var fontNamePrize = fontRobotoMedium.fontName;
        //var fontSize = 20;
        //this._capInsetsNormal = cc.rect(0, 0, 0, 0);
        //this._normalTextureSize = cc.size(0, 0);
        ccui.Button.prototype.ctor.call(this);
        //this.setTouchEnabled(true);
        if (this._content.icon) {
            var textype = ccui.Widget.LOCAL_TEXTURE;
            if (cc.spriteFrameCache.getSpriteFrame(this._content.icon))
                textype = ccui.Widget.PLIST_TEXTURE;
            this.loadTextures(this._content.icon, this._content.icon, this._content.icon, textype);
        }
        //if (this._content.isComingSoon) {
        //
        //    this._spStatus = GuiUtil.createSprite("res/MenuSlots/coming_soon.png");
        //    this._spStatus.setPosition(cc.p(size.width / 2, size.height - 10));
        //    this.addChild(this._spStatus);
        //} else {
        //    this._spStatus = GuiUtil.createSprite("res/MenuSlots/dung_quay.png");
        //    this._spStatus.setPosition(cc.p(size.width / 2, size.height - 10));
        //    this.addChild(this._spStatus);
        //
        //    this._lbPrize = new ccui.Text('', fontNamePrize, 36);
        //    this._lbPrize.setPosition(cc.p(size.width / 2, size.height / 2));
        //    this._lbPrize.setColor(colorMoneyVin);
        //    this.addChild(this._lbPrize);
        //    this._lbPrize.enableShadow(cc.color(110, 110, 110), cc.size(2, 2), 1);
        //
        //    this._lbPotRoom1 = new ccui.Text('500.000', fontNamePot, fontSize);
        //    this._lbPotRoom1.setPosition(cc.p(size.width / 2, size.height / 2 - 95));
        //    this._lbPotRoom1.setColor(cc.color.YELLOW);
        //    this.addChild(this._lbPotRoom1);
        //    this._lbPotRoom2 = new ccui.Text('5.000.000', fontNamePot, fontSize);
        //    this._lbPotRoom2.setPosition(cc.p(size.width / 2, size.height / 2 - 128));
        //    this._lbPotRoom2.setColor(cc.color.YELLOW);
        //    this.addChild(this._lbPotRoom2);
        //    this._lbPotRoom3 = new ccui.Text('50.000.000', fontNamePot, fontSize);
        //    this._lbPotRoom3.setPosition(cc.p(size.width / 2, size.height / 2 - 161));
        //    this._lbPotRoom3.setColor(cc.color.YELLOW);
        //    this.addChild(this._lbPotRoom3);
        //
        //
        //    this._spX2PotRoom1 = GuiUtil.createSprite("res/MenuSlots/X2.png");
        //    this._spX2PotRoom1.setPosition(cc.p(size.width / 2 - 92, size.height / 2 - 95));
        //    this.addChild(this._spX2PotRoom1);
        //
        //    this._spX2PotRoom2 = GuiUtil.createSprite("res/MenuSlots/X2.png");
        //    this._spX2PotRoom2.setPosition(cc.p(size.width / 2 - 92, size.height / 2 - 128));
        //    this.addChild(this._spX2PotRoom2);
        //
        //    this._spX2PotRoom3 = GuiUtil.createSprite("res/MenuSlots/X2.png");
        //    this._spX2PotRoom3.setPosition(cc.p(size.width / 2 - 92, size.height / 2 - 161));
        //    this.addChild(this._spX2PotRoom3);
        //
        //    this._btnDungQuay = new ccui.Button();
        //    var textype = ccui.Widget.LOCAL_TEXTURE;
        //    if (cc.spriteFrameCache.getSpriteFrame("res/MenuSlots/dung_nor.png"))
        //        textype = ccui.Widget.PLIST_TEXTURE;
        //    this._btnDungQuay.loadTextures("res/MenuSlots/dung_nor.png", "res/MenuSlots/dung_click.png", "res/MenuSlots/dung_click.png", textype);
        //    this._btnDungQuay.setPosition(cc.p(size.width / 2, size.height - 50));
        //    this._btnDungQuay.addTouchEventListener(this.onTouchDungQuay, this);
        //    //this._btnDungQuay.setTitleText("Dừng quay");
        //    this._btnDungQuay.setVisible(false);
        //    this.addChild(this._btnDungQuay);
        //    this._spX2PotRoom1.setVisible(false);
        //    this._spX2PotRoom2.setVisible(false);
        //    this._spX2PotRoom3.setVisible(false);

            //this.initThangLon();
            //this.initNoHu();
            //if (cc.sys.isNative && this._content.manifestPath != "") {
            //    this.initLayerDownload();
            //    this.checkDownLoad(this._content.manifestPath, this._content.toragePath);
            //}

        //}
    },
})

ItemMiniGame = ccui.Button.extend({
    _content: {
        name: "mini_tx",
        icon: res_ListGame + "mini_tx.png",
    },
    ctor: function (content, size) {
        this._content = content;
        this._size = size;

        ccui.Button.prototype.ctor.call(this);
        if (this._content.icon) {
            var textype = ccui.Widget.LOCAL_TEXTURE;
            if (cc.spriteFrameCache.getSpriteFrame(this._content.icon))
                textype = ccui.Widget.PLIST_TEXTURE;
            this.loadTextures(this._content.icon, this._content.icon, this._content.icon, textype);
        }
    },
})