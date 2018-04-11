var LayoutTabView = ccui.Layout.extend(
    {
        _layer:null,
        _arrTitleTab: null,
        _size:null,
        _tabIndex:1,
        ctor: function (layer , size, arrTitleTab, tabIndex, indexFocus){
            this._super();
            this._layer = layer;
            this._size = size;
            this._arrTitleTab = arrTitleTab;
            this._tabIndex = tabIndex;
            this.setContentSize(this._size);
            //var w = this._size.width/this._arrTitleTab.length;
            var w = 175;
            var sizeTab = cc.size(this._size.width/(arrTitleTab.length),this._size.height);
            var indexFocus1 = 0;
            if(indexFocus)
            {
                indexFocus1 = indexFocus;
            }

            for(var i = 0; i < this._arrTitleTab.length; i++)
            {

                var btnTab = new ccui.Button();
                btnTab.ignoreContentAdaptWithSize(false);
                btnTab.setContentSize(sizeTab);
                btnTab.setPressedActionEnabled(false);
                btnTab.setTag(i);
                btnTab.setTitleFontName(fontArialB.fontName);
                btnTab.setTitleFontSize(20);
                //btnTab.setTitleText(this._arrTitleTab[i]);
                //btnTab.setTitleColor(GuiUtil.color("#d8daf3"));
                btnTab.getTitleRenderer().setColor(GuiUtil.color("#d8daf3"));
                var texType = ccui.Widget.LOCAL_TEXTURE;
                if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bt_title_1.png")) {
                    texType = ccui.Widget.PLIST_TEXTURE;
                }
                if(i == 0)
                {
                    btnTab.loadTextures(res_TableGui + "bt_title_1.png", res_TableGui + "bt_title_1_s.png", res_TableGui + "bt_title_1_s.png", texType);
                    btnTab.normalFileName = res_TableGui + "bt_title_1.png";
                    btnTab.clickedFileName = res_TableGui + "bt_title_1_s.png";
                    btnTab.isSelected = false;
                }else if(i == this._arrTitleTab.length - 1)
                {
                    btnTab.loadTextures(res_TableGui + "bt_title_1.png", res_TableGui + "bt_title_1_s.png", res_TableGui + "bt_title_1_s.png", texType);
                    btnTab.setScaleX(-1);
                    //btnTab.setRotation(180);
                    //btnTab.getTitleRenderer().setRotation(180);
                    //btnTab._titleRenderer.setRotation(180);

                    btnTab.normalFileName = res_TableGui + "bt_title_1.png";
                    btnTab.clickedFileName = res_TableGui + "bt_title_1_s.png";
                    btnTab.isSelected = false;
                }else
                {
                    btnTab.loadTextures(res_TableGui + "bt_title_mid.png", res_TableGui + "bt_title_mid_s.png", res_TableGui + "bt_title_mid_s.png", texType);
                    btnTab.normalFileName = res_TableGui + "bt_title_mid.png";
                    btnTab.clickedFileName = res_TableGui + "bt_title_mid_s.png";
                    btnTab.isSelected = false;
                }
                if(i == indexFocus1)
                {
                    var texType = ccui.Widget.LOCAL_TEXTURE;
                    if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bt_title_mid_s.png")) {
                        texType = ccui.Widget.PLIST_TEXTURE;
                    }
                    btnTab.isSelected = true;
                    btnTab.loadTextureNormal(btnTab.clickedFileName,texType);
                    btnTab.getTitleRenderer().setColor(GuiUtil.color("#344265"));
                }
                btnTab.addTouchEventListener(this.onTouchEventHandler, this);
                btnTab.setPosition(cc.p(sizeTab.width/2 + i * sizeTab.width, sizeTab.height/2-2));

                if (cc.sys.isNative) {
                    btnTab.setTitleFontName("res/Font/" + btnTab.getTitleFontName() + ".ttf");
                }
                this.addChild(btnTab);

                var _sp = new cc.Sprite(res_TableGui + this._arrTitleTab[i] + ".png");
                _sp.setPosition(cc.p(btnTab.width/2, btnTab.height/2));
                if(i == this._arrTitleTab.length - 1)
                    _sp.setScaleX(-1);
                btnTab.addChild(_sp)
            }
        },

        setIndexTabFocus:function(index)
        {
            var texType = ccui.Widget.LOCAL_TEXTURE;
            if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bt_title_mid.png")) {
                texType = ccui.Widget.PLIST_TEXTURE;
            }
            for(var i = 0; i < this._arrTitleTab.length; i++){
                if(i == index) {
                    if(this.getChildByTag(i).isSelected)
                    {
                        return;
                    }
                    this.getChildByTag(i).loadTextureNormal(this.getChildByTag(i).clickedFileName,texType);
                    this.getChildByTag(i).isSelected = true;
                }else{
                    this.getChildByTag(i).loadTextureNormal(this.getChildByTag(i).normalFileName,texType);
                    this.getChildByTag(i).isSelected = false;
                }
            }
        },

        onTouchEventHandler: function (sender, type) {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:
                    var texType = ccui.Widget.LOCAL_TEXTURE;
                    if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bt_title_mid.png")) {
                        texType = ccui.Widget.PLIST_TEXTURE;
                    }
                    for(var i = 0; i < this._arrTitleTab.length; i++)
                    {
                        if(this.getChildByTag(i) == sender)
                        {
                            if(this.getChildByTag(i).isSelected)
                            {
                                return;
                            }
                            this.getChildByTag(i).loadTextureNormal(this.getChildByTag(i).clickedFileName,texType);
                            //this.getChildByTag(i).setTitleColor(GuiUtil.color("#344265"));
                            this.getChildByTag(i).getTitleRenderer().setColor(GuiUtil.color("#344265"));
                            this.getChildByTag(i).isSelected = true;
                            this._layer.onClickTab(this._tabIndex, sender.getTag());
                        }else
                        {
                            this.getChildByTag(i).getTitleRenderer().setColor(GuiUtil.color("#d8daf3"));
                            if(this.getChildByTag(i).isSelected)
                            {
                                this.getChildByTag(i).isSelected = false;
                                this.getChildByTag(i).loadTextureNormal(this.getChildByTag(i).normalFileName,texType);
                                //this.getChildByTag(i).setTitleColor(GuiUtil.color("#d8daf3"));

                            }

                        }
                    }
                    break;
            }
        },



    }
)