var LayerTableFrame = BaseLayer.extend(
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
            this._size = cc.size(1103,642);
            this._titleText = "";
            this.createLayout(this,"_bgLayer",cc.p(640,360),null,cc.size(1920,1280),true);
            this._bgLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this._bgLayer.setBackGroundColor(cc.color.BLACK);
            this._bgLayer.setBackGroundColorOpacity(150);
            this._bgLayer.setTag(LayerTableFrame.BTN_EXIT);
            this._bgLayer.addTouchEventListener(this.onTouchEventHandler, this);

            this.createImage(this,"_bgImage",cc.p(640,360),res_TableGui + "bg_table.png",this._size);
            this._bgImage.setTouchEnabled(true);
            var positionY = 360 + this._size.height/2 - 26;


            positionY = 639;
            var positionX = 1140;
            this._btnExit = new ccui.Button();
            var texType = ccui.Widget.LOCAL_TEXTURE;
            texType =(cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bg_table.png") || texType == ccui.Widget.PLIST_TEXTURE) ? ccui.Widget.PLIST_TEXTURE : ccui.Widget.LOCAL_TEXTURE;
            this._btnExit.loadTextures(res_SignUp + "b_close.png", res_SignUp + "b_close.png", res_SignUp + "b_close.png", texType);
            this._btnExit.setPosition(cc.p(positionX,positionY));
            this.addChild(this._btnExit);
            this._btnExit.setPressedActionEnabled(true);
            this._btnExit.addTouchEventListener(this.onTouchExit, this);
            this._btnExit.setTag(2);
            this.runAction(cc.sequence(cc.scaleTo(0.12, 1.1), cc.scaleTo(0.12,0.95), cc.scaleTo(0.12,1)));

        },
        onTouchExit:function(sender, type)
        {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:
                    this.runAction((cc.sequence(cc.scaleTo(0.1, 1.1), cc.delayTime(0.1), cc.scaleTo(0.15,0),cc.callFunc(this.destroyBase, this))));
                    break;
            }
        },

        destroyBase :function(){
            this.removeFromParent();
            if(typeof this.setNullFromParent === 'function') this.setNullFromParent();
        },

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
                var loading = GuiUtility.createSprite("res/ResourceMenuTab/Mail/btnRefresh.png");
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
            if(this._pContent.getChildByName("loadingdatamaster") == null)
            {

            }else
            {
                this._pContent.getChildByName("loadingdatamaster").setVisible(false);
            }

        }
    }

)

LayerTableFrame.BTN_EXIT = -1;
LayerTableFrame.SIZEW = 1096;
LayerTableFrame.SIZEH = 628;
LayerTableFrame.SIZE_TAB_W = 1002;
LayerTableFrame.SIZE_TAB_H = 40;

LayerTableFrame.BTN_BACK_ALL = 0;
LayerTableFrame.BTN_BACK = 1;
LayerTableFrame.BTN_NEXT = 2;
LayerTableFrame.BTN_NEXT_ALL = 3;
