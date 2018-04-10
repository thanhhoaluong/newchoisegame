/**
 * Created by PVC on 7/17/2017.
 */
var BaseLayerTable = BaseLayer.extend(
    {
        _titleText:null,
        _size:null,
        _btnExit:null,
        _bgTitle:null,
        _lbTitle:null,
        _bgLayer:null,
        _bgImage:null,
        _pContent:null,
        _pTab:null,
        _pControl:null,
        _moneyType:null,
        ctor: function (){

            this._super();
            cc.spriteFrameCache.addSpriteFrames("res/Minigame/ImageChung/PlistImageChung.plist");

            this.commonImagePath = "res/Minigame/ImageChung/";
            this._moneyType = MONEY_XU;
            this._size = cc.size(1148,692);
            this._titleText = "";
            this.addLayout(this,"_bgLayer",cc.p(640,360),null,cc.size(1920,1280),true);
            this._bgLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this._bgLayer.setBackGroundColor(cc.color.BLACK);
            this._bgLayer.setBackGroundColorOpacity(200);
            this._bgLayer.setTag(BaseLayerTable.BTN_EXIT);
            this._bgLayer.addTouchEventListener(this.onTouchEventHandler, this);

            this.addImage(this,"_bgImage",cc.p(640,360),res_Lobby + "/bground_tab.png",this._size);
            //this.addImage(this,"new",cc.p(640,360),res_Lobby + "/bground_tab.png",cc.size(1148,692));
            //this.addSpriteStructureWithoutResourcePath(layout, "bg_tab_menu", cc.p(640, 360.41), res_Lobby + "/bground_tab.png");
            this._bgImage.setTouchEnabled(true);
            var positionY = 360 + this._size.height/2 - 26;
            //this.addImage(this,"_bgcontent",cc.p(640,314),res_Lobby + "/bg_content.png",cc.size(1037,489));
            this.addImage(this,"_title",cc.p(640,658),res_Lobby + "/titile.png",cc.size(414,57));
            //this.addSpriteStructureWithoutResourcePath(layout, "bg_content", cc.p(640, 310), res_Lobby + "/bg_content.png");

            this.addText(this,"_lbTitle",cc.p(640,658),this._titleText,fontArialB.fontName,35);
            this._lbTitle.setColor(cc.color(154,92,47));
            //positionY = 360 + this._size.height/2 - 35;
            //var positionX = 640 + this._size.width/2 - 39;
            positionY = 639;
            var positionX = 1140;
            this._btnExit = new ccui.Button();
            var texType = ccui.Widget.LOCAL_TEXTURE;
            texType =(cc.spriteFrameCache.getSpriteFrame("res/Minigame/ImageChung/btn_close_allbang.png") || texType == ccui.Widget.PLIST_TEXTURE) ? ccui.Widget.PLIST_TEXTURE : ccui.Widget.LOCAL_TEXTURE;
            this._btnExit.loadTextures(res_Lobby + "/btnClose.png", res_Lobby + "/btnClose_s.png", res_Lobby + "/btnClose_s.png", texType);
            this._btnExit.setPosition(cc.p(positionX,positionY));
            this.addChild(this._btnExit);
            this._btnExit.setPressedActionEnabled(true);
            this._btnExit.addTouchEventListener(this.onTouchExit, this);
            this._btnExit.setTag(2);

        },
        onTouchExit:function(sender, type)
        {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:
                    this.removeFromParent();
                    if(typeof this.setNullFromParent === 'function') this.setNullFromParent();
                    break;
            }
        },
        /*onButtonRelease: function(btn, id){
            switch(id){
                case BaseLayerTable.BTN_EXIT:
                    this.removeFromParent();
                    break;
            }
        },*/
        setTitleText:function(text, options)
        {
            var fontSize = (options && options.fontSize) ? options.fontSize : 35;
            var fontName = (options && options.fontName) ? options.fontName : fontArialB.fontName;
            this._titleText = text;
            this._lbTitle.setString(text);
            this._lbTitle.setFontSize(fontSize);
            this._lbTitle.setFontName(fontName);
        },
        getTiLeSize: function()
        {
            //return this._size.width/BaseLayerTable.SIZEW;
            return 1;
        }
        ,
        convertPosition:function(position)
        {
            var p = cc.p(position.x * this.getTiLeSize(),position.y*this.getTiLeSize());
            return p;
        },
        onClickTab:function(tabIndex, index)
        {

        }
        ,
        onClickCell:function(cell, colum)
        {

        },
        onClickControl:function(tag, currentPage)
        {

        }
        ,
        showLoading : function(){
            if(this._pContent != null && this._pContent.getChildByName("loadingdatamaster") == null){
                var loading = GuiUtil.createSprite("res/ResourceMenuTab/Mail/btnRefresh.png");
                var x = this._pContent.getContentSize().width/2;
                var y = this._pContent.getContentSize().height/2;
                loading.setPosition(cc.p(x,y));
                loading.setName("loadingdatamaster");
                this._pContent.addChild(loading);

                var rotateByVT = new cc.RotateBy(1, 360);
                loading.runAction(cc.repeatForever(rotateByVT));
            }else{
                var rotateByVT = new cc.RotateBy(1, 360);
                this._pContent.getChildByName("loadingdatamaster").setVisible(true);
                //this.panelLichSuMiniPoker.getChildByName("loadingdata").runAction(cc.repeatForever(rotateByVT));
            }
        },

        hideLoading : function (){
            //this.panelLichSuMiniPoker.getChildByName("loadingdata").stopAllActions();
            if(this._pContent.getChildByName("loadingdatamaster") == null)
            {

            }else
            {
                this._pContent.getChildByName("loadingdatamaster").setVisible(false);
            }

        }
    }

)

BaseLayerTable.BTN_EXIT = -1;
BaseLayerTable.SIZEW = 1096;
BaseLayerTable.SIZEH = 628;
BaseLayerTable.SIZE_TAB_W = 1002;
BaseLayerTable.SIZE_TAB_H = 40;

BaseLayerTable.BTN_BACK_ALL = 0;
BaseLayerTable.BTN_BACK = 1;
BaseLayerTable.BTN_NEXT = 2;
BaseLayerTable.BTN_NEXT_ALL = 3;
