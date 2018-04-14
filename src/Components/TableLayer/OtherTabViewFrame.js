var OtherTabViewFrame = ccui.Layout.extend(
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
                btnTab.setTitleFontSize(25);
                btnTab.setTitleText(this._arrTitleTab[i]);
                btnTab.setTitleColor(GuiUtility.color("#491e03"));
                btnTab.getTitleRenderer().setColor(GuiUtility.color("#491e03"));
                var texType = ccui.Widget.LOCAL_TEXTURE;
                if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "bt_title_1.png")) {
                    texType = ccui.Widget.PLIST_TEXTURE;
                }
                if(i == 0)
                {
                    btnTab.loadTextures(res_TableGui + "ct_small.png", res_TableGui + "ct_small_s.png", res_TableGui + "ct_small_s.png", texType);
                    btnTab.normalFileName = res_TableGui + "ct_small.png";
                    btnTab.clickedFileName = res_TableGui + "ct_small_s.png";
                    btnTab.isSelected = false;
                }else if(i == this._arrTitleTab.length - 1)
                {
                    btnTab.loadTextures(res_TableGui + "ct_small.png", res_TableGui + "ct_small_s.png", res_TableGui + "ct_small_s.png", texType);

                    btnTab.normalFileName = res_TableGui + "ct_small.png";
                    btnTab.clickedFileName = res_TableGui + "ct_small_s.png";
                    btnTab.isSelected = false;
                }else
                {
                    btnTab.loadTextures(res_TableGui + "ct_small.png", res_TableGui + "ct_small_s.png", res_TableGui + "ct_small_s.png", texType);
                    btnTab.normalFileName = res_TableGui + "ct_small.png";
                    btnTab.clickedFileName = res_TableGui + "ct_small_s.png";
                    btnTab.isSelected = false;
                }
                if(i == indexFocus1)
                {
                    var texType = ccui.Widget.LOCAL_TEXTURE;
                    if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "ct_small_s.png")) {
                        texType = ccui.Widget.PLIST_TEXTURE;
                    }
                    btnTab.isSelected = true;
                    btnTab.loadTextureNormal(btnTab.clickedFileName,texType);
                    btnTab.getTitleRenderer().setColor(GuiUtility.color("#491e03"));
                }
                btnTab.addTouchEventListener(this.onTouchEventHandler, this);
                btnTab.setPosition(cc.p(sizeTab.width/2 + i * sizeTab.width, sizeTab.height/2-2));

                if (cc.sys.isNative) {
                    btnTab.setTitleFontName("res/Font/" + btnTab.getTitleFontName() + ".ttf");
                }
                this.addChild(btnTab);
            }
        },

        setIndexTabFocus:function(index)
        {
            var texType = ccui.Widget.LOCAL_TEXTURE;
            if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "ct_small.png")) {
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
                    if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "ct_small.png")) {
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
                            this.getChildByTag(i).getTitleRenderer().setColor(GuiUtility.color("#491e03"));
                            this.getChildByTag(i).isSelected = true;
                            this._layer.onClickTabOtherFrame(this._tabIndex, sender.getTag());
                        }else
                        {
                            this.getChildByTag(i).getTitleRenderer().setColor(GuiUtility.color("#491e03"));
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